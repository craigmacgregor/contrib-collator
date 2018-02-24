import { ViewChild, Component, ElementRef, Renderer2, OnInit } from '@angular/core';

import * as config from '../config.json';
import Chart from 'chart.js';

declare var Chart: any;

console.log(config);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('line') line: ElementRef;

    constructor(
    ) { }

    ngOnInit() {
        let ctx = this.line.nativeElement.getContext('2d');
        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                label: "My First dataset",
                backgroundColor: "#F00",
                borderColor: "#F00",
                data: [
                    10, 20, 50, 35, 5, 100, 80
                ],
                fill: false,
            }],
          },
          options: {
            responsive: true,
            title:{
              display:true,
              text:'Chart.js Line Chart'
            },
            tooltips: {
              mode: 'index',
              intersect: false,
            },
            hover: {
              mode: 'nearest',
              intersect: true
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            }
          }
        });


    }
}
