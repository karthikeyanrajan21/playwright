const { test, expect } = require('@playwright/test');

test('Playwright homepage has title and links to the Get Started page', async ({ page }) => {
  // Navigate to the Playwright homepage
  await page.goto('https://playwright.dev');

  // Check the title of the page
  await expect(page).toHaveTitle(/Playwright/);

  // Check for a specific text on the page (e.g., Get Started)
  const getStartedLink = page.locator('text=Get Started');
  await expect(getStartedLink).toBeVisible();

  // Click on the "Get Started" link
  await getStartedLink.click();

  // Verify that the URL has changed to the Get Started page
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});
