"use client";
import { Button } from "@/components/ui";

const UpdateUser = ({ id, body }: { id: string; body: object }) => {
   const handleSubmit = async () => {
      const options = { method: "PUT", body: JSON.stringify(body) };
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, options);
      alert(response.statusText);
      console.log(response);
   };

   return <Button icon="fa-edit text-white text-xl" className="mr-5" color="blue" onClick={handleSubmit}></Button>;
};

export default UpdateUser;
