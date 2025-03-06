Feature: API Validation for the quickbase backend validation

  Scenario: Validate GET request for fetching projects
    When I send a "GET" request to API Autenticate
    Then the API response status should be 200