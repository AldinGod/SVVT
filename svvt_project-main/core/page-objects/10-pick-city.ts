import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PickCity extends BasePage {


    private clickDeparture = By.xpath("/html/body/div[3]/section[7]/div/div/div/div[1]/nav/ul/li[3]/h3/a");
    private clickDeparture1 = By.xpath("/html/body/div[3]/section[7]/div/div/div/div[1]/nav/ul/li[2]/h3/a")
    private clickDeparture2 = By.xpath("/html/body/div[3]/section[7]/div/div/div/div[1]/nav/ul/li[4]/h3/a")
    private clickJeddah = By.xpath("//li/a[@href='/en/cities/flights-to-jeddah']");
    private returntostart = By.className('o-header__logo');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // TEST 1. Test the navbar of cities
    async departureCity(){
        await this.driver.sleep(2000);
        await this.driver.executeScript("window.scrollBy(0, 1600);");
        await this.driver.sleep(2000);
        await this.findElementAndClick(this.clickDeparture1);
        await this.findElementAndClick(this.clickDeparture2);
        await this.findElementAndClick(this.clickDeparture);
    }

    // TEST 2. Pick a City from list.
    async pickJeddah(){
        await this.findElementAndClick(this.clickJeddah);
    }

    // TEST 3. Return to base page
    async start(){
        await this.findElementAndClick(this.returntostart);
    }


 
}