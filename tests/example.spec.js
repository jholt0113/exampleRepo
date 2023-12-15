// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://example.com/");

  // Expect the title to be Example Domain
  await expect(page).toHaveTitle("Example Domain");
});

test("clicking link", async ({ page }) => {
  await page.goto("https://example.com/");

  var infoLink = await page.locator("a");
  await expect(infoLink).toHaveText("More information...");
  await infoLink.click();
  await expect(page.url()).toBe("https://www.iana.org/help/example-domains");
});

test("iana logo is visible ", async ({ page }) => {
  await page.goto("https://example.com/");

  var infoLink = await page.locator("a");
  await expect(infoLink).toHaveText("More information...");
  await infoLink.click();
  await expect(page.url()).toBe("https://www.iana.org/help/example-domains");
  await expect(page.locator("#logo")).toBeVisible();
});
