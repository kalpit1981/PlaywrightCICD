import { expect, test } from '../fixtures/orangeHRM-fixture';

test.describe('Login Tests', () => {

test.beforeEach('Before Each Hook',async ({ loginPage }) => {
    await loginPage.gotoOrangeHRM();
  });

  test.afterEach('After Each Hook', async ({ userPage }) => {
    await userPage.logoutOrangeHRM();
  });

test('should login with valid credentials', async ({ page,loginPage }) => {
    console.log(`Logging in with user: ${process.env.validUser!}`);
    console.log(`Logging in with password: ${process.env.validPassword!}`);
    console.log(await page.title());

  });

  test('verify title after login', async ({ page,loginPage }) => {

    await expect(page).toHaveTitle(/OrangeHRM/);

  });

// test('should not login with invalid credentials', async ({ loginPage }) => {
//     console.log(`Logging in with invalid user: ${process.env.invalidUser!}`);
//     console.log(`Logging in with invalid password: ${process.env.invalidPassword!}`);

//   });

});
