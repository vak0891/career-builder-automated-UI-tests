@TEST_TEST-35 @TESTSET_TEST-3
Feature: Jobs: Career Builder

    @RegressionTest @SmokeTest
    Scenario: Browse Jobs 
      Given I open CareerBuilder
      Then I click on Jobs tab
      Then I click on the category Engineers
      Then I select Automation engineer
      Then I see that the "Automation Engineer" jobs are listed in the left panel
      Then I filter jobs by full time and salary greater than 100000
      Then I also see that the job details are given in the right panel
      Then I check that the Apply Now button is present