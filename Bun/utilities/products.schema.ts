import { z } from "zod";

export const productSchema = z.object({
   name: z.string().min(3),
   description: z.string().min(5),
   amount: z.number().int().positive(),
   price: z.number().int().positive(),
});

export type productType = z.infer<typeof productSchema>;
