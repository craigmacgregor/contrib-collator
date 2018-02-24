(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports={
  "project": "NavCoin",
  "repositories": {
    "owner": "NavCoin",
    "repo": "navcoin-core",
    "stats": ["commit_activity"]
  }
}

},{}],2:[function(require,module,exports){
const config = require("./config.json");

$( document ).ready(function() {


  console.log(config);

  var url = "https://api.github.com/repos/NavCoin/navcoin-core/stats/commit_activity";
  $.get(url)
  .done(function( data ) {
    console.log( "Data Loaded: ", data );

    for(var i=0; i<data.length; i++) {
      console.log(data[i].total);
    }


  });

    // Your code here.


    var ctx = document.getElementById("myChart").getContext('2d');

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
});

},{"./config.json":1}]},{},[2]);
