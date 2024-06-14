import server from "./server";

Bun.serve({
   port: 5500,
   fetch: server.fetch,
});
