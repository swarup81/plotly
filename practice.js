// Line chart
Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

//Bar chart
var trace = [{
    x: ["ricesambar", "roti", "chinese"],
    y: [10, 18, 5],
    type: "bar"
}];
var layout = {
    title: "food survey",
    xaxis: { title: "food" },
    yaxis: { title: "number of respondents" }
};
Plotly.newPlot("plotArea", trace, layout);

//other example of bar chart
var trace = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
        "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];

var data = trace

var layout = {
    title: "survey",
    xaxis: { title: "drinks" },
    yaxis: { title: "percentage" }
};

Plotly.newPlot("plotArea", data, layout);

// create pie chart
var trace = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
        "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
}];

var data = trace;

var layout = {
    title: "survey"
};
Plotly.newPlot("plotArea", data, layout);

//Basic line plot
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('plotArea', data);

//create scatter plots
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers'
  };
  
  var data = [ trace1, trace2, trace3 ];
  
  var layout = {
    title:'Line and Scatter Plot'
  };
  
  Plotly.newPlot('plotArea', data, layout);