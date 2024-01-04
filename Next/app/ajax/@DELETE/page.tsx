"use client";
import { Button } from "@/components/ui";

const DeleteUser = ({ id }: { id: string }) => {
   const handleSubmit = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "DELETE" });
      alert(response.statusText);
      console.log(response);
   };

   return (
      <Button icon="fa-trash-alt text-white text-xl" className="mx-5" color="red" onClick={handleSubmit}></Button>
   );
};

export default DeleteUser;
