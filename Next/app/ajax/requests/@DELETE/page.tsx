// "use client";
import { Button } from "@/components/ui";

/* Important Hints:
   - Its Work Good By We Have An Error Because We Use External Server [jsonplaceholder], Which Not Responding With Next Server
   - If We Try To Send The Request From The Client Side It Will Work With No Error Because Its Not Send From Next Server
*/
const DeleteUser = ({ id }: { id: string }) => {
   const handleSubmit = async () => {
      "use server";
      try {
         const { status } = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "DELETE" });
         alert(status === 200 ? "The User Was Successfully Deleted." : "Something Has An Error.");
      } catch (error) {
         console.log(error);
      }
   };

   return <Button color="red" className="mx-5" icon="fa-trash-alt text-white text-xl" onClick={handleSubmit} />;
};

export default DeleteUser;
