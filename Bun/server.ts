import { Hono } from "hono";
import { products } from "./routes/products.routes.ts";
import { logger } from "hono/logger";

const app = new Hono();

// Middlewares
app.use(logger()); // To Print A Pretty Requests To The Console

// Routes
app.route("/api/products", products);

export default app;
