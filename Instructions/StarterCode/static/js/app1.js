
d3.json("samples.json").then(function(data){
    // Code from your callback goes here...
    console.log(data.metadata);
  });

//append("option");

//Selcect d3 dropdown

//var dropDown = d3.select("#dropdown_container")
  //    .append("select")
    //  .attr("class", "selection")
      //.attr("name", "country-list");
    //var options = dropDown.selectAll("option")
      //.data(data.metadata)
      //.enter()
   //   .append("option");
    //options.text(function(d) {
      //  return d.key;
      //})
     // .attr("value", function(d) {
       // return d.values;
     // });


      // Display the default plot
function init() {
    var data = [{
      values: 940,
      labels: labels,
      type: "bar"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("bar", data, layout);
  }

       // When the button is changed, run the updateChart function
    //d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
      //  var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        //update(selectedOption)



        // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  
  d3.json("samples.json").then(function(data){
    // Code from your callback goes here...
    console.log(data.samples);
    var data1=data.names;
    data1.forEach(function(sample){
     
    dropdownMenu.append("option").text(sample).property("value", sample)
    });
});
    

 





  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}


init();


//data =[[ "id", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"]]


// add the options to the button


//d3.select("#selectButton")
//.selectAll('myOptions')
 //  .data(allGroup)
//.enter()
//  .append('option')
//.text(function (d) { return d; }) // text showed in the menu
//.attr("value", function (d) { return d; }) // corresponding value returned by the button
 
 // Start code from Activity D3 select Student Day 3 activity 2
  // Use D3 to select the table body
//var tbody = d3.select("tbody");

// Use D3 to select the table
//var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
//table.attr("class", "table table-striped");

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch

//var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];
//data =[[ "id", "ethnicity", "gender", "age", "location", "bbtype", "wfreq"]]

// Iterate through each student/grade pair
//grades.forEach(([student, grade]) => {

  // Append one table row per student/grade
 // var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  //row.append("td").text(student);
  //row.append("td").text(grade);
// });

// End code from Day 3 Activity 2