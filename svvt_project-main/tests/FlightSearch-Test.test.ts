import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { FlightSearch } from "../core/page-objects/flightSearch";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let flightTest: FlightSearch;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    flightTest = new FlightSearch(driver);
},40000);


test("flight_test", async () => {


    await flightTest.searchRadioButtons();
    await flightTest.clickOnOneWay();
    await flightTest.fromBox();
    await flightTest.pickAbuDhabi();
    await flightTest.pickAnkara();
    await flightTest.DapartureDate();
    await flightTest.chooseDapartureDate();
    await flightTest.DapartureReturnDate();
    await flightTest.chooseDapartureDate2();
    await flightTest.searchCheapFlights();



},40000);

 afterAll(async () => {
     await quitDriver(driver);
 },20000);