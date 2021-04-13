import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calculator } from 'src/app/shared/calculator.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-click-controls',
  templateUrl: './click-controls.component.html',
  styleUrls: ['./click-controls.component.scss']
})
export class ClickControlsComponent implements OnInit, OnDestroy {
  calculator:Calculator;
  private subscription: Subscription;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculator = this.calculatorService.getCalculator();
    this.subscription = this.calculatorService.calculatorChange.subscribe(
      (calculator: Calculator) => {
        this.calculator = calculator;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
