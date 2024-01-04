import DeleteUser from "../@DELETE/page";
import UpdateUser from "../@UPDATE/page";

type User = {
   id: string;
   name: string;
};

const GetUsers = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const users: User[] = await response.json();
   return (
      <div className="">
         {users?.map(({ id, name }: User) => (
            <div className="mb-4 flex text-2xl" key={id}>
               <DeleteUser id={id} />
               <UpdateUser id={id} body={{ name: "shehab ayman" }} />
               <span>
                  {id} - {name}
               </span>
            </div>
         ))}
      </div>
   );
};

export default GetUsers;
