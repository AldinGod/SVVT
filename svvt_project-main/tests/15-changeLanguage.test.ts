import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { ChangeLanguage } from "../core/page-objects/15-change-language";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let changeLanguage: ChangeLanguage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    changeLanguage = new ChangeLanguage(driver);
},40000);


test("change_language_test", async () => {

    await changeLanguage.chooseLanguages();
    await changeLanguage.chooseDeutsch();

},40000);

test("assert_language_test", async () => {

    await changeLanguage.assureDe();

},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);