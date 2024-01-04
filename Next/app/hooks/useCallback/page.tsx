"use client";
import { Field, Form, Selectbox } from "@/components/ui";
import { FieldEvent, FormSubmitEvent } from "@/types";
import { useCallback, useState } from "react";

type FormDataProps = {
   email: string;
   password: string;
   role: "Admin" | "Editor" | "User";
};

const ROLES = ["Admin", "Editor", "User"];
const UseCallback = () => {
   /* useCallback
      - If We Remove formData From useCallback deps, The Change In The Form Won't Log In The handleSubmit
      - Thats Mean handleSubmit Doesn't Render Each Time The FormData Changes
      - But When We Put FormData In The Deps, handleSubmit Feels The Change In The FormData And Rerender
   */
   const [formData, setFormData] = useState<FormDataProps>({ email: "", password: "", role: "User" });

   const handleFieldChange = (event: FieldEvent) => {
      setFormData((form) => ({ ...form, [event.target.name]: event.target.value }));
   };

   const handleSelectChange = (name: string, value?: string) => {
      setFormData((form) => ({ ...form, [name]: value }));
   };

   const handleSubmit = useCallback(
      (event: FormSubmitEvent) => {
         event.preventDefault();
         console.log(formData);
      },
      [formData],
   );

   return (
      <Form onSubmit={handleSubmit} headerText="UseCallback" buttonText="Submit">
         <Field label="email" name="email" value={formData.email} onChange={handleFieldChange} />
         <Field label="password" name="password" value={formData.password} onChange={handleFieldChange} />
         <Selectbox
            label="Role"
            options={ROLES}
            value={formData.role}
            onChange={(value) => handleSelectChange("role", value)}
         />
      </Form>
   );
};

export default UseCallback;
