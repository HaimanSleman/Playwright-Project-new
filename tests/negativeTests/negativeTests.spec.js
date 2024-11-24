import {test, expect} from '@playwright/test'
import { scenarios } from '../utils/data.js'

test.describe('Negative Login Scenarios', () => {
    const baseURL = 'https://www.saucedemo.com'
    const errorMessageSelector = '[data-test="error"]'

    for (const scenario of scenarios) {
        test(`Negative Login - ${scenario.username || 'empty username'} + ${
            scenario.password || 'empty password'
        }`, async ({page}) => {
            await page.goto(baseURL)

            if (scenario.username !== '') {
                await page.fill('#user-name', scenario.username)
            }
            if (scenario.password !== '') {
                await page.fill('#password', scenario.password)
            }
            await page.click('#login-button')
            const errorMessage = await page.locator(errorMessageSelector)
            await expect(errorMessage).toHaveText(scenario.expectedError)
        })
    }
})