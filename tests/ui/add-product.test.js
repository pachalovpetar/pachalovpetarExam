const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://pachalovpetar-exam.onrender.com/Shopping-List');
    const form = await page.$('ul');
    expect(form).toBeTruthy();
  });
  