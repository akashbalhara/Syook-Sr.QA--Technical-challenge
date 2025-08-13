# Playwright + Cucumber BDD Automation Framework (Login Functionality)

##  Project Overview
This project automates the **login functionality** of [https://bugbash.syook.com/](https://bugbash.syook.com/) using:

- **Playwright** – Modern end-to-end testing library.
- **Cucumber (Gherkin)** – BDD-style test scenarios.
- **JavaScript (Node.js)** – Test scripting language.
- **Page Object Model (POM)** – To keep locators and actions reusable.
- **Chai** – Assertion library.
- **Cucumber Hooks** – For reusable setup and teardown.

The test suite covers:
-  **Successful Login** – with valid credentials (Admin & User)
-  **Unsuccessful Login** – with invalid credentials to verify error handling

---

## Project Structure
project-root/
│
├── features/
│ └── login.feature # Gherkin scenarios for positive & negative login
│
├── step-definitions/
│ └── login.steps.js # Step definitions for the feature
│
├── pageObjects/
│ └── LoginPage.js # Page Object Model for login page
│
├── support/
│ ├── hooks.js # Before/After hooks for browser/page setup
│
├── package.json # Dependencies & npm scripts
└── README.md # Documentation


---

##  Prerequisites
- **Node.js**: v14+ (recommend LTS)
- **npm**: comes with Node.js
- **Git**: for version control
- Internet connection to access application under test

---

## 🚀 Setup Instructions

1. **Clone this repository**
git clone <your-repo-url>
cd <project-folder>


2. **Install dependencies**
npm install


3. **Install Playwright**
npx playwright install


---

## How to Run Tests

**Run all scenarios:**
npm run test
