import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component'
import { TotalAnnualComponent } from './total-annual/total-annual.component';
import { ChartInfoComponent } from './chart-info/chart-info.component';
import { ControlsComponent } from './controls/controls.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { ClickControlsComponent } from './click-controls/click-controls.component';
import { CommonModule } from '@angular/common'
import { NgApexchartsModule } from "ng-apexcharts";

import { RangeComponent} from '../components/range/range.component';

@NgModule({
  declarations: [CalculatorComponent, TotalAnnualComponent, ChartInfoComponent, ControlsComponent, RangeComponent, ClickControlsComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CalculatorRoutingModule,
    CommonModule,
    NgApexchartsModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CalculatorModule { }
