import { test, expect } from '../fixtures/orangeHRM-fixture';

test('Global Setup - login and save storage state', async ({ page, loginPage, dashboardPage }) => {
  // Navigate and login
  await loginPage.gotoOrangeHRM();
  await loginPage.loginOrangeHRM(process.env.VALID_USER!, process.env.VALID_PASSWORD!);

  // Verify dashboard URL
  await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
  await expect(page).toHaveURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);

  // Verify dashboard is visible
  await expect(dashboardPage.dashboardTitleText).toBeVisible();
  await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');

  console.log('✅ Login successful. Saving state.json...');

  // Save login state
  await page.context().storageState({ path: 'state.json' });
});
