const {test, chromium} = require("@playwright/test")
let testdatalist = ["1", "2"]
let page_new

test.beforeAll(async () =>{
    const browser = await chromium.launch({args:['--start-maximized']})
    const context = await browser.newContext({viewport: null})
    page_new = await context.newPage()
})

test.describe.configure({mode: "parallel"})
for(const testdata of testdatalist){
    switch (testdata) {
        case "1":
            test("test1", async() =>{
                await page_new.goto("https://playwright.dev/docs/intro#installation")
            }) 
            break;
        case "2":
            test("test2", async() =>{
                await page_new.goto("https://playwright.dev/docs/intro#installation")
            })
            break;
    
        default:
            break;
    }
}