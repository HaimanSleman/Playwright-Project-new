import {test, expect} from '@playwright/test'

test('adding-two-products', async ({page}) => {
    // Where is all of the validations i asked in the project assignment? (Assertions)
    await page.goto('https://www.saucedemo.com')

    await page.locator('[data-test="username"]').click()
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').click()
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()

    await page.locator('[data-test="item-0-title-link"]').click()
    await page.locator('[data-test="add-to-cart"]').click()
    await page.locator('[data-test="back-to-products"]').click()

    await page.locator('[data-test="item-5-title-link"]').click()
    await page.locator('[data-test="add-to-cart"]').click()

    await page.locator('[data-test="shopping-cart-link"]').click()

    await page.locator('[data-test="checkout"]').click()

    await page.locator('[data-test="firstName"]').fill('Haiman')
    await page.locator('[data-test="lastName"]').fill('Sleman')
    await page.locator('[data-test="postalCode"]').fill('3005500')
    await page.locator('[data-test="continue"]').click()
    await page.locator('[data-test="finish"]').click()

    const successMessage = page.locator('.complete-header')

    await successMessage.waitFor({state: 'visible'}) // What is this??

    await expect(successMessage).toHaveText('Thank you for your order!')
})
