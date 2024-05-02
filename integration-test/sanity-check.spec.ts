import { test } from '@playwright/test';
const { webkit } = require('playwright');

test('sanity test on time selection', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3001/');
  await page.getByRole('img').click({
    position: {
      x: 409,
      y: 112,
    },
  });
  await page.getByLabel('Filter time range').selectOption('10');
  await page.getByLabel('Filter time range').selectOption('60');
  await page.getByLabel('Filter time range').selectOption('120');
});
