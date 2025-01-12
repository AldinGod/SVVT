import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class CurrencyChanger extends BasePage {

    private currencyBox = By.className('text-wrapper-rtl button-v2-label');
    private currency = By.xpath("//div[@class='menu-item-content' and @data-testid='menuItemContent']//div[@class='text-wrapper-rtl' and @role='button' and @tabindex='0' and text()='EUR']")
    private GoMonth = By.xpath('/html/body/div[2]/div/div[4]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/div/div/div[4]/div/div');
    private ReturnMonth = By.xpath('/html/body/div[2]/div/div[4]/div[2]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/div/div/div[5]/div/div');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Scroll up for -200 mp. 
    async  scrollUp() {
        await this.driver.executeScript('window.scrollBy(0, -200);');

    }

    // TEST 2. Click on the currency changer box.
    async clickOnCurrencyBox(){
        await this.findElementAndClick(this.currencyBox);
    }

    // TEST 3. Click on the wanted currency (EUR).
    async chooseCurrency(){
        await this.findElementAndClick(this.currency);
    }


    // STEP 4. Choose the go month
    async chooseGoMonth(){
        await this.findElementAndClick(this.GoMonth);
    }
    // STEP 5. Choose the return month
    async chooseReturnMonht(){
        await this.findElementAndClick(this.ReturnMonth);
    }
 
}