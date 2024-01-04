"use client";
import { Button } from "@/components/ui";
import Link from "next/link";

const CatchAllFile = () => {
   return (
      <div>
         <h3 className="mb-10">Catch All File 🤷‍♂️</h3>
         <Link href="/routing">
            <Button>Go Back</Button>
         </Link>
      </div>
   );
};

export default CatchAllFile;
