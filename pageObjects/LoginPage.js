class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='email']");
    this.passwordField = page.locator("//input[@id='password']");
    this.loginButton = page.locator("form[id='loginForm'] button[type='submit']");
    this.notificationModal = page.locator('#notification'); // Common locator for success & failure
  }

  async enterUsername(username) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getNotificationText() {
  // Wait for the notification element to be visible
  await this.notificationModal.waitFor({ state: 'visible', timeout: 7000 });

  // Retry to get innerText multiple times if empty, or add a short delay before reading
  for (let i = 0; i < 5; i++) {
    const text = (await this.notificationModal.innerText()).trim();
    if (text.length > 0) {
      return text;
    }
    await this.page.waitForTimeout(500); // wait 0.5 seconds before retry
  }

  // Fallback if still empty
  return '';
}

}

module.exports = LoginPage;
