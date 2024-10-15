import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as listService from "../services/listService.js";
import * as itemsService from "../services/itemService.js"
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addToList = async (request) => {
    const formData = await request.formData()
    const name = formData.get("name")
    await listService.createList(name)

    return requestUtils.redirectTo("/lists")
}

const viewList = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    let id = urlParts[2]
    console.log("ID:", id)
    const data = {
        list : await listService.getById(id),
        items : await itemsService.getItemByListId(id),
        itemsCollected : await itemsService.getCollectedItemByListId(id)
    }
  console.log("LIST:", data.list);
  console.log("ITEMS:", data.items);
  console.log("ITEMS-COLLECTED:", data.items_collected);
    return new Response(await renderFile("list.eta", data), responseDetails);
}

const viewLists = async (request) => {
    const data = {
        lists: await listService.getAllLists(),
  }
    console.log("LISTS:", data.lists);
    return new Response(await renderFile("lists.eta", data), responseDetails);
}

const updateLists = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    let id = urlParts[2]

    await listService.updateById(id)

    return requestUtils.redirectTo("/lists")
}

export {addToList, viewList, viewLists, updateLists }