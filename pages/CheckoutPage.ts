import {Page} from '@playwright/test'

export class CheckoutPage{
    constructor(private page: Page){}

    async fillCheckoutInfo(firstname: string, lastname: string, postalCode: string ){
        await this.page.fill('#first-name', firstname);
        await this.page.fill('#last-name', lastname);
        await this.page.fill('#postal-code', postalCode);
        await this.page.click('#continue');
    }

    async finishOrder(){
        await this.page.click('#finish');
    }

    async getConfirmationMessage(){
        return this.page.locator('.complete-header')
    }
}