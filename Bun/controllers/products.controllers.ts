import type { Context, Env } from "hono";
import type { BlankInput } from "hono/types";
import type { productType } from "../utilities/products.schema.ts";
import { products } from "../database/products.ts";

type ContextResponse = Context<Env, "Products", BlankInput>;

export const getProducts = async ({ json }: ContextResponse) => {
   try {
      if (!products.length) return json({ status: 204, message: "No products were found." });
      return json(products);
   } catch (error) {
      console.error(error);
      return json({ status: 404, message: (error as any)?.message });
   }
};

export const getProduct = async ({ req, json }: ContextResponse) => {
   try {
      const productId = req.param("productId");
      if (!productId) return json({ status: 400, message: "Invalid product id." });

      const product = products.find((product) => product.id === productId);
      if (!product) return json({ status: 400, message: "Product not found." });

      return json(product);
   } catch (error) {
      console.error(error);
      return json({ status: 404, message: (error as any)?.message });
   }
};

export const createProduct = async ({ req, json }: ContextResponse) => {
   try {
      // const product: productType = await req.valid("json"); // Its just a ts error
      const id = new Date().getTime().toString(16);

      // products.unshift({ id, ...product });

      return json(products);
   } catch (error) {
      console.error(error);
      return json({ status: 404, message: (error as any)?.message });
   }
};

export const updateProduct = async ({ req, json }: ContextResponse) => {
   try {
      const productId = req.param("productId");
      if (!productId) return json({ status: 400, message: "Invalid product id." });

      const body: productType = await req.json();
      if (!body) return json({ status: 400, message: "Invalid product data." });

      const index = products.findIndex((product) => product.id === productId);
      if (index === -1) return json({ status: 400, message: "Product not found." });

      products.splice(index, 1, { ...products[index], ...body });
      return json({ status: 200, message: "The product was updated.", products });
   } catch (error) {
      console.error(error);
      json({ status: 404, message: (error as any)?.message });
   }
};

export const deleteProduct = async ({ req, json }: ContextResponse) => {
   try {
      const productId = req.param("productId");
      if (!productId) return json({ status: 400, message: "Invalid product id." });

      const index = products.findIndex((product) => product.id === productId);
      if (index === -1) return json({ status: 400, message: "Product not found." });

      products.splice(index, 1);
      return json({ status: 200, message: "The product was deleted.", products });
   } catch (error) {
      console.error(error);
      json({ status: 404, message: (error as any)?.message });
   }
};
