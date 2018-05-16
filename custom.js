$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {
   labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
   datasets: [
       {
           data: [300, 50, 100, 40, 120],
           backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
           hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
       }
   ]
},
options: {
   responsive: true
}
});



google.charts.load('current', {
  'packages': ['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

 function drawMarkersMap() {
 var data = google.visualization.arrayToDataTable([
   ['Country',   'Population', 'Area Percentage'],
   ['France',  65700000, 50],
   ['Germany', 81890000, 27],
   ['Poland',  38540000, 23]
 ]);

 var options = {
   sizeAxis: { minValue: 0, maxValue: 100 },
   region: '155', // Western Europe
   displayMode: 'markers',
   colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
 };

 var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
 chart.draw(data, options);
};


google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Year', 'Sales', 'Expenses', 'Profit'],
         ['2014', 1000, 400, 200],
         ['2015', 1170, 460, 250],
         ['2016', 660, 1120, 300],
         ['2017', 1030, 540, 350]
       ]);

       var options = {
         chart: {
           title: 'Company Performance',
           subtitle: 'Sales, Expenses, and Profit: 2014-2017',
         },
         bars: 'horizontal' // Required for Material Bar Charts.
       };

       var chart = new google.charts.Bar(document.getElementById('barchart_material'));

       chart.draw(data, google.charts.Bar.convertOptions(options));
     }
