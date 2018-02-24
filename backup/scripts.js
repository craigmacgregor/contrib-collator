const config = require("./config.json");

$( document ).ready(function() {

  var fetchedData = {};

  getData();

  function getData() {

    for(var i = 0; i < config.repositories.length; i++) {
      var repository = config.repositories[i]
      var url = "https://api.github.com/repos/"+repository.owner+"/"+repository.repo+"/stats/commit_activity";
      $.get(url)
      .done(function( data ) {
        fetchedData[repository.owner][repository.repo] = data;
      });
    }
  }



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
