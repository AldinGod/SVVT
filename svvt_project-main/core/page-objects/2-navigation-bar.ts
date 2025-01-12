import BasePage from "./base-page";
import {WebDriver, By, until} from "selenium-webdriver";
export class NavigationBar extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private logoRefresh = By.className('o-header__logo');
    private hoverMore = By.xpath("//button[text()='ADDITIONAL SERVICES']");
    private hoverMore1 = By.xpath("/html/body/header/div/div[2]/ul/li[1]/button");
    private hoverMore2 = By.xpath("/html/body/header/div/div[2]/ul/li[3]/button");
    private hoverMore3 = By.xpath("/html/body/header/div/div[2]/ul/li[4]/button");
    private clickBaggage = By.xpath("//a[@href='/en/travel-services/flight-services/additional-baggage']");
    private checkBaggage = By.xpath("//a[@href='/en/travel-services/flight-services/additional-baggage' and text()='Baggage Allowance Sale']");
    private headerAdditionalBaggage = By.xpath("/html/body/div[3]/section/div/h1");

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Go to home page (since program already opens the page,
    // we have put function to refresh the logo as assurance that the home page is opened).
    async goToHomePage(){
        await this.findElementAndClick(this.logoRefresh);
    }

    // TEST 2. Find the „Additional Services“ option in the navigation bar hover and click on it.
    async findMore(){
        await this.findElementAndClick(this.hoverMore1);
        await this.findElementAndClick(this.hoverMore2);
        await this.findElementAndClick(this.hoverMore3);
        await this.findElementAndClick(this.hoverMore);
    }

    // TEST 3. Get to the option „Baggage allowance Sale“ and click on it.
    async clickBaggageAllowance(){
        await this.findElementAndClick(this.clickBaggage);
    }

// TEST 4. Assert that the "Additional Baggage" header is displayed with the correct text.
    async assertAdditionalBaggageHeader() {
        const headerElement = await this.driver.wait(until.elementLocated(this.headerAdditionalBaggage), 5000);
        const headerText = await headerElement.getText(); // Get the text of the header

        const expectedText = "Additional Baggage";
        if (headerText.trim() !== expectedText) {
            throw new Error(`Header text mismatch! Expected: "${expectedText}", but found: "${headerText}".`);
        }

        console.log("Header text assertion passed.");
    }



}