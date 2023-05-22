"use client";
import { SessionProvider } from "next-auth/react";

export const Provider = ({ session, children }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};
