import {expect,Page, test } from "@playwright/test"
import CommonFunction from "../page/common.page";
import HeaderPage from "../page/header.page"
import LoginPage from "../page/login.page";
import Environments from "../Utility/environment";
import * as usertoken from "../usertoken/loginToken.json";

test.describe("ms001",() => {

// creating one time object by using beforeAll hook
    let page: Page;
    let header: HeaderPage;
    let login: LoginPage;
    let commonFunction: CommonFunction;

    // can be moved to fixtures
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        header= new HeaderPage(page);
        login  = new LoginPage(page) ;
        commonFunction = new CommonFunction(page);      

        })
        // test.beforeEach(async ()=>{
        //     await page.goto(Environments.testEnv);
        // })
         
        test("Login positive", async ()=>
        {
            await page.goto(Environments.testEnv);
            expect(page.url()).toBe("https://letcode.in/");
            
            await header.clickLoginLink();
            console.log(page.url());
            expect(page.url()).toBe("https://letcode.in/");

            //enter login details
            await login.enterUserName(usertoken.uname);
            await login.enterPassword(usertoken.pwd);
            await login.clickLoginBtn();

            const toster = await commonFunction.toaster();
            expect(await toster?.textContent()).toContain("Welcome");

            //logout
            await header.clickSignout();           

        })

})