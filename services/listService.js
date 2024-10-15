import { sql } from "../database/database.js";

const createList = async (name) => {
  await sql`
    INSERT INTO shopping_lists (name)
    VALUES (${name})`;
}

const getListsCount = async () => {
  try {
    let result = await sql`
    SELECT COUNT(*) FROM shopping_lists`;

    if (result && result.length > 0) {
      return result[0].count;
    }
    return 0; 
    
  } catch (error) {
    console.error("Error retrieving list count:", error);
    throw error;
  }
}

const getListNum = async () => {
  try {
    
    let result = await sql`
    SELECT COUNT(id) FROM shopping_lists`;

    if (result.length > 0) {
      return result.rows[0].count
    } else {
      return 0; 
    }
  } catch (error) {
    throw error;
  }
}

const getAllLists = async () => {
  let result = await sql`
    SELECT * FROM shopping_lists
    WHERE active=true
    ORDER BY name`;
  
    return result
}

const getById = async (id) => {
  try {
    let result = await sql`
    SELECT * FROM shopping_lists
    WHERE id = ${id}`;
    console.log("RESULT: getById", result.length);

    if (result && result.length > 0) {
      return result;//.rows[1];
    }
    return { id: 0, name: "List Does NOT Exists!" };
  } catch (error) {
    throw error;
  }
}

const updateById = async (id) => {
  await sql`
  UPDATE shopping_lists 
  SET active=FALSE
  WHERE id=${id}`;
}

export { createList, getListNum, getAllLists, getListsCount, updateById, getById }