// "use client";
import { Button } from "@/components/ui";

const UpdateUser = async ({ id, body }: { id: string; body: object }) => {
   const handleSubmit = async () => {
      "use server";
      try {
         const options = { method: "PUT", body: JSON.stringify(body) };
         const { status } = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, options);

         alert(status === 200 ? "The User Was Successfully Deleted." : "Something Has An Error.");
      } catch (error) {
         console.log(error);
      }
   };

   return <Button icon="fa-edit text-white text-xl" className="mr-5" color="blue" onClick={handleSubmit} />;
};

export default UpdateUser;
