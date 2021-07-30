import { Page } from "playwright";

export default class CommonFunction{

    private page: Page;
    constructor (page: Page){
       this.page= page;
    }
    
    toaster = async()=> await this.page.waitForSelector("div[role='alertdialog']");
    
 }