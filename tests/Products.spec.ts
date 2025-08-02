import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import users from '../fixtures/users.json';

test('Ajouter un produit au panier', async ({page})=> {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.open();
    await login.login(users.validUser.username, users.validUser.password);
    expect(await products.isLoaded()).toBeTruthy();

    await products.addFirstProductToCart();
    await products.goToCart();

    await expect(page.locator('.cart_item')).toHaveCount(1);
});