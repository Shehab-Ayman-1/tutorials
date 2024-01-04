import { Field, Form } from "@/components/ui";

/* Important Hints:
   - Now We Can Send Any API Request From The Server Directly
*/
const handleSubmit = async (data: FormData) => {
   "use server";
   const formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      phone: data.get("phone"),
      role: data.get("role"),
   };
   console.log(formData);
};

const FormsHandling = () => {
   return (
      <Form action={handleSubmit} headerText="Forms" buttonText="Submit">
         <Field label="Name:" name="name" />
         <Field label="Email:" name="email" />
         <Field label="Password:" name="password" />
         <Field label="Phone:" name="phone" />
         <Field label="Role:" name="role" />
      </Form>
   );
};

export default FormsHandling;
