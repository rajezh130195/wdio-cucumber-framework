const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@name="loginid"]');
    }

    get inputPassword () {
        return $('//input[@name="password"]');
    }

    get btnSubmit () {
        return $('//button[@type="submit"]');
    }

    get btnSignIn(){
        return $('//button[@type="SignIn"]');
    }

    get btnNo (){
        return $('//button[text()="No"]')
    }

    get quickbaseLabel(){
        return $('//a[text()="Quickbase"]')
    }

    actionTabField(value){
        return $('//div[contains(text(),"'+value+'")]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(20000);
        await this.btnSubmit.click();
    }

    async validationScreen(){
        if(await this.quickbaseLabel.isDisplayed()){
            console.log("Quickbase Label is present")
        }
    }

    async actionTab(value){
        const tabElement = await this.actionTabField(value); 
        await tabElement.waitForDisplayed(); 
        await tabElement.waitForClickable(); 
        await tabElement.click(); 
        await browser.pause(10000);     
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
