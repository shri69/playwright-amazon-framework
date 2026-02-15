import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Amazon E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // uses baseURL from config
  });

  test('Launch Amazon and verify title', async ({ page }) => {
    await expect(page).toHaveTitle(/Amazon/);
  });

  test('Search product and add to cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.searchProduct('iphone 14');
    await products.selectProduct('Apple iPhone 14');

    // temporary wait just to observe
    await page.waitForTimeout(5000);
  });

});
