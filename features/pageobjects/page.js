const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/ class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open() {
        await browser.url('https://team.quickbase.com/nav/app/buxhygszp/action/appoverview/6d8f206b-b984-4735-ad51-9ce1525167a3');
    }
} module.exports = new Page();
