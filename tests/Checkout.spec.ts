import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import users from '../fixtures/users.json';


test('Passer une commande ', async ({page})=>{
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const checkout = new CheckoutPage(page);

    await login.open();
    await login.login(users.validUser.username, users.validUser.password);
    await products.addFirstProductToCart();
    await products.goToCart();

    await page.click('#checkout');
    await checkout.fillCheckoutInfo(users.checkout.firstname, users.checkout.lastname, users.checkout.postalCode);
    await checkout.finishOrder();


    await expect(await checkout.getConfirmationMessage()).toHaveText('Thank you for your order!')
});