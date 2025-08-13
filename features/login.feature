Feature: Login functionality

  Scenario Outline: Successful login with valid credentials
    Given User is on the Login page
    When User enters username "<username>" and password "<password>"
    And User clicks on the login button
    Then User should be logged in successfully

    Examples:
      | username            | password  |
      | admin@shophub.com   | admin123  |
      | user@example.com    | user123   |

  Scenario Outline: Unsuccessful login with invalid credentials
    Given User is on the Login page
    When User enters username "<username>" and password "<password>"
    And User clicks on the login button
    Then User should see an error message

    Examples:
      | username            | password   |
      | admin@shophub.com   | wrongpass  |
