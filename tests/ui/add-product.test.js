const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://localhost:8080/Shopping-List');
    const form = await page.$('ul');
    expect(form).toBeTruthy();
  });
  