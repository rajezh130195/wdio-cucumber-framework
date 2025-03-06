const { When, Then } = require('@wdio/cucumber-framework');
const APIHelper = require('../utils/apiHelper');
const assert = require('assert');

let apiResponse;

When(/^I send a "(GET|POST|PUT|DELETE)" request to "(.*)"$/, async (method, url) => {
    apiResponse = await APIHelper.sendRequest(method, url);
});

Then(/^the API response status should be (\d+)$/, async (expectedStatus) => {
    assert.strictEqual(apiResponse.status, parseInt(expectedStatus), `Expected status ${expectedStatus} but got ${apiResponse.status}`);
});
