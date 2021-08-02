import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig={
    use:{
        headless: false,
        channel:"chrome"
        //screenshot:"only-on-failure",
       // video:"retry-with-video" 
    }, 
    testMatch:["crm001.test.ts"], // to run specific test
    retries:0,
    reporter:[["dot"], ["json", {outputFile:"test-result.json"}],["experimental-allure-playwright"]]    
}
export default config;