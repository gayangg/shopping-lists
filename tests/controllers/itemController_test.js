// import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
// import { createItem, updateItem } from "../controllers/itemController.js";

// Mock database setup
// const mockDb = [
//   { id: 1, name: "Groceries" },
//   { id: 2, name: "Work Tasks" },
// ];

// const sql = (query) => {
//   if (query.includes("SELECT * FROM lists")) {
//     return Promise.resolve(mockDb);
//   } else if (query.includes("INSERT INTO lists")) {
//     const name = query.match(/\((.*)\)/)[1];
//     mockDb.push({ id: mockDb.length + 1, name });
//     return Promise.resolve();
//   }
// };

// Deno.test("getLists should return all lists", async () => {
//   const lists = await getLists();
//   assertEquals(lists.length, 2);
//   assertEquals(lists[0].name, "Groceries");
// });

// Deno.test("addList should add a new list", async () => {
//   await addList("New List");
//   const lists = await getLists();
//   assertEquals(lists.length, 3);
//   assertEquals(lists[2].name, "New List");
// });