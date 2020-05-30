// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
var data = d3.json("samples.json", function(sampledata) {
    console.log(sampledata)
});
var values = data.sample_values
console.log(values)
// var labels = data.otu_ids
// console.log(labels)
// var hovertext = data.otu_labels
// console.log(hovertext)

