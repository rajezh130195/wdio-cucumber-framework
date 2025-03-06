const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const QuickbasePage = require('../pageobjects/quickbase.page');
const Page = require('../pageobjects/page');

Given('I open the Project Management app with user login details {string} and {string}', async (username, password) => {
    await Page.open();
    await LoginPage.btnNo.click();
    const decryptpwd = Buffer.from(password, 'base64').toString('utf8');
    console.log("Password Value +++++++"+decryptpwd);
    await LoginPage.login(username, decryptpwd);
    await LoginPage.validationScreen();
})

Then('I should see the {string} and {string} tab', async (Tab1, Tab2) => {
    console.log(Tab1+"value:++++++++");
    await LoginPage.actionTab(Tab2);
    await LoginPage.actionTab(Tab1);
  })

Then('User should see {string} button label on QuickBase Screen', async (labelValue) => {
    await QuickbasePage.isElementPresent(labelValue);
})

Then('I should see the {string} button on QuickBase Screen', async (labelValue) => {
    await QuickbasePage.isElementPresent(labelValue);
})

When('I click on the {string} button', async (labelValue) => {
    await QuickbasePage.elementSelect(labelValue);
    await browser.pause(10000);
})

When('User switches to new project creation tab', async () => {
    console.log("Test Value")
    const handles = await browser.getWindowHandles();
    //await browser.switchToWindow(handles[3]); // Switch to the second tab
})

When('User enters all the project details', async () => {
    //await QuickbasePage.labelInputValue("Project Name", "SAMPLE_AUTOMATION_PROJECT");
})

When('I send a {string} request to {string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})






