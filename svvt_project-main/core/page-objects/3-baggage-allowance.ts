import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class BaggageAllowance extends BasePage {


    private addBaggageButton = By.className('compare-packages__tbl__show__btn compare-packages__tbl__show__btn--active js-compare-packages__tbl__show__btn');
    private returnHome = By.className('o-header__logo');
    private comfortflexbutton = By.xpath('/html/body/div[3]/div[2]/section[3]/div/div/section/div/div[2]/div/table/thead/tr/th[5]');
    private comfortflexbutton1 = By.xpath('/html/body/div[3]/div[2]/section/div/div[2]/a[4]');
    private comparePackagesButton = By.xpath('/html/body/div[3]/div[2]/section/div/div[3]/button');
    private saverPlusBotton = By.xpath('/html/body/div[3]/div[2]/section/div/div[3]/div/table/thead/tr/th[4]');
    private saverButton = By.xpath('/html/body/div[3]/div[2]/section/div/div[3]/div/table/thead/tr/th[3]');
    private lightButton = By.xpath('/html/body/div[3]/div[2]/section/div/div[3]/div/table/thead/tr/th[2]');

    constructor(driver: WebDriver) {
        super(driver);
    }




    // STEP 1. Find and click on the button „compare packages“.
    async addBaggage(){
        await this.driver.executeScript('window.scrollBy(0, 1000);');
        await this.findElementAndClick(this.addBaggageButton);
        await this.driver.executeScript('window.scrollBy(0, 200);');
        await this.driver.sleep(2000);
    }

    //STEP 2. Go through packages
    async comfortflex(){
        await this.findElementAndClick(this.comfortflexbutton);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.comfortflexbutton1);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.comparePackagesButton);
        await this.driver.sleep(1000);
        await this.findElementAndClick(this.saverPlusBotton);
        await this.findElementAndClick(this.saverButton);
        await this.findElementAndClick(this.lightButton);
    }


    // STEP 3. Return to the homepage.
    async goToHomePage(){
        await this.findElementAndClick(this.returnHome);
    }

 
}