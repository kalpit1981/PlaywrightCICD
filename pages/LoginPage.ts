import { Locator, Page} from '@playwright/test';

export class LoginPage {
  // Define locators for the login page
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.logoutButton = page.getByRole('listitem').filter({ hasText: 'mandaFirstName userLastName' }).locator('i');

  }

    // Method to navigate to the login page
    async gotoOrangeHRM() 
    {
      await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }
  // Method to log in
  async loginOrangeHRM(userName: string, password: string) 
  {
    await this.usernameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logoutOrangeHRM() 
  {
    await this.logoutButton.click();
  }
}
