import { chromium } from "https://deno.land/x/playwright/mod.ts";
import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";

Deno.test("test shopping list operations :", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:7777/lists");

  await page.evaluate(async () => {
    await fetch('http://localhost:7777/lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: "Clothss" }),
    });
  });

  await page.reload();
  const content = await page.content();
  assertEquals(content.includes("Beverages"), true);

  await browser.close();
});

test("Main page has expected title and headings.", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Shopping-list application");
    await expect(page.locator("h2")).toHaveText("Shared shopping lists");
    await expect(page.locator("h4")).toHaveText("Statistic");
    await expect(page.locator("li")).toHaveText("Shopping lists:");
});