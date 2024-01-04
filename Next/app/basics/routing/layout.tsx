import { ReactNode } from "react";

type LayoutProps = {
   children: ReactNode;
};

const LayoutFile = ({ children }: LayoutProps) => {
   return (
      <div>
         <h3 className="text-center text-4xl text-teal-200">Header</h3>
         <main className="flex-around my-10 h-[400px] text-2xl text-teal-200">
            <aside className="border-sp flex-center h-full w-[400px] rounded-xl">Sidebar</aside>
            <section className="border-sp flex-center h-full w-full rounded-xl">{children}</section>
         </main>
         <h3 className="text-center text-4xl text-teal-200">Footer</h3>
      </div>
   );
};

export default LayoutFile;
