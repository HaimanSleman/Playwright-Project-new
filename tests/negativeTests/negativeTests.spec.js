import {test, expect} from '@playwright/test'
import {scenarios} from '../utils/data.js'

test.describe('Negative Login Scenarios', () => {
    const baseURL = 'https://www.saucedemo.com'
    const errorMessageSelector = '[data-test="error"]'

    test.beforeEach(async ({page}) => {
        await page.goto(baseURL)
    })

    for (const scenario of scenarios) {
        test(`Negative Login - ${scenario.username || 'empty username'} + ${
            scenario.password || 'empty password'
        }`, async ({ page }) => {
            if (scenario.username !== '') {
                await page.fill('#user-name', scenario.username); // what is this? don't use this page.fill its a deprecated. why you let chatgpt to write your code and you just paste it?
            }
            if (scenario.password !== '') {
                await page.fill('#password', scenario.password); // what is this? don't use this page.fill its a deprecated. why you let chatgpt to write your code and you just paste it?
            }
            await page.click('#login-button'); // what is this? don't use this page.click its a deprecated. why you let chatgpt to write your code and you just paste it?
            
            const errorMessageText = await page.innerText(errorMessageSelector); // this is now how i taught how to find an element
            expect(errorMessageText).toBe(scenario.expectedError); // toBe is not an assertion in playwright
        });
    }}); 