import BasePage from "./base-page";
import {WebDriver, By, until} from "selenium-webdriver";
export class AlreadyMember extends BasePage {

    private clickRight = By.className('item-service-swiper__next swiper-button-next');
    private toursButton = By.xpath("//a[@href='https://toursandactivities.flypgs.com/' and @title='TOURS & ACTIVITIES' and contains(@class, 'js-item-service-list-link')]")

    private homebutton = By.xpath('/html/body/div/header/div/a');
    private checkHeader = By.xpath('/html/body/div[3]/section[2]/div/div[1]/div/h1');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. scroll down and right button
    async scrollAndRight(){
        await this.driver.executeScript("window.scrollBy(0, 920);");
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickRight);
    }
    // TEST 2. Click on the "Tours & Activities" button.
    async clickOnToursAndActivities() {
        await this.findElementAndClick(this.toursButton);
        await this.driver.sleep(2000);
    }
    // TEST 3. Go to Home page
    async HomeButton(){
        await this.findElementAndClick(this.homebutton);
    }

    // TEST 4. Assert that the current page is the homepage

    async assertOnHomepage() {
        const headerElement = await this.driver.wait(until.elementLocated(this.checkHeader), 5000);
        const headerText = await headerElement.getText(); // Get the text of the header

        const expectedText = "Our Best Fares!";
        if (headerText.trim() !== expectedText) {
            throw new Error(`Header text mismatch! Expected: "${expectedText}", but found: "${headerText}".`);
        }

        console.log("Header text assertion passed.");
    }
 
}