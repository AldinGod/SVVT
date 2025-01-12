import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PickDate extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickDeparture = By.className('flatpickr-input tstnm_fly_search_tab_1_departure_date_area');
    private clickDepartureDate = By.xpath("//span[contains(@class, 'flatpickr-day') and not(contains(@class, 'flatpickr-disabled')) and not(contains(@class, 'prevMonthDay'))][1]");

    private clickReturn = By.className('flatpickr-input tstnm_fly_search_tab_1_return_date_area');
    private clickReturnDate = By.xpath("//span[contains(@class, 'flatpickr-day') and not(contains(@class, 'flatpickr-disabled')) and not(contains(@class, 'prevMonthDay')) and text()='15']");


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // TEST 1. Open Departure Date Picker.
    async DapartureDate(){
        await this.findElementAndClick(this.clickDeparture);
    }

    // TEST 2. As the first date, select the wanted departure date.
    async chooseDapartureDate(){
        await this.findElementAndClick(this.clickDepartureDate);
    }

    // TEST 3. Open Return Date Picker.
    async ReturnDate(){
        await this.findElementAndClick(this.clickReturn)
    }

    // TEST 4. As the second date, select the wanted return date.
    async chooseReturnDate(){
        await this.findElementAndClick(this.clickReturnDate);
    }
 
}