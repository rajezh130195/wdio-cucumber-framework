Feature: API Automation in WebdriverIO Cucumber Framework

  Scenario: Validate GET request for fetching projects
    When I send a "GET" request to "https://jsonplaceholder.typicode.com/posts/1"
    Then the API response status should be 200