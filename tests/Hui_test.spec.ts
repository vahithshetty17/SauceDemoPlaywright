import {expect, test} from '@playwright/test'

test.describe("Sauce demo" ,()=>{

    test.beforeEach("login sauce demo", async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();

})


test("add item to the cart", async({page})=>{

    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await page.locator("//a[@class='shopping_cart_link']").click();
    await expect(page.locator("//div[@class='inventory_item_name']")).toBeVisible();
})

test("Naviagte to the breadscrumb", async({page})=>{

    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("(//a[normalize-space()='Logout'])[1]").click();
    console.log("shetty")
   

})


})

