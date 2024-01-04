type Link = {
   name: string;
   link: string;
   icon: string;
   disabled?: boolean;
};
export type LinksProps = {
   title: string;
   links: Link[];
};

export const links: LinksProps[] = [
   {
      title: "Basics",
      links: [
         { name: "Suspense", link: "/basics/suspend", icon: "fa fa-market-alt" },
         { name: "Routing Files", link: "/basics/routing", icon: "fa fa-market-alt" },
         { name: "404 Page", link: "/404Page", icon: "fa fa-market-alt" },
      ],
   },
   {
      title: "Ajax",
      links: [
         { name: "CRUD Operator", link: "/ajax/requests", icon: "fa fa-market-alt" },
         { name: "Forms", link: "/ajax/forms", icon: "fa fa-market-alt" },
      ],
   },
   {
      title: "Hooks",
      links: [
         { name: "useRouter", link: "/hooks/useRouter", icon: "fa fa-market-alt" },
         { name: "useCallback", link: "/hooks/useCallback", icon: "fa fa-market-alt" },
      ],
   },
];
