import { chromium } from "https://deno.land/x/playwright/mod.ts";


Deno.test("Check if page link works and content is correct", async () => {

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:7777"); 

  await page.click('a#Link'); 

  await page.waitForNavigation();

  const url = page.url();
  console.log("Navigated URL:", url);

  if (url !== "http://localhost:7777/lists") {  
    throw new Error("The link did not redirect to the expected URL.");
  }

  const content = await page.textContent('h2');  
  console.log("Shared shopping lists", content);

  if (content !== "Shared shopping lists") {  
    throw new Error("The content is not correct.");
  }

  await browser.close();
});