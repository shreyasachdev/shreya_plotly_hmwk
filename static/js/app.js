d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    // Initialize an empty array for the country's data
    var selected_data = [];

    if (dataset == 'us') {
        selected_data = us;
    }
    else if (dataset == 'uk') {
        selected_data = uk;
    }
    else if (dataset == 'canada') {
        selected_data = canada;
    }
};
// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
function buildPlot(otu) {
    d3.json("samples.json").then(sampledata => {
        // console.log(sampledata);
        var data = sampledata;
        var samples = data.samples.map(d => d);
        // console.log(samples);

        // Use sample_values as the values for the bar chart.
        var values = samples.map(sample => sample.sample_values);
        // console.log(values);
        
        // Use `otu_ids` as the labels for the bar chart.
        var labels = samples.map(sample => sample.otu_ids);
        // console.log(labels);

        // Use otu_labels as the hovertext for the chart.
        var hovertext = samples.map(sample => sample.otu_labels);
        // console.log(hovertext);

        // Create the Trace
        var trace1 = {
        x: labels,
        y: values,
        type: "bar",
        orientation:"h"
        };
    
        // Create the data array for the plot
        var chartData = [trace1];

        var layout = {
            title: `${otu} Chart`,
            xaxis: {
              range: values,
            },
            yaxis: {
              autorange: true,
              type: "bar",
              margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
                }
            },        
        }
        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("bar-plot", chartData, layout);  
    });
  };

  // Add event listener for submit button
d3.select("#submit").on("click", handleSubmit)