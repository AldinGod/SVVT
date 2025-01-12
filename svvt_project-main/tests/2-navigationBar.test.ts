import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { NavigationBar } from "../core/page-objects/2-navigation-bar";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let navigationBar: NavigationBar;



beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    navigationBar = new NavigationBar(driver);
},40000);


test("navigation_bar_test", async () => {

   await navigationBar.goToHomePage();
   await navigationBar.findMore();

},40000);

test("Additional-services-test", async () => {

    await navigationBar.clickBaggageAllowance();
    await navigationBar.assertAdditionalBaggageHeader();

},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);