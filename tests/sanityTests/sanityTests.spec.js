import { test, expect } from "@playwright/test";

test("adding-two-products", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator(`[data-test="title"]`)).toContainText(`Products`);

  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await expect(page.locator(`[data-test="title"]`)).toContainText(`Your Cart`);

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(
    `https://www.saucedemo.com/checkout-step-one.html`
  );
  await expect(page.locator(`[data-test="title"]`)).toContainText(
    `Checkout: Your Information`
  );

  await page.locator('[data-test="firstName"]').fill("Haiman");
  await page.locator('[data-test="lastName"]').fill("Sleman");
  await page.locator('[data-test="postalCode"]').fill("3005500");

  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL(
    `https://www.saucedemo.com/checkout-step-two.html`
  );

  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL(
    `https://www.saucedemo.com/checkout-complete.html`
  );
  await expect(page.locator(`[data-test="title"]`)).toContainText(
    `Checkout: Complete!`
  );

  await expect(page.locator(`[data-test="complete-header"]`)).toContainText(
    `Thank you for your order!`
  );
  await expect(page.locator(`[data-test="complete-text"]`)).toContainText(
    `Your order has been dispatched, and will arrive just as fast as the pony can get there!`
  );
  await page.locator('[data-test="back-to-products"]').click();

  await expect(page).toHaveURL(`https://www.saucedemo.com/inventory.html`);
});
