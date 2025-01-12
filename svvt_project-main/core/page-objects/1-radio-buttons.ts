import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class RadioButtons extends BasePage {



    private clickAgree = By.xpath("/html/body/efilli-layout-dynamic//div/div[1]/div[2]/div[2]");
    // private clickAgree = By.id("0f263d08-eedd-41ae-922c-6bb23e035d20");

    private logoRefresh = By.className('o-header__logo');
    private radioArea = By.className('DirectionButtons__slider');
    private oneWayButton = By.className('DirectionButtons__item__oneWay');
    private returnButton = By.className('DirectionButtons__item__round');
    private checkInButton = By.xpath('/html/body/div[3]/div/section/div/ul/li[2]');
    private ManageButton = By.xpath('/html/body/div[3]/div/section/div/ul/li[3]');
    private carRentalButton = By.xpath('/html/body/div[3]/div/section/div/ul/li[4]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }
    // TEST 2. Go to home page (since program already opens the page, 
    // we have put function to refresh the logo as assurance that the home page is opened)
    async goToHomePage(){
        await this.findElementAndClick(this.logoRefresh);
    }

    // TEST 3. Locate the part where the radio buttons are.
    async searchRadioButtons(){
        await this.findElement(this.radioArea);
    }

    // TEST 4. Click on the One Way radio button.
    async clickOnOneWay(){
        await this.findElementAndClick(this.oneWayButton);
    }

    // TEST 5. Click on the Return radio button.
    async clickReturn(){
        await this.findElementAndClick(this.returnButton);
    }

    // TEST 6. Click on the Check in online button.
    async ClickCheckIn(){
        await this.findElementAndClick(this.checkInButton);
    }

    // TEST 7. Click on the Manage my booking button.
    async clickManage(){
        await this.findElementAndClick(this.ManageButton);
    }

    // TEST 8. Click on the Car rental button.
    async ClickCarRental(){
        await this.findElementAndClick(this.carRentalButton);
    }

}