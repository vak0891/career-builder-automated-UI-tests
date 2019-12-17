export default class Jobs {
  constructor() {
    this.jobsTab = element(by.xpath("(//a[@href='https://www.careerbuilder.com/browse'])[1]"));
    this.engineersOption = element(by.xpath("//a[@href='/browse/category/engineers']"));
    this.automationEngineer = element(by.xpath("//a[contains(.,'Automation Engineer')]"));
    this.listData = $$('.data-results-title');
  }
}
