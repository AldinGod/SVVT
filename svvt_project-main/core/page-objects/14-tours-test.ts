import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class ToursTest extends BasePage {

    private clickRight = By.className('item-service-swiper__next swiper-button-next');
    private toursButton = By.xpath("//a[@href='https://toursandactivities.flypgs.com/' and @title='TOURS & ACTIVITIES' and contains(@class, 'js-item-service-list-link')]")

    private clickCountryBox = By.className('tooltip-selector__box tooltip-selector-box');
    private clickCountry = By.xpath("//button[@type='button' and contains(@class, 'location-selector__item') and normalize-space(text())='United Arab Emirates']")


    private clickGoButton = By.className('location-searchbar__button');
    private clickOnFilter = By.xpath('/html/body/div/div/div/div[2]/aside/div/section[1]/div/div[4]/div/div[1]/input');
    private clickOnFilter1 = By.xpath('/html/body/div/div/div/div[2]/aside/div/section[1]/div/div[1]/div/div[1]/input');
    private clickOnFilter2 = By.xpath('/html/body/div/div/div/div[2]/aside/div/section[1]/div/div[2]/div/div[1]/input');
    private clickOnFilter3 = By.xpath('/html/body/div/div/div/div[2]/aside/div/section[1]/div/div[3]/div/div[1]/input');
    private clickOnFilter4 = By.xpath('/html/body/div/div/div/div[2]/aside/div/section[1]/div/div[5]/div/div[1]/input');

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
    // TEST 3. Select the box with offered countries.
    async clickOnCountriesBox(){
        await this.findElementAndClick(this.clickCountryBox);
        await this.driver.sleep(2000);
    }
    // TEST 4. Select the country. 
    async clickOnCountry(){
        await this.findElementAndClick(this.clickCountry);
        await this.driver.sleep(2000);
    }
    // TEST 5. Click on Go.
    async clickGo(){
        await this.findElementAndClick(this.clickGoButton);
        await this.driver.sleep(2000);
    }
    // TEST 6. Select filers.
    async chooseFilter(){
        await this.findElementAndClick(this.clickOnFilter);
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickOnFilter1);
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickOnFilter2);
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickOnFilter3);
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickOnFilter4);
        await this.driver.sleep(2000);
    }


 
}