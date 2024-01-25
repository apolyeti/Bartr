import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core.ts";
 
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});