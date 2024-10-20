import { sql } from "../database/database.js";

const createItem = async (id, name) => {
  await sql`
    INSERT INTO shopping_list_items (shopping_list_id, name) 
    VALUES (${id}, ${name})`;
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

const updateItemById = async (itemId) => {
  await sql`
    UPDATE shopping_list_items 
    SET collected=TRUE
    WHERE id=${itemId}`;
}

const getItemsCount = async () => {
  let result = await sql`
    SELECT COUNT(*)
    FROM shopping_list_items`;
  
  return result[0].count;
}

export {
  createItem,
  getItemByListId,
  getCollectedItemByListId,
  getItemsCount,
  updateItemById
}