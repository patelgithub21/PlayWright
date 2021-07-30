import {expect,Page, test } from "@playwright/test"

test.describe("Suite demo",() => {
//hook
let page : Page;
test.beforeAll(async ({ browser }) => 
{
 page = await browser.newPage();
 await page.goto("https://letcode.in");
});

//Test case 1- open  website
test("open letcode", async () => {
    const tiltle= await page.title();
    expect(tiltle).toBe("LetCode with Koushik");
})

//Test case 2- Login into a Webgsite
test("login LetCode", async () => {

// const title = await page.title();
// expect(title).toBe("LetCode with Koushik");
await Promise.all([
   page.waitForNavigation( /*{url: 'https://letcode.in/signin'} */),   
   page.click('text=/.*Log in.*/')
]);
await page.click('input[name="email"]');
await page.fill('input[name="email"]', "a2x+1@gmail.com" );
await page.fill('input[name="password"]',"Pass@123");
await Promise.all([
    page.waitForNavigation(/*url: 'https://letcode.in/'*/),
    page.click("//button[text()='LOGIN']")
]);

expect(page.url()).toBe("https://letcode.in/");
})
    
});
