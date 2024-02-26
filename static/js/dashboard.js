 
//  CSV Visualizations

// Word Cloud for tweets
    // https://github.com/jasondavies/d3-cloud
    // 

    var d3 = require("d3"),
    cloud = require("../");

var layout = cloud()
    .size([500, 500])
    .words([
      "Hello", "world", "normally", "you", "want", "more", "words",
      "than", "this"].map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("body").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

// Bar graph of # of tweets by year
    // https://www.jqueryscript.net/chart-graph/animated-column-bar-chart.html

// Box with number of users
    //  ChatGPT
    //     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
// </head>
// <body>
//     <canvas id="singleValueChart" width="400" height="400"></canvas>
//     <script>

var value = 75;

        var ctx = document.getElementById('singleValueChart').getContext('2d');
        var singleValueChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Value'],
                datasets: [{
                    label: 'Single Value',
                    data: [value],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

// % of tweets that are positive
// <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.js"></script>
// <canvas id="myChart"></canvas>
    // https://stackoverflow.com/questions/48748638/how-to-create-single-value-doughnut-or-pie-chart-using-chart-js

    var value = 75;
    var data = {
      labels: [
        "My val",
        ""
      ],
      datasets: [
        {
          data: [value, 100-value],
          backgroundColor: [
            "#FF6384",
            "#AAAAAA"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#AAAAAA"
          ],
          hoverBorderColor: [
            "#FF6384",
            "#ffffff"
          ]
        }]
    };
    
    var myChart = new Chart(document.getElementById('myChart'), {
      type: 'doughnut',
      data: data,
      options: {
          responsive: true,
        legend: {
          display: false
        },
        cutoutPercentage: 80,
        tooltips: {
            filter: function(item, data) {
            var label = data.labels[item.index];
            if (label) return item;
          }
        }
      }
    });
    
    textCenter(value);
    
    function textCenter(val) {
      Chart.pluginService.register({
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
    
          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
    
          var text = val+"%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
    
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      });
    }

// User Input Field

// Sentiment Score/Label Output