import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // ✅ Locators
  readonly signin: Locator;
  readonly searchbox: Locator;
  readonly searchbutton: Locator;
  readonly cartbutton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signin = page.locator('//*[@id="nav-link-accountList"]/a');
    this.searchbox = page.locator('//*[@id="twotabsearchtextbox"]');
    this.searchbutton = page.locator('//*[@id="nav-search-submit-button"]');
    this.cartbutton = page.locator('//*[@id="nav-cart"]');
  }

  // ✅ Actions
  async searchProduct(productName: string) {
    await this.searchbox.fill(productName);
    await this.searchbutton.click();
  }

  async clickSignIn() {
    await this.signin.click();
  }

  async clickCart() {
    await this.cartbutton.click();
  }
}
