import { Menu, MenuItem } from "@/components/ui";
import { links } from "@/constants";
import Link from "next/link";

export const Desktop = () => {
   return (
      <div className="flex-center !hidden flex-wrap print:!hidden lg:!flex">
         {links.map(({ title, links }, i) => (
            <Menu handler={title} key={i}>
               {links?.map(({ name, link, icon, disabled }, i) => (
                  <Link
                     href={link}
                     className={`whitespace-nowrap font-bold ${disabled ? "pointer-events-none" : ""}`}
                     key={i}
                  >
                     <MenuItem className="flex-start group">
                        <i className={`${icon} text-base group-hover:text-teal-500`} />
                        <span className="pb-3">{name}</span>
                     </MenuItem>
                  </Link>
               ))}
            </Menu>
         ))}
      </div>
   );
};
