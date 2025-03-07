const { When, Then } = require('@wdio/cucumber-framework');
const APIHelper = require('../utils/restUtils');
const assert = require('assert');
const UISteps = require('./steps');
const globalData = require('../utils/globalutils');

let apiResponse;

When('I send a {string} request to API Autenticate', async (method) => {
    const inputUsername = globalData.userCredentials.username;
    const inputPassword = globalData.userCredentials.password;
    let url = 'https://api.quickbase.com/v1/';
    apiResponse = APIHelper.getTemporaryToken(dbid);
})

Then(/^the API response status should be (\d+)$/, async (expectedStatus) => {
    assert.strictEqual(apiResponse.status, parseInt(expectedStatus), `Expected status ${expectedStatus} but got ${apiResponse.status}`);
});
