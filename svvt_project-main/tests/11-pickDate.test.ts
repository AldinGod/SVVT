import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { PickDate } from "../core/page-objects/11-pick-date";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let pickDate: PickDate;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    pickDate = new PickDate(driver);
},40000);


test("pick_departure_day_test", async () => {

    await pickDate.DapartureDate();
    await pickDate.chooseDapartureDate();


},40000);

test("pick_return_date_test", async () => {

    await pickDate.ReturnDate();
    await pickDate.chooseReturnDate();

},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);