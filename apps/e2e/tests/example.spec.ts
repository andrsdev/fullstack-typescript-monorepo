import { test, expect } from '@playwright/test';

test('has filters', async ({ page }) => {
  await page.goto('http://localhost:4173/search');

  await expect(page.getByText('Collections')).toBeVisible();
});
