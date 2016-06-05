import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ubi-calculator-app',
  templateUrl: 'ubi-calculator.component.html',
  styleUrls: ['ubi-calculator.component.css']
})
export class UbiCalculatorAppComponent {
  title = 'ubi-calculator works!';
  taxRate = 0;
  ubi = 0;
  population = 318892103;
  populationOnSs = 59963425;
  totalIncome = 9040000000000; 
  totalIncomeAfterDeductions = 9040000000000;
  totalIncomeBeforeDeductions = 14700000000000; 
  federalWelfareSpending = 668000000000;
  totalWelfareSpending = 1000000000000;
  totalSocialSecuritySpending = 888000000000; 

  totalUbi = () =>
    this.ubi * this.population;

  deductionFromSs = () => 
    this.populationOnSs * this.ubi;

  savingsFromSsDedecution = () =>
    this.totalSocialSecuritySpending >  this.deductionFromSs() ? this.totalSocialSecuritySpending : this.deductionsFromSs(); 

  taxRateForUbi = (ubi, averageIncome) => 
    rate = ubi / averageIncome;
  
  ubiForTaxRate = (rate, averageIncome) => 
    ubi = rate * averageIncome;

  averageIncomeForTotalIncome = (population, totalIncome) => 
    averageIncome = totalIncome / popualtion;

  taxRateForUbiAndTotalIncome = (ubi, population, totalIncome) =>
    this.taxRateForUbi(ubi, averageIncomeForTotalIncome(population, totalIncome));

  ubiForTaxRateAndTotalIncome = (rate, population, totalIncome) =>
    this.ubiForTaxRate(rate, averageIncomeForTotalIncome(population, totalIncome));
  
  calculateUbi = () => 
    this.ubi = this.ubiForTaxRateAndTotalIncome(this.taxRate, this.population, this.totalIncome);  
 
  calculateTaxRate = () => 
    this.taxRate = this.taxRateForUbiAndTotalIncome(this.taxRate, this.population, this.totalIncome);  
  
  yourCost = (income, taxRate, ubi) =>
    income * taxRate - ubi;

  calculateYourCost = () => 
    this.yourCost(this.yourIncome, this.taxRate, this.ubi);
}
