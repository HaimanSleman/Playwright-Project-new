import { test, expect } from '@playwright/test';
import { scenarios } from '../utils/data.js';

test.describe('Negative Login Scenarios', () => {
    const baseURL = 'https://www.saucedemo.com';
    const errorMessageSelector = '[data-test="error"]';

    test.beforeEach(async ({ page }) => {
        await page.goto(baseURL);
    });

    for (const scenario of scenarios) {
        test(`Negative Login - ${scenario.username || 'empty username'} + ${
            scenario.password || 'empty password'
        }`, async ({ page }) => {
            if (scenario.username !== '') {
                await page.locator('#user-name').fill(scenario.username);
            }

            if (scenario.password !== '') {
                await page.locator('#password').fill(scenario.password);
            }

            await page.locator('#login-button').click();

            await expect(page.locator(errorMessageSelector)).toHaveText(scenario.expectedError);
        });
    }
});
