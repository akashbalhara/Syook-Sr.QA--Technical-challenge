const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pageObjects/LoginPage');

Given('User is on the Login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.page.goto('https://bugbash.syook.com/');
});

When('User enters username {string} and password {string}', async function (username, password) {
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
});

When('User clicks on the login button', async function () {
  await this.loginPage.clickLogin();
});

Then('User should be logged in successfully', async function () {
  const text = await this.loginPage.getNotificationText();
  if (!text.includes('Login successful')) {
    throw new Error(`Expected text to include 'Login successful' but got: "${text}"`);
  }
});


Then('User should see an error message', async function () {
  const text = await this.loginPage.getNotificationText();
  if (!text.includes('Invalid email or password')) {
    throw new Error(`Expected text to include 'Invalid email or password' but got: "${text}"`);
  }
});
