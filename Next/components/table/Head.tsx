import { Typography } from "@/components/ui";

type HeadProps = {
   headers: string[];
};

export const Head = ({ headers }: HeadProps) => {
   return (
      <thead>
         <tr className="border-b-sp bg-gradient-to-br from-teal-300 to-teal-900">
            {headers.map((head) => (
               <th key={head} className="p-4">
                  <Typography className="whitespace-nowrap text-center text-base text-white print:text-dimWhite md:text-xl">
                     {head}
                  </Typography>
               </th>
            ))}
         </tr>
      </thead>
   );
};
