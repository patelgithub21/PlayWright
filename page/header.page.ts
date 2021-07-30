import {Page} from 'playwright';
// export to create the the object
export default class HeaderPage{

    private page:Page;
    constructor (page : Page)
    {
        this.page = page;       

    }
    // Locators as getter
    public get eleLoginBtn()
    {
       const loginbtn = this.page.$("text=Log in");
       if(loginbtn!=null)
       {
           return loginbtn;
       }
       else{ 
        throw new Error("No element");
       }
    }

    public get eleSignOutBtn()
    {
        const signoutbtn= this.page.$("text=Sign out");
        if(signoutbtn!=null){
            return signoutbtn;        
        }else
        throw new Error("No element");
        
    }
    public async clickLoginLink(){
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }
    public async clickSignout()
    {
        const ele= await this.eleSignOutBtn;
        await ele?.click();
    }

}