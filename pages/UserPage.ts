import { Locator, Page} from '@playwright/test';

export class UserPage {
  // Define locators for the user page
  readonly page: Page;
  readonly userMenuButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenuButton = page.locator('.oxd-userdropdown-tab');
    this.logoutButton = page.locator('//a[normalize-space()="Logout"]');

  }

  async logoutOrangeHRM() 
  {
    await this.userMenuButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.userMenuButton.click();
    await this.logoutButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.logoutButton.click();
  }
}
