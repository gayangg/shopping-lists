import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const createItem = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/")
    let id = urlParts[2]
    const formData = await request.formData()
    const name = formData.get("name")
    
    await itemService.createItem(id, name);
    return requestUtils.redirectTo(`/lists/${id}`)
}

const updateItem = async (request) => {
    const url = new URL(request.url)
    const urlParts = url.pathname.split("/")
    let listId = urlParts[2]
    let item_id = urlParts[4]

    await itemService.updateItemById(item_id)
    return requestUtils.redirectTo(`/list/${listId}`)
}

export {createItem, updateItem}