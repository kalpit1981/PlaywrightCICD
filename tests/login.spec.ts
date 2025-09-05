import { expect, test } from '../fixtures/orangeHRM-fixture';

test.describe('Login Tests', () => {

test.beforeEach('Before Each Hook',async ({ loginPage }) => {
    await loginPage.gotoOrangeHRM();
  });

  test.afterEach('After Each Hook', async ({ userPage }) => {
    await userPage.logoutOrangeHRM();
  });

test('should login with valid credentials', async ({ page,loginPage }) => {
    console.log(`Logging in with user: ${process.env.VALID_USER!}`);
    console.log(`Logging in with password: ${process.env.VALID_PASSWORD!}`);
    console.log(await page.title());

  });

  test('verify title after login', async ({ page,loginPage }) => {

    await expect(page).toHaveTitle(/OrangeHRM/);

  });



});
