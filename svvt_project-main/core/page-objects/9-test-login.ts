import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class TestLogin extends BasePage {

    private enterPhoneNumber = By.className('MuiInputBase-input MuiInput-input css-mnn31');
    private enterYourPassword = By.xpath("//label[contains(., 'Password')]/following-sibling::div//input[@type='password']")

    private loginButton = By.className('submit-button-container login-button-container');
    private clickRobot = By.className('rc-anchor-center-item rc-anchor-checkbox-label');

    private alreadyMemberText = By.className('text-wrapper-rtl already-member-text');
    private logInButton = By.className('text-wrapper-rtl login-text');
    private loginText = By.className('text-wrapper-rtl login-header-title-text');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

// TEST 1. Find "Already a member?"
    async alreadyAMember(){
        await this.driver.sleep(2000);
        await this.findElement(this.alreadyMemberText);
    }
    // TEST 2. Click on Log In Button
    async clickLogInButton(){
        await this.findElementAndClick(this.logInButton);
        await this.driver.sleep(2000);
    }
// TEST 3. Check if login opened by comparing header to "Pegasus Bolbol Login"
    async openLogin(){
        await this.checkMatchingElements(this.loginText, "Pegasus Bolbol Login")
    }
    // TEST 4. Enter phone number.
    async enterPhone(){
        await this.fillInputField(this.enterPhoneNumber, testData.login.number);
    }
    // TEST 5. Enter password.
    async enterPassword(){
        await this.fillInputField(this.enterYourPassword, testData.login.password);
    }
    // // TEST 6. Not a robot confirmation.
    // Step 5 is not executed because it asks for "not-a-robot" confirmation and cannot be executed
    // by a machine for logical reasons.
    // async notARobot(){
    //     await this.findElementAndClick(this.clickRobot);
    // }

    // TEST 7. Click Log In button.
    async clickLogIn(){
        await this.findElementAndClick(this.loginButton);
    }

 
}