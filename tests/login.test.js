// Playwright Test runner example
import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');
const BASE_URL = process.env.BASE_URL || 'https://the-internet.herokuapp.com';

test('Login with valid credentials', async ({ page }) => {
  const loginUrl = BASE_URL + '/login';
  await page.goto(loginUrl);
  await page.fill('#username', 'tomsmith'); // username is modified with timestamp
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('div.flash.success')).toBeVisible();
});