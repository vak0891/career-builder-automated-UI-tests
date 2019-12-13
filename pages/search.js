export default class Search {
  constructor() {
    this.searchKeyword = $('#Keywords');
    this.searchButton = $('.btn-linear-green');
    this.companyOverview = $('#company-overview');
    this.companySalaryText = $('.salary-estimator_bubble_text');
    this.companySalaryValue = $('.salary-estimator_bubble_salary');
    this.searchData = $$('.data-results-title');
    this.searchDataOption = element(
      by.xpath("(//div[@class='data-results-title dark-blue-text b'])[2]"),
    );
    this.filterJobType = element(by.xpath("//div[@class='filter-title'][contains(.,'Job Type')]"));
    this.filterFullTimeOption = element(
      by.xpath("//label[@for='emp_jtft'][contains(.,'Full Time')]"),
    );
    this.filterPay = element(by.xpath("//div[@class='filter-title'][contains(.,'Pay')]"));
    this.filterPayHigh = element(by.xpath("//label[@for='pay_100'][contains(.,'$100,000+')]"));
    this.payOptionSelected = element(
      by.xpath("//div[@class='filter-title'][contains(.,'$100,000+')]"),
    );
  }
}
