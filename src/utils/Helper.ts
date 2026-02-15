import { Page, BrowserContext, chromium } from '@playwright/test';

export class Helper {
  static async launchAmazon(baseURL?: string): Promise<{
    page: Page;
    context: BrowserContext;
  }> {
    const browser = await chromium.launch({
      headless: false, // true in CI
    });

    const context = await browser.newContext({
      viewport: { width: 1080, height: 1920 },
    });

    const page = await context.newPage();

    await page.goto(baseURL || '/', {
  waitUntil: 'domcontentloaded',
});

    return { page, context };
  }
   static async wait(seconds: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
}
