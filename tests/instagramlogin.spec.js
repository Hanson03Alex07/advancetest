// tests/instagram-login.spec.js
import { test, expect } from '@playwright/test';

test('Instagram login test', async ({ page }) => {
  // Go to Instagram login page
  await page.goto('https://www.instagram.com/');

  // Wait for username and password fields to appear
  await page.waitForSelector('input[name="username"]');

  // Fill in credentials
  await page.fill('input[name="username"]', 'newtonlopezHA');
  await page.fill('input[name="password"]', 'M2e3w4r5d@b@l!');

  // Click login button
  await page.click('button[type="submit"]');

  // Wait for some time to allow navigation or a possible popup
  await page.waitForTimeout(10000);

  // Validate login success (Instagram usually shows “Home” or profile icon)
  // const isLoggedIn = await page.locator('text=Save your login info?').isVisible().catch(() => false);
  // expect(isLoggedIn).toBeTruthy();

  // for next page assertion
  // await expect(page.locator('text=Home')).toBeVisible();

  await expect(page.getByRole('link', {name: 'Home'})).toBeVisible();

});

