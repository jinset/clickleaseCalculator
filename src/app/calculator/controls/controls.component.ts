import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {Calculator} from '../../shared/calculator.model';
import { CalculatorService  } from "../calculator.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit, OnDestroy {
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
