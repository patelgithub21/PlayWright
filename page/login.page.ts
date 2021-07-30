import { Page } from "playwright";
// create a page class
export default class LoginPage{

    private page : Page;
    constructor(page:Page){
        this.page= page;
    }
    // Getter functions
    eleEmailTextField = async() => await this.page.$("input[name='email']");
    // public get eleEmailTextField()
    // {
    //     return this.page.$("input[name='email']");
    // }
    public get elePasswordTextField(){
        return this.page.$("input[name='password']");
    }
    public get eleLoginBtn()
    {
        return this.page.$("//button[text()='LOGIN']")
    }
    public async enterUserName(uname:string){
        const ele= await this.eleEmailTextField();
        await ele?.fill(uname);
    }
    public async enterPassword(pname: string){
        const ele= await this.elePasswordTextField;
        await ele?.fill(pname);        
    }
    public async clickLoginBtn(){
        const eleLoginbtn= await this.eleLoginBtn;
        await eleLoginbtn?.click()
    }

}