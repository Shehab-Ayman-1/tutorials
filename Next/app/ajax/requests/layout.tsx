import { Fragment, ReactNode } from "react";

type LayoutProps = {
   children: ReactNode;
   GET: ReactNode;
};

const layout = ({ children, GET }: LayoutProps) => {
   return (
      <Fragment>
         {children}
         {GET}
      </Fragment>
   );
};

export default layout;
