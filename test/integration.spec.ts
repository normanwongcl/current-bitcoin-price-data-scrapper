import { test } from '@playwright/test';

test('sanity check on selection input', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Filter time range').selectOption('10');
  await page.getByLabel('Filter time range').selectOption('60');
  await page.getByLabel('Filter time range').selectOption('120');
});
