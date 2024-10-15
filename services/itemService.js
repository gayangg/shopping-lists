import { sql } from "../database/database.js";

const createItem = async (id, name) => {
  await sql`
    INSERT INTO shopping_list_items (shopping_list_id, name) 
    VALUES (${id}, ${name})`;
}

const getItemNum = async (id) => {
  let result = await sql`
    SELECT COUNT(id)
    FROM shopping_list_items`;
  
  return result.rows[0].count
}

const getItemByListId = async (id) => {
  let result = await sql`
    SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${id}
    AND NOT collected
    ORDER BY name`;

  return result;
}

const getCollectedItemByListId = async (id) => {
  let result = await sql`
    SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${id}
    AND collected
    ORDER BY name`;
      
  return result;
}

const updateItemById = async (item_id) => {
  await sql`
    UPDATE shopping_list_items 
    SET collected=TRUE
    WHERE id=${item_id}`;
}

const updateItemByListId = async (shopping_list_id) => {
  await sql`
    UPDATE shopping_list_items 
    SET collected=TRUE
    WHERE shopping_list_id=${list_id}`;
}

const getItemsCount = async () => {
  let result = await sql`
    SELECT COUNT(*)
    FROM shopping_list_items`;
  
  return result[0].count;
}

export {
  createItem,
  getItemNum,
  getItemByListId,
  getCollectedItemByListId,
  getItemsCount,
  updateItemById,
  updateItemByListId
}