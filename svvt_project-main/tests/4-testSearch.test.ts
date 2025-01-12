import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { TestSearch } from "../core/page-objects/4-test-search";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let testSearch: TestSearch;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    testSearch = new TestSearch(driver);
},40000);


test("test_search_test", async () => {

    await testSearch.clickSearch();
    await testSearch.enterText();

   
},40000);

test("test_button_in_search", async () => {


    await testSearch.checkDetailsButton();
    await testSearch.goToHomePage();

},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);