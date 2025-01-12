import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { AlreadyMember } from "../core/page-objects/8-homeButtonBug";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let alreadyMember: AlreadyMember;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    alreadyMember = new AlreadyMember(driver);
},40000);

test("ToursAndActivities_test", async () => {

    await alreadyMember.scrollAndRight();
    await alreadyMember.clickOnToursAndActivities();

},40000);


test("assert_homepage_test", async () => {


    await alreadyMember.HomeButton();
    await alreadyMember.assertOnHomepage();


},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);