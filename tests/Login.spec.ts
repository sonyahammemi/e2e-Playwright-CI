import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../fixtures/users.json';

test('Login avec utilisateur valide', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/inventory.html/);
});

test('Login avec utilisateur verrouillé', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(users.lockedUser.username, users.lockedUser.password);
  await expect(await login.getErrorMessage()).toContainText('locked out');
});
