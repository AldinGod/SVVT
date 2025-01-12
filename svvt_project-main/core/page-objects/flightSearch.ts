import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class FlightSearch extends BasePage {


    private radioArea = By.className('Tabs__item Tabs__item-active');
    private oneWayButton = By.className('DirectionButtons__item__oneWay');
    private clickFromBox = By.className('SelectBox__form-input tstnm_fly_search_tab_1_departure_input');
    private pickAbuD = By.xpath("//div[@class='SelectBox__airport__item tstnm_fly_search_tab_1_departure_list_item' and @data-port-code='AUH']");

    private pickANK = By.xpath("//div[@class='SelectBox__airport__item tstnm_fly_search_tab_1_arrival_list_item' and @data-port-code='ESB']");

    private clickDeparture = By.className('flatpickr-input tstnm_fly_search_tab_1_departure_date_area');
    private clickDepartureDate = By.xpath("/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[2]/div[2]/div[6]/div/div[2]/div[1]/span[34]");
    private clickDepartureDate2 = By.xpath("/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[2]/div[2]/div[6]/div/div[2]/div[2]/span[34]");
    private clickOnSearch = By.className('SearchButton__base-button SearchButton__custom-size-button SearchButton__orange-button tstnm_fly_search_tab_1_submit_btn js-submit-button');
    private clickDeparture2 = By.xpath('/html/body/div[3]/div/section/div/div[1]/form/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div/div/input');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:



    // TEST 1. Locate the part where the radio buttons are.
    async searchRadioButtons(){
        await this.findElement(this.radioArea);
        await this.driver.sleep(1000);
    }

    // TEST 2. Click on the “One Way” radio button.
    async clickOnOneWay(){
        await this.findElementAndClick(this.oneWayButton);
        await this.driver.sleep(1000);
    }

    // TEST 3. Click on the “From” box.
    async fromBox(){
        await this.findElementAndClick(this.clickFromBox);
        await this.driver.sleep(1000);
    }

    // TEST 4. Choose the airport from which you are flying (Abu Dhabi).
    async pickAbuDhabi(){
        await this.findElementAndClick(this.pickAbuD)
        await this.driver.sleep(1000);;
    }

    // TEST 5. Pick a city from the dropdown menu where you want to fly to.
    async pickAnkara(){
        await this.driver.executeScript("window.scrollBy(0, 200);");
        await this.findElementAndClick(this.pickANK);
        await this.driver.sleep(1000);
    } 

    // TEST 6. Click on the “Departure date” box.
    async DapartureDate(){
        await this.findElementAndClick(this.clickDeparture);
        await this.driver.sleep(1000);
    }

    // TEST 7. Select the date (31th January).
    async chooseDapartureDate(){
        await this.findElementAndClick(this.clickDepartureDate);
        await this.driver.sleep(1000);
    }

    // TEST 8. Click on the “Departure date” box.
    async DapartureReturnDate(){
        await this.findElementAndClick(this.clickDeparture2);
        await this.driver.sleep(1000);
    }


    // TEST 9. Select the date (31 February).
    async chooseDapartureDate2(){
        await this.findElementAndClick(this.clickDepartureDate2);
        await this.driver.sleep(1000);
    }


    // TEST 10. Find the “Search cheap flights” button and click on it.
    async searchCheapFlights(){
        await this.findElementAndClick(this.clickOnSearch);

    }
    
}