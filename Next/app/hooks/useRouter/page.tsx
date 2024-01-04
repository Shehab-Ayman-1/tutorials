"use client";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const UseRouter = () => {
   const router = useRouter();

   return (
      <div className="flex-around">
         <Button onClick={() => router.back()}>Go Back</Button>
         <Button onClick={() => router.push("/")}>Go To Home</Button>
      </div>
   );
};

export default UseRouter;
