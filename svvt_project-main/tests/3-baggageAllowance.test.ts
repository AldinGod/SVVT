import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { BaggageAllowance } from "../core/page-objects/3-baggage-allowance";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let baggageAllowance: BaggageAllowance;

beforeAll(async () => {
    driver = await createDriver(testData.url.baggage_allowance_page);
    baggageAllowance = new BaggageAllowance(driver);
},40000);


test("addBaggageButton_test", async () => {

    await baggageAllowance.addBaggage();

   
},40000);

test("baggage_allowance_test", async () => {


    await baggageAllowance.comfortflex();
    await baggageAllowance.goToHomePage();

},40000);




afterAll(async () => {
    await quitDriver(driver);
},20000);