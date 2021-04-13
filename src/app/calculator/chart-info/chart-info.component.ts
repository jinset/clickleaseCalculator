import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calculator } from 'src/app/shared/calculator.model';
import { CalculatorService } from '../calculator.service';

import { ApexDataLabels, ApexTooltip, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-chart-info',
  templateUrl: './chart-info.component.html',
  styleUrls: ['./chart-info.component.scss']
})
export class ChartInfoComponent implements OnInit, OnDestroy {
  @Input() clickLease: boolean = false;
  @ViewChild("chart") chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  charcustomer: number = 0;
  calculator: Calculator;

  private subscription: Subscription;

  constructor(private calculatorService: CalculatorService) {

    this.chartOptions = {
      chart: {
        width: 350,
        type: "pie",
      },
      colors: ['#AFABAB', '#38ADF0'],
      labels: ["Averange monthly app", "Customers funded"],
      tooltip: {enabled: false},
      responsive: [
        {
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

  }

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
