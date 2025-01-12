import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class SignupForm extends BasePage {


    private clickJoin = By.className('data-link-prepweb-redirect');
    private checkSignUpTitle = By.className('registration-title');
    private enterYourName=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[1]/div/div/div/input');
    private enterYourSurname=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[2]/div/div/div/input');
    private enterYourNumber=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[3]/div/div[2]/div[2]/div/div/input');
    private enterYourEmail=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[4]/div/div/div/input');
    private check1=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[2]/div[3]/div[2]/label/span[1]/input');
    private check2=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[4]/label/span[1]/input');
    private robotcheck=By.xpath('/html/body/div[2]/div[3]/div[1]/div/div/span/div[1]');
    private becomebutton=By.xpath('/html/body/div[2]/div/div[3]/div/div[2]/div/form/div/div[3]/div[5]/div');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:


    // TEST 1. Find and click button for joining
    async joinBolbol() {
        // Scroll down a bit to make the button visible
        await this.driver.executeScript("window.scrollBy(0, 1000);");
        await this.findElementAndClick(this.clickJoin);
    }

    // TEST 2. Make sure page is opened by checking title.
    async checkSignUp() {
        await this.checkMatchingElements(this.checkSignUpTitle, "Sign Up Free");
    }
    // TEST 3. Fill up sign in
    async enterName(){
        await this.fillInputField(this.enterYourName, testData.bolbol.name);

    }
    async enterSurname(){
        await this.fillInputField(this.enterYourSurname, testData.signup.surname);
    }
    async enterNumber(){
        await this.fillInputField(this.enterYourNumber, testData.signup.number);
    }
    async enterEmail(){
        await this.fillInputField(this.enterYourEmail, testData.signup.email);
    }

    async clickcheck() {
        await this.findElementAndClick(this.check1);
        await this.driver.sleep(2000);
    }

    async clickcheck2() {
        await this.findElementAndClick(this.check2);
        await this.driver.executeScript('window.scrollBy(0, 1000);');
        await this.driver.sleep(2000);
    }
//Robot check
    async robot() {
        await this.findElementAndClick(this.robotcheck);
    }

    // Test 4. Become a member
    async become() {
        await this.findElementAndClick(this.becomebutton);
    }

 
}