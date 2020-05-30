// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
var data = d3.json("samples.json", function(sampledata) {
    console.log(sampledata)
});
// var values = data.sample_values
// var labels = data.otu_ids
// var hovertext = data.otu_labels
