import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { DBConnection } from "@/utils/database";
import UsersSchema from "@/models/users.schema";

const handler = NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async session({ session }) {
			// store the user id from MongoDB to session
			const sessionUser = await UsersSchema.findOne({ email: session.user.email });
			session.user.id = sessionUser._id.toString();

			return session;
		},
		async signIn({ account, profile, user, credentials }) {
			try {
				await DBConnection();

				// check if user already exists
				const userExists = await UsersSchema.findOne({ email: profile.email });

				// if not, create a new document and save user in MongoDB
				if (!userExists) {
					await UsersSchema.create({
						email: profile.email,
						username: profile.name,
						image: profile.avatar_url || profile.picture || profile.image,
					});
				}
				console.log(profile);

				return true;
			} catch (error) {
				console.log("Error checking if user exists: ", error.message);
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };
