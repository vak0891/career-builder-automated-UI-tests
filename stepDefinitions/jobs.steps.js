import { browser } from 'protractor';
import { Then, setDefaultTimeout } from 'cucumber';
import Jobs from '../pages/jobs';

const jobs = new Jobs();
const EC = browser.ExpectedConditions;

setDefaultTimeout(600 * 1000);

Then(/^I click on Jobs tab$/, async () => {
  await jobs.jobsTab.click();
  await browser.wait(EC.visibilityOf(jobs.engineersOption), 10000);
});

Then(/^I click on the category Engineers$/, async () => {
  await jobs.engineersOption.click();
  await browser.wait(EC.visibilityOf(jobs.automationEngineer), 10000);
});

Then(/^I select Automation engineer$/, async () => {
  await jobs.automationEngineer.click();
});
