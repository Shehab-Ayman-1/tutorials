import { Typography } from "@/components/ui";
import Link from "next/link";

export default async function Home() {
   return (
      <div className="fixed-center flex-center flex-col">
         <img src="./favicon.ico" alt="favicon" />
         <Typography className="text-gradient text-4xl">Welcome To Next.js Toturial</Typography>
         <Link className="hover:text-white" href="https://nextjs.org">
            https://nextjs.org
         </Link>
         <Link className="hover:text-white" href="https://next-auth.js.org">
            https://next-auth.js.org
         </Link>
      </div>
   );
}
