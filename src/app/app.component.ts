import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { Options as rp } from '@angular-slider/ngx-slider';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: any = {};
  public exampleData!: Array<Select2OptionData>;
  public options!: Options;
  public doughnutChartLabels: string[] = ['Total Investment', 'Total Interest'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [50, 450] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit() {
    this.exampleData = [
      {
        id: 'Education',
        text: 'Education'
      },
      {
        id: 'Car',
        text: 'Car'
      },
      {
        id: 'House',
        text: 'House'
      },
      {
        id: 'Retirement',
        text: 'Retirement'
      }
    ];

    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '300'
    };

  }
  interestvalue: any = 70;
  principalvalue: any = 70;
  yearstvalue: any = 1;
  interestRate: any;
  yearCal: any;
  rateN: any;

  interestAmount: any;
  interest: rp = {
    floor: 1,
    ceil: 10
  };
  principal: rp = {
    floor: 1000,
    ceil: 100000
  };
  years: rp = {
    floor: 1,
    ceil: 10
  };

  onSubmit(): void {
    this.interestRate = (this.interestvalue / 100);
    this.yearCal = (12 * this.yearstvalue);
    this.rateN = ((1) + (this.interestRate / 12));
    this.interestAmount = ((this.principalvalue) * (1 + (this.interestRate / 12)) * (this.yearCal));
  }
}
