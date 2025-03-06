const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuickBasePage {
    /**
     * define selectors using getter methods
     */

    


    ProjectTaskButton(labelvalue) {
        return $('//div[contains(text(),"'+labelvalue+'")]');
    }

    ProjectInputLabel(labelValue){
        return $('//input[@label="'+labelValue+'"]')
    }
    
    async isElementPresent(labelvalue){
        console.log(labelvalue+"Element is displayed as expected")
        return await this.ProjectTaskButton(labelvalue).isDisplayed();
    }

    async elementSelect(labelvalue){
        console.log(labelvalue+"Element is clicked as expected")
        return await (await this.ProjectTaskButton(labelvalue)).click();
    }

    async labelInputValue(labelValue, value){
        const inputField = await this.ProjectInputLabel(labelValue);
        await inputField.waitForExist({ timeout: 10000 });
        await inputField.waitForDisplayed({ timeout: 12000 }); 
        await inputField.click();
        await inputField.setValue(value);
    }
}

module.exports = new QuickBasePage();
