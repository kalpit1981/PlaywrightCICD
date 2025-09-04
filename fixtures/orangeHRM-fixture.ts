import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';

type OrangeHRMFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  userPage: UserPage;
};

export const test = baseTest.extend<OrangeHRMFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  userPage: async ({ page }, use) => {
    await use(new UserPage(page));
  },
  
});

export { expect };
