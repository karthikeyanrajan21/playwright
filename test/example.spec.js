const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');

  // Check the title of the page
  await expect(page).toHaveTitle('Example Domain');

  // Check for a specific text on the page
  const heading = await page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // Click on the link to the more information page
  const moreInfoLink = page.locator('a');
  await expect(moreInfoLink).toHaveText('More information...');
  await moreInfoLink.click();

  // Verify that the URL has changed
  await expect(page).toHaveURL(/more-info/);
});
