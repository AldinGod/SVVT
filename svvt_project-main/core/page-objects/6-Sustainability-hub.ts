import BasePage from "./base-page";
import {WebDriver, By, until} from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class JoiningButton extends BasePage {


    private clickJoin = By.xpath('/html/body/div[3]/section[3]/div/a/div/div/div');
    private checkHeader = By.xpath('/html/body/div[3]/section[2]/div/div[1]/h2');
    private HarmoniButton=By.xpath('/html/body/div[3]/section[3]/div/div/a[2]');
    private firstPart=By.xpath('/html/body/div[3]/div[3]/section/div/div[2]/div[2]');
    private secondPart=By.xpath('/html/body/div[3]/div[3]/section/div/div[3]/div[1]');
    private thirdPart=By.xpath('/html/body/div[3]/div[3]/section/div/div[4]/div[1]');
    private fourthParth=By.xpath('/html/body/div[3]/div[3]/section/div/div[5]/div[1]');
    private fifthPart=By.xpath('/html/body/div[3]/div[3]/section/div/div[6]/div[1]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // TEST 1. Find and click button find out more
    async findoutmore() {
        // Scroll down a bit to make the button visible
        await this.driver.sleep(2000);
        await this.driver.executeScript("window.scrollBy(0, 400);");
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickJoin);
    }

    // TEST 2. Make sure page is opened by checking title.
    async assertHeader() {
        const headerElement = await this.driver.wait(until.elementLocated(this.checkHeader), 5000);
        const headerText = await headerElement.getText(); // Get the text of the header

        const expectedText = "WE ARE PEGASUS IN BRIEF";
        if (headerText.trim() !== expectedText) {
            throw new Error(`Header text mismatch! Expected: "${expectedText}", but found: "${headerText}".`);
        }
        console.log("Header text assertion passed.");
    }

    // TEST 3. Find Harmoni part
    async HarmoniTest() {

        await this.driver.executeScript("window.scrollBy(0, 600);");
        await this.findElementAndClick(this.HarmoniButton);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.firstPart);
        await this.driver.sleep(1000);
    }

// TEST 4. Testing parts of harmoni
    async HarmoniParts() {
        await this.findElementAndClick(this.secondPart);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.secondPart);
        await this.findElementAndClick(this.thirdPart);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.thirdPart);
        await this.findElementAndClick(this.fourthParth);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.fourthParth);
        await this.findElementAndClick(this.fifthPart);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.fifthPart);
    }


}
