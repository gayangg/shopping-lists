import { serve } from "https://deno.land/std@0.222.1/http/server.ts";
//import { configure } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as statController from "./controllers/statsController.js"
import * as listController from "./controllers/listController.js";
import * as itemController from "./controllers/itemController.js";


configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  const queryType = request.method;

  if (path === "/" && queryType === "GET") {
    return await statController.getStats(request);

  } else if (path === "/lists" && queryType === "GET") {
    return await listController.viewLists(request);

  } else if (path === "/lists" && queryType === "POST") {
    return await listController.addToList(request);

  } else if (path.match("/lists/[0-9]+") && queryType === "GET") {
    return await listController.viewList(request);

  } else if (path.match("/lists/[0-9]+/items") && queryType === "POST") {
    console.log("EEE");
    return await itemController.createItem(request);

  } else if (path.match("/lists/[0-9]+/deactivate") && queryType === "POST") {
    return await listController.updateLists(request);

  } else if (path.match("/lists/[0-9]+/items/[0-9]+/collect") && queryType === "POST") {
    console.log("GGG");
    return await itemController.updateItem(request);

  }  else {
    return new Response("Not found", { status: 404 });
  }
};



serve(handleRequest, { port :7777});