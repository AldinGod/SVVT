import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

import { Key } from "selenium-webdriver";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class TestSearch extends BasePage {


    private clickSearchButton = By.id('search-icon'); // Search button
    private searchInputField = By.className('o-header__input'); // Search input field

    private goBack = By.className('o-header__logo');
    private detailsButton = By.xpath('/html/body/div[3]/div[2]/section/div/div/ul/li[1]/a[2]');



    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // STEP 1. Find the Search box and click on it.
    async clickSearch() {
        await this.findElementAndClick(this.clickSearchButton);
    }

    // STEP 2. Send text "flights" to the search input and press enter.
    async enterText() {
        const inputField = await this.driver.findElement(this.searchInputField);
        await inputField.sendKeys("Flights"); // Input text "Flights"
        await this.driver.sleep(2000); // Optional: Wait for observation
        await inputField.sendKeys(Key.ENTER);

    }

    // STEP 3. Click on details Button.
    async checkDetailsButton() {
        await this.driver.sleep(3000);
        await this.driver.executeScript('window.scrollBy(0, 100);');
        await this.findElementAndClick(this.detailsButton);
    }


    // STEP 4. Wait for the result and go back to home page.
    async goToHomePage() {
        await this.driver.sleep(3000);
        await this.findElementAndClick(this.goBack);
    }
}
