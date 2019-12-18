import { browser } from 'protractor';
import { Then, setDefaultTimeout } from 'cucumber';
import Globals from '../support/globals';
import Constants from '../support/constants';
import Search from '../pages/search';
import Utils from '../support/util';

const globals = new Globals();
const constants = new Constants();
const utils = new Utils();
const search = new Search();
const EC = browser.ExpectedConditions;

const { expect } = globals;

setDefaultTimeout(600 * 1000);

Then(/^I enter "(.*?)" in the search field$/, async job_title => {
  await browser.wait(EC.visibilityOf(search.searchKeyword), 10000);
  const el = [search.searchKeyword];
  const value = [job_title];
  await search.searchKeyword.sendKeys(job_title);
  await utils.checkInputValue(el, value);
});

Then(/^I click the Search Jobs button$/, async () => {
  await search.searchButton.click();
});

Then(/^I am redirected to page with jobs listed$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal(constants.cbQAEngineerPageTitle);
});

Then(/^I see that the "(.*?)" jobs are listed in the left panel$/, async job_title => {
  await browser.wait(EC.presenceOf(search.searchData));
  await utils.checkText(search.searchData, job_title);
});

Then(/^I filter jobs by full time and salary greater than 100000$/, async () => {
  await search.filterJobType.click();
  await search.filterFullTimeOption.click();
  await search.filterPay.click();
  await search.filterPayHigh.click();
  await browser.wait(EC.visibilityOf(search.payOptionSelected), 20000);
});

Then(/^I see that the salary details are listed in the right panel$/, async () => {
  await browser.wait(EC.visibilityOf(search.searchDataOption), 10000);
  await search.searchDataOption.click();
  await browser.wait(EC.visibilityOf(search.companySalaryText), 10000);
  await utils.checkTextContent(search.companySalaryText, 'Yearly Salary');
  await expect(search.companySalaryValue.getAttribute('value').toString()).to.not.be.null;
});

Then(/^I also see that the job details are given in the right panel$/, async () => {
  await utils.checkTextContent(search.companyOverview, 'Company Overview');
});

Then(/^I check that the Apply Now button is present$/, async () => {
  await utils.checkTextContent(search.searchButton, 'Apply Now');
});

Then(/^I click on heart icon next to the job selected$/, async () => {
  await search.saveJobSelected.click();
});

Then(/^I see that the job saved is listed on the right top corner$/, async () => {
  await browser.wait(EC.visibilityOf(search.jobSavedListed), 10000);
  await utils.checkTextContent(search.jobSavedListed, '1 Job');
});

Then(/^I click on heart icon of job saved to remove from saved list$/, async () => {
  await browser
    .actions()
    .mouseMove(search.unselectJobSaved)
    .click()
    .perform();
  await browser.wait(EC.not(EC.presenceOf(search.unselectJobSaved)), 10000);
});

Then(/^I see that the job is no longer saved and has been deselected$/, async () => {
  await browser.wait(EC.not(EC.presenceOf(search.jobSavedListed)), 10000);
});
