import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { CurrencyChanger } from "../core/page-objects/13-currency-changer";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let currencyChanger: CurrencyChanger;

beforeAll(async () => {
    driver = await createDriver(testData.url.flight_page);
    currencyChanger = new CurrencyChanger(driver);
},40000);


test("currency_changer_test", async () => {

    await currencyChanger.scrollUp();
    await currencyChanger.clickOnCurrencyBox();
    await currencyChanger.chooseCurrency();

},40000);
test("currency_calendar_test", async () => {

    await currencyChanger.chooseGoMonth();
    await currencyChanger.chooseReturnMonht();

},40000);




afterAll(async () => {
    await quitDriver(driver);
},20000);