import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { BolbolButton } from "../core/page-objects/5-bolbol-button";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let bolbolButton: BolbolButton;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    bolbolButton = new BolbolButton(driver);
},40000);


test("bolbol_button_test", async () => {

    await bolbolButton.clickBolbol();
    await bolbolButton.gotobul();
    await bolbolButton.BOLBOLText();

},40000);

test("bolbol_navigation_test", async () => {

    await bolbolButton.NavigationThroughBOLBOL();

},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);