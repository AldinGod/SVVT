import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { ToursTest } from "../core/page-objects/14-tours-test";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let toursTest: ToursTest;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    toursTest = new ToursTest(driver);
},40000);


test("tours_test_test", async () => {

  await toursTest.scrollAndRight();
    await toursTest.clickOnToursAndActivities();
    await toursTest.clickOnCountriesBox();
    await toursTest.clickOnCountry();
    await toursTest.clickGo();


},40000);

test("filter_test_test", async () => {

    await toursTest.chooseFilter();

},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);