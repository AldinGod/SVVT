import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { TestLogin } from "../core/page-objects/9-test-login";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let testLogin: TestLogin;

beforeAll(async () => {
    driver = await createDriver(testData.url.signup_page);
    testLogin = new TestLogin(driver);
},40000);


test("login_button_test", async () => {

    await testLogin.alreadyAMember();
   await testLogin.clickLogInButton();
    await testLogin.openLogin();

},40000);


test("form_login_test", async () => {

    await testLogin.enterPhone();
    await testLogin.enterPassword();
    // await testLogin.notARobot();
    await testLogin.clickLogIn();

},40000);



afterAll(async () => {
    await quitDriver(driver);
},20000);