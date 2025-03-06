Feature: The Internet Guinea Pig Website

  Scenario: Verify the Project Manager Home page loads successfully
    Given I open the Project Management app with user login details "rajesh130195@gmail.com" and "UmFqZXNoQDEyMzQ1"
    Then I should see the "Project Manger Home" and "Tasks Kanban" tab
    And I should see the "New Project" button on QuickBase Screen
    And User should see "New Task" button label on QuickBase Screen


  Scenario: Create a new project in Project Management Home Screen
    When I click on the "New Project" button
    And User switches to new project creation tab
    And User enters all the project details
    And I submit the form
    Then I should see the new project listed