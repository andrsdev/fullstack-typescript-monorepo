import { test, expect } from '@playwright/test';

//cache tes
test.describe('search page', () => {
  test('has filters', async ({ page }) => {
    await page.goto('http://localhost:4173/search');

    await expect(page.getByText('Collections')).toBeVisible();
  });
});
