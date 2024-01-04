import { ReactNode } from "react";

type LayoutProps = {
   children: ReactNode;
   users: ReactNode;
   articles: ReactNode;
};

export default function Layout({ children, users, articles }: LayoutProps) {
   const isLoggedIn = true;

   if (!isLoggedIn) return <h3 className="text-4xl">Please Sign In Before</h3>;
   return (
      <div>
         <h3 className="mb-10 text-4xl text-teal-200">Header</h3>
         {children}

         {users}

         {articles}
         <h3 className="mt-10 text-4xl text-teal-200">Footer</h3>
      </div>
   );
}
