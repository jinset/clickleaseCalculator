import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Calculator} from '../shared/calculator.model';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculatorChange = new Subject<Calculator>();

  private calculator: Calculator = new Calculator(100, 7500, 30, 30, 40, 50, 0, 0, 0);

  constructor() {
    this.calTotal(this.calculator);
  }

  getCalculator() {
    return this.calculator;
  }

  updateCalculator(calculator: Calculator) {
    this.calculator = calculator;
    this.calTotal(this.calculator)
    this.calculatorChange.next(this.calculator);
  }

  private calTotal(calculator: Calculator) {
    const avgMonthly: number = calculator.avgMonthly;
    const avgInvoice: number = calculator.avgInvoice;
    const currentApproval: number = calculator.currentApproval / 100;
    const currentClose: number = calculator.currentClose / 100;
    const clickApprovale: number = calculator.clickApproval / 100;
    const clickClose: number = calculator.clickClose / 100;
    const totalMonthlySales: number  = (avgMonthly * avgInvoice) * currentApproval * currentClose;
    const totalMonthlyClickSales: number  = (avgMonthly * avgInvoice) * clickApprovale * clickClose;
    const total: number  = totalMonthlyClickSales - totalMonthlySales;

    this.calculator.totalMonthlySales = totalMonthlySales;
    this.calculator.totalMonthlyClickSales = totalMonthlyClickSales;
    this.calculator.totalLoss = total > 0 ? total : 0;
  }
}
