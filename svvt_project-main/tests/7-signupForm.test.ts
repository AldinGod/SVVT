import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { SignupForm } from "../core/page-objects/7-signup-form";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let signupForm: SignupForm;

beforeAll(async () => {
    driver = await createDriver(testData.url.bolbol_page);
    signupForm = new SignupForm(driver);
},40000);


test("singup_button_test", async () => {

    await signupForm.joinBolbol();
    await signupForm.checkSignUp();

   
},40000);

test("singup_form_test", async () => {


    await signupForm.enterName();
    await signupForm.enterSurname();
    await signupForm.enterNumber();
    await signupForm.enterEmail();
    await signupForm.clickcheck();
    await signupForm.clickcheck2();
    // await signupForm.robot();
    await signupForm.become();

},40000);



afterAll(async () => {
    await quitDriver(driver);
},20000);