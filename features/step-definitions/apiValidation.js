const { When, Then } = require('@wdio/cucumber-framework');
const APIHelper = require('../utils/restUtils');
const assert = require('assert');
const UISteps = require('./steps');
const globalData = require('../utils/globalutils');

let apiResponse;

When('I send a {string} request to API Autenticate', async (method) => {
    const inputUsername = globalData.userCredentials.username;
    const inputPassword = globalData.userCredentials.password;
    let url = `https://target_domain/db/main?a=API_Authenticate&username=${inputUsername}&password=${inputPassword}&hours=24`;
    apiResponse = await APIHelper.sendRequest(method, url)
})

Then(/^the API response status should be (\d+)$/, async (expectedStatus) => {
    assert.strictEqual(apiResponse.status, parseInt(expectedStatus), `Expected status ${expectedStatus} but got ${apiResponse.status}`);
});
