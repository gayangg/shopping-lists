// import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
// import * as listControlerTest from "../../controllers/listController.js";

// Mock database setup
// const mockDb = [
//   { id: 1, name: "Groceries" },
//   { id: 2, name: "Work Tasks" },
// ];

// const sql = (query) => {
//   if (query.includes("SELECT * FROM shopping_lists")) {
//     return Promise.resolve(mockDb);
//   } else if (query.includes("INSERT INTO shopping_lists")) {
//     const name = query.match(/\((.*)\)/)[1];
//     mockDb.push({ id: mockDb.length + 1, name });
//     return Promise.resolve();
//   }
// };
// //globalThis.sql = sql;

// Deno.test("Get all the shopping lists:", async () => {
//   const lists = await listControlerTest.viewList();
//   assertEquals(lists.length, 2);
//   assertEquals(lists[0].name, "Groceries");
// });

// Deno.test("addList should add a new list", async () => {
//   await addList("New List");
//   const lists = await listControlerTest.viewLists();
//   assertEquals(lists.length, 3);
//   assertEquals(lists[2].name, "New List");
// });