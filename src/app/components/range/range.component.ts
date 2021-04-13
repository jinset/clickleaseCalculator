import { Component, Input, OnInit } from '@angular/core';
import { Calculator } from 'src/app/shared/calculator.model';

import { CalculatorService } from '../../calculator/calculator.service';

@Component({
  selector: 'range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() rangeValue: number = 0;
  @Input() stepValue: number = 1;
  @Input() dataType: string = '';

  constructor(private calculatorService:CalculatorService) {

  }

  ngOnInit(): void {
  }

  setValue(val: number) {
    let calculator: Calculator = this.calculatorService.getCalculator();
    calculator[this.dataType] = Number(val);
    this.calculatorService.updateCalculator(calculator);
  }

  decrease() {
    let calculator: Calculator = this.calculatorService.getCalculator();
    if(this.rangeValue > this.minValue) {
      this.rangeValue = Number(this.rangeValue) - Number(this.stepValue);
      calculator[this.dataType] = Number(this.rangeValue);
      this.calculatorService.updateCalculator(calculator);
    }


  }

  increase() {
    let calculator: Calculator = this.calculatorService.getCalculator();
    if(this.rangeValue < this.maxValue) {
      this.rangeValue = Number(this.rangeValue) + Number(this.stepValue);
      calculator[this.dataType] = Number(this.rangeValue);
      this.calculatorService.updateCalculator(calculator);
    }

  }

}
