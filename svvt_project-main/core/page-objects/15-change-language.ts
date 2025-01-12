import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class ChangeLanguage extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickLanguage = By.xpath("//div[@id='language-web']//div[contains(@class, 'o-header__language__active')]");

    private clickDeutsch = By.xpath("//div[@class='o-languages__text' and text()='DE']");

    private buttonDE = By.xpath("//div[@class='o-header__language__code' and text()='DE']");

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:



    // TEST 1. Click to change language.
    async chooseLanguages(){
        await this.findElementAndClick(this.clickLanguage);
    }

    // TEST 2. Choose DE
    async chooseDeutsch(){
        await this.findElementAndClick(this.clickDeutsch);
    }

    // TEST 3. Check if DE is selected by comparing shortened language name.
    async assureDe(){
        await this.checkMatchingElements(this.buttonDE, "DE");
    }

 
}