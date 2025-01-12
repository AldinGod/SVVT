import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PassengerTest extends BasePage {


    private clickGuestsButton = By.className('PassengerSelect__input');
    private addGuestButton = By.className('PassengerSelect__box__amount__btn tstnm_fly_search_tab_1_passenger_adult_plus js-passenger-btn-increment');
    private linkgeneral = By.xpath('/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[3]/div/div[2]/div[2]/div/div[3]/div[2]/a');
    private linkgeneralicon = By.xpath('/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[3]/div/div[2]/div[2]/div/div[3]/span/button');
    private addGuestButton1 = By.xpath('/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[3]/div/div[2]/div[2]/div/div[2]/div/button[2]/img');
    private addGuestButton2 = By.xpath('/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[3]/div/div[2]/div[2]/div/div[3]/div[1]/button[2]/img');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:



    // TEST 1. Scroll down for 200 mp.
    async  scrollDown(driver: WebDriver) {
        await this.driver.executeScript('window.scrollBy(0, 200);');
    }

    // TEST 2. Click guests
    async clickGuests(){
        await this.findElementAndClick(this.clickGuestsButton);
    }

    // TEST 3. Add one more adult
    async addGuest(){
        await this.findElementAndClick(this.addGuestButton);
        await this.driver.sleep(1000);
    }

    // TEST 4. Add one Child 2-12 age
    async addGuest1(){
        await this.findElementAndClick(this.addGuestButton1);
        await this.driver.sleep(1000);
    }

    // TEST 5. Add one infant 0-2 age
    async addGuest2(){
        await this.findElementAndClick(this.addGuestButton2);
        await this.driver.sleep(1000);
    }

    // TEST 6. Click on button icon and go to the general rules link
    async generalRules(){
        await this.findElementAndClick(this.linkgeneralicon);
        await this.findElementAndClick(this.linkgeneral);
        await this.driver.sleep(2000);
    }

 
}