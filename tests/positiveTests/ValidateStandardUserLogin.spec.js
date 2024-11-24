import { test, expect } from "@playwright/test";
import {users} from '../utils/data.js'

test.describe('Positve Login', () => { 
  const baseURL = "https://www.saucedemo.com";

for (const user of users) { 
  test(`Positive login test - ${user.username}`, async ({page}) => {
    
    await page.goto(baseURL); 

    await page.fill('#user-name', user.username); 
    await page.fill('#password', user.password); 
    await page.click('#login-button'); 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

      const pageTitle = await page.locator('.title'); 
await expect(pageTitle).toHaveText('Products');
  
});
}
}); 




