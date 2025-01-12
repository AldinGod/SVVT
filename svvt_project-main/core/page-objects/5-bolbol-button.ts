import BasePage from "./base-page";
import {WebDriver, By, Key, until} from "selenium-webdriver";
export class BolbolButton extends BasePage {


    private clickBolbolButton = By.xpath('/html/body/header/div/div[3]/div/div[2]/div[2]');
    private buttonbul = By.xpath('/html/body/header/div/div[4]/div/div[1]/div/a');
    private bolbol = By.xpath('/html/body/div[3]/section/div/div/div[2]/h1');
    private EarnWithBolBol = By.xpath('/html/body/section[1]/div/div/ul/li[2]/a');
    private SpendWithBolBol = By.xpath('/html/body/section[1]/div/div/ul/li[3]/a');
    private Campaigns = By.xpath('/html/body/section[1]/div/div/ul/li[4]/a');
    private BolBolYouth = By.xpath('/html/body/section[1]/div/div/ul/li[5]/a');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // TEST 1. Find the button and click on it.
    async clickBolbol(){
        await this.findElementAndClick(this.clickBolbolButton);
    }

    //TEST 2. Go to "What is BOLBOL?"
    async gotobul(){
        await this.findElementAndClick(this.buttonbul);
    }

// TEST 3. Assert that the "What is BOLBOL?"  is displayed.

    async BOLBOLText() {
        await this.driver.sleep(2000);
        const headerElement = await this.driver.wait(until.elementLocated(this.bolbol), 5000);
        const headerText = await headerElement.getText();

        const expectedText = "WHAT IS BOLBOL?";
        if (headerText.trim() !== expectedText) {
            throw new Error(`Header text mismatch! Expected: "${expectedText}", but found: "${headerText}".`);
        }

        console.log("Header text assertion passed.");
    }
// STEP 4. Navigation trough BOLBOL
    async NavigationThroughBOLBOL(){
        await this.findElementAndClick(this.EarnWithBolBol);
        await this.findElementAndClick(this.SpendWithBolBol);
        await this.findElementAndClick(this.Campaigns);
        await this.findElementAndClick(this.BolBolYouth);
    }

}