import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { JoiningButton } from "../core/page-objects/6-Sustainability-hub";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let joiningButton: JoiningButton;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    joiningButton = new JoiningButton(driver);
},40000);


test("Sustainability_button_test", async () => {

    await joiningButton.findoutmore();
   await joiningButton.assertHeader();

},40000);

test("harmoni_nav_test", async () => {

    await joiningButton.HarmoniTest();
    await joiningButton.HarmoniParts();

},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);