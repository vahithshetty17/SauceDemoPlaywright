import {expect, test} from '@playwright/test'

test.beforeEach("Login to the CRM", async({page})=>{

    await page.goto("https://devhui.ptw.com/manager-dashboard");
    await page.locator("//input[@placeholder='Email']").pressSequentially("vahith.shetty@side.inc",{delay:100})
    await page.locator("//input[@placeholder='Password']").pressSequentially("vahith.shetty",{delay:100})
    await page.locator("//button[normalize-space()='LOGIN']").click();
    const otps =  page.locator("//input[contains(@type,'text')]");
    for(let i=0; i<await otps.count(); i++)
    {
        await otps.nth(i).fill("0");
    }

    await page.locator("//button[normalize-space()='verify']").click();
    await page.locator("//button[@type='button']").click();
    
    const loginAs = await  page.locator("//ul[@class='h-auto max-h-35 overflow-y-auto text-white font-12 custom-scroll-gray']//li");
    for(let i=0; i< await loginAs.count(); i++)
    {
        const loginAsText = await loginAs.nth(i).textContent();
        console.log(loginAsText);
        if(loginAsText?.trim().toLowerCase()=='admin')
        {
            await loginAs.nth(i).click();
            break;
        }
       
    }

     await page.locator("//button[normalize-space()='Continue']").click();
     await page.waitForURL("https://devhui.ptw.com/manager-dashboard");
     await page.waitForTimeout(2000);
     await expect(page.locator("//h1[normalize-space()='Dashboard']")).toBeVisible();
    
})

test("Navigate to project Module", async({page})=>{

    await page.locator("(//a[text()='Projects'])[2]").click();
    await page.locator("//button[normalize-space()='+ NEW PROJECT']").click();
    // await page.waitForTimeout(5000);
    // await page.locator("//button[@aria-label='Close']").click();
})

test("Navigate to the user module", async({page})=>{

    await page.locator("(//span[contains(text(),'Users')])[2]").click();
    await page.locator("//a[normalize-space()='Reviewer Users']").click();
    await page.locator("//button[normalize-space()='Add New User']").click();
    await page.waitForTimeout(5000)
    await page.locator("//button[@aria-label='Close']").click();
    console.log("vahith shetty")
    console.log("Manju")
})

