@TEST_TEST-2 @TESTSET_TEST-3
Feature: Search: Career Builder


    @RegressionTest @SmokeTest
    Scenario: Search by Job title
      Given I open CareerBuilder
      Then I enter "QA Engineer" in the search field
      Then I click the Search Jobs button
      Then I am redirected to page with jobs listed
      Then I see that the "QA Engineer" jobs are listed in the left panel
      Then I filter jobs by full time and salary greater than 100000
      Then I see that the salary details are listed in the right panel
      Then I also see that the job details are given in the right panel
      Then I check that the Apply Now button is present

    @TEST_TEST-51 @TESTSET_TEST-3
    @RegressionTest @SmokeTest
    Scenario: Save search
      Given I open CareerBuilder
      Then I click on SignIn
      Then I am directed to the Career Builder sign in page
      Then I enter "vaish0891@gmail.com" and "toptaltest123#" as credentials
      Then I click on the Sign In button
      Then I am taken to Career Builder home page
      Then I enter "QA Engineer" in the search field
      Then I click the Search Jobs button
      Then I am redirected to page with jobs listed
      Then I see that the "QA Engineer" jobs are listed in the left panel
      Then I click on heart icon next to the job selected
      Then I see that the job saved is listed on the right top corner
      Then I click on heart icon of job saved to remove from saved list
      Then I see that the job is no longer saved and has been deselected
