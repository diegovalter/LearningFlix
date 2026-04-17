import { Before, After, setDefaultTimeout }from '@cucumber/cucumber'
import { chromium } from 'playwright'
//require('dotenv').config();

setDefaultTimeout(60000); 

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
});

After(async function () {
  await this.browser.close();
});