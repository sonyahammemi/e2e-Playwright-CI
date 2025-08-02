import {Page} from'@playwright/test'

export class LoginPage{
    //injecte l’objet page de Playwright pour l’utiliser dans toute la classe.
    constructor(private page: Page){}

    //méthode qui ouvre la page d’accueil (/ utilise le baseURL défini dans playwright.config.ts).
    async open(){
        await this.page.goto('/');

    }
    async login (username: string, password: string){
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button' );

    }

    //retourne l’élément affichant un message d’erreur
    async getErrorMessage(){
        return this.page.locator('[data-test="error"]')
    }
}

