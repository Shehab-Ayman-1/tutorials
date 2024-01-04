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
         { name: "Suspense", link: "/suspend", icon: "fa fa-market-alt" },
         { name: "Routing Files", link: "/routing", icon: "fa fa-market-alt" },
         { name: "404 Page", link: "/404Page", icon: "fa fa-market-alt" },
      ],
   },
   {
      title: "Ajax",
      links: [
         { name: "Get Static Props", link: "/ajax", icon: "fa fa-market-alt" },
         { name: "POST", link: "/post", icon: "fa fa-market-alt" },
      ],
   },
];
