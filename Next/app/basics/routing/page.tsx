import { Button } from "@/components/ui";
import Link from "next/link";

const RoutingFiles = async () => {
   await new Promise((resolve) => setTimeout(resolve, 2000)); // fetch loading file
   // throw new Error("Something Has An Error."); // fetch error file

   return (
      <div>
         <h3 className="mb-10">Routing Files 😂</h3>
         <Link href="./catch-file-not-exist">
            <Button>Catch All File</Button>
         </Link>
      </div>
   );
};

export default RoutingFiles;
