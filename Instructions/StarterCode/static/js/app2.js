
d3.json("samples.json").then(function(data){
    // Code from your callback goes here...
    console.log(data.metadata);
  });

  function optionChanged(sampleid){
    console.log(sampleid)
    demo(sampleid)
    buildCharts(sampleid)

}
  function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json("samples.json").then(function(data) {
        var snames = data.names;
        snames.forEach((name,index) => {
            dropdownMenu.append("option").text(name).property("value",index)
        });
      });
      demo(0)
      buildCharts(0)
  }
  init()

  
function demo(index) {
    var dropdownMenu = d3.select("#selDataset");
    d3.json("samples.json").then(function(data) {
        index=parseInt(index) 
      var meta = data.metadata[index];
        console.log(meta,index)
        console.log(meta.id)
       // index=parseInt(index)
        var demographics  = d3.select("#sample-metadata");
        demographics.html("")
        demographics.append("p").text(`id: ${meta.id}`)
        demographics.append("p").text(`ethnicity: ${meta.ethnicity}`) 
        demographics.append("p").text(`gender: ${meta.gender}`)
        demographics.append("p").text(`location: ${meta.location }`)
        demographics.append("p").text(`bbtype: ${meta.bbtype}`)
        demographics.append("p").text(`wfreq: ${meta.wfreq}`)
        
        //data.metadata.filter
        
      });
  }
  
 

// Call demo() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", demo);

//-------
// Create the buildCharts function.
function buildCharts(sampleid) {
  // Use d3.json to load and retrieve the samples.json file
  d3.json("samples.json").then((data) => {
    var Result= data.samples[sampleid];
   // var resultArray = samples.filter(sampleObj => sampleObj.id == sampleid);
   // var Result = resultArray[0];
    var otuID = Result.otu_ids;
    var otuLabel = Result.otu_labels;
    console.log(otuLabel);
    var sampleValue = Result.sample_values.map((value) => parseInt(value));
    var yticks = otuID.slice(0,10).map((id) => "OTU " + id).reverse();
    // Create the trace for the bar chart.
    var barData = {
      x: sampleValue.slice(0,10).reverse(),
      y: yticks,
      hoverinfo: otuLabel.slice(0,10).reverse(),
      type: "bar",
      orientation: "h",
      backgroundColor: "rgb(192, 189, 189)"
    };
    // Create the layout for the bar chart.
    var barLayout = {
      title: {
        text: "<b>Top 10 Bacteria Cultures Found</b>",
        y: 0.90
      },
      margin: {
        l: 100,
        r: 35,
        b: 50,
        t: 75,
        pad: 4
      },
    };

Plotly.newPlot("bar", [barData], barLayout);



// Create the trace for the bubble chart.
var bubbleData = {
    x: otuID,
    y: sampleValue,
    type: "bubble",
    text: otuLabel,
    hoverinfo: "x+y+text",
    mode: "markers",
    marker: {size: sampleValue, color: otuID, colorscale: "Earth"}
  };
  // Create the layout for the bubble chart.
  var bubbleLayout = {
    title: {
      text: "<b>Bacteria Cultures Per Sample</b>",
      y:0.95,
    },
    xaxis: {title: "OTU ID"},
    margin: {
      l: 75,
      r: 50,
      b: 60,
      t: 60,
      pad: 10
    },
    hovermode: "closest"
  };
  // Use Plotly to plot the data with the layout.
  Plotly.newPlot("bubble", [bubbleData], bubbleLayout);
  //-----------------------------------------------------------------------------------
  // Create a variable that holds the metadata array.
  var metadata = data.metadata;
 // var resultArray = metadata.filter(sampleObj => sampleObj.id == sampleid);
  //var Result = resultArray[0];
  var wFreq = parseFloat(Result.wfreq);
  var gaugeData = {
    type: "indicator",
    value: wFreq,
    mode: "gauge+number",
    gauge: {
      axis: {range: [0,10], dtick: 2},
      bar: {color: "black"},
      steps: [
        {range: [0,2], color: "purple"},
        {range: [2,4], color: "blue"},
        {range: [4,6], color: "green"},
        {range: [6,8], color: "yellow"},
        {range: [8,10], color: "orange"}
      ],
    }
  };
  // Create the layout for the gauge chart.
  var gaugeLayout = {
    title: {
      text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
      y: 0.75,
    },
    margin: {
      l: 50,
      r: 50,
      b: 0,
      t: 50,
      pad: 50
    },
  };
  // Use Plotly to plot the gauge data and layout.
  Plotly.newPlot("gauge", [gaugeData], gaugeLayout);
});
}
































