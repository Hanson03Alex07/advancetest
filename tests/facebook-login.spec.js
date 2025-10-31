import { test, expect } from '@playwright/test';

test('Facebook login test', async ({ page }) => {
  // Go to Facebook login page
  await page.goto('https://www.facebook.com/');

  // Type in email/username
  await page.getByLabel('Email or phone number').fill(process.env.FB_EMAIL);

  // Type in password
  await page.getByLabel('Password').fill(process.env.FB_PASSWORD);

  // Click the login button
  await page.getByRole('button', { name: 'Log in' }).click();

  // Wait for navigation or profile icon to appear (successful login)
  await page.waitForURL('**/home.php', { timeout: 15000 });

  // Verify that the login was successful (check if the profile link or home page is visible)
  await expect(page).toHaveURL(/facebook\.com/);
});
