// Update the code to iterate the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p, etc...)

/* <div id="boy-bands"></div>
<div id="vegetables"> </div> */

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  const currentBand = bandElement.innerHTML += "<li>" + bands[loopTracker] + "</li>";

  // Update the innerHTML value of the DOM element for bands

  // Get a reference to the current item in the vegetables array
  const currentVeggie = veggieElement.innerHTML += "<div>" + vegetables[loopTracker] + "</div>";

  // Update the innerHTML value of the DOM element for vegetables
}
