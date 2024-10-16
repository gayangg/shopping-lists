import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as listService from "../services/listService.js";
import * as itemService from "../services/itemService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const getStats = async (request, res) => {
    try {
        const data = {
            listsCount: await listService.getListsCount(),
            itemsCount: await itemService.getItemsCount(),
        }
        return new Response(await renderFile("index.eta", data), responseDetails);
        
    } catch (error) {
        console.log(error);
        //res.status(500).json({ error: "Internal server error"})
    }
}

export { getStats }