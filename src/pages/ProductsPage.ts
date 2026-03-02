import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Dynamic locator for product based on name
  private productByName(productName: string): Locator {
    return this.page
      .locator('span.a-size-medium.a-color-base', { hasText: productName })
      ;
  }

  // Action: click on product
  async selectProduct(productName: string): Promise<void> {
    //await this.productByName(productName).waitFor({ state: 'visible' });
    await this.productByName(productName).click();
  }
}
