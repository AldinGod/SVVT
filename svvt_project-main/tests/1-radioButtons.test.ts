import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { RadioButtons } from "../core/page-objects/1-radio-buttons";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let radioButton: RadioButtons;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    radioButton = new RadioButtons(driver);
},40000);


test("radio_buttons_test", async () => {
    
    //await radioButton.acceptCookies();
    await radioButton.goToHomePage();
    await radioButton.searchRadioButtons();
    await radioButton.clickOnOneWay();
    await radioButton.clickReturn();

},40000);


test("radio_buttons_test2", async () => {

    await radioButton.ClickCheckIn();
    await radioButton.clickManage();
    await radioButton.ClickCarRental();
},40000);


afterAll(async () => {
    await quitDriver(driver);
},90000);