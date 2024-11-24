/****************** YOUR NAME: [Theo] ******************/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will */
function recalculate() {
    // Create a variable to represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    
    // Calculate the new total cost based on modelName and duration
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    // Set the innerHTML of the calculated-cost element to the new value
    costLabel.innerHTML = totalCost.toFixed(2);
}

/****************** model button logic ******************/
/* 
- first, create a variable to represent the "Switch Model" pseudo-button
- second, create a function called changeModel() which checks the value of the modelName variable.
*/
let modelButton = document.getElementById("model-button");

function changeModel() {
    // Create a variable to represent the model-text span element
    let modelText = document.getElementById("model-text");

    // Check and toggle the value of modelName
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Attach the function to the pseudo-button
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/* 
- create a variable to represent the "Change Duration" pseudo-button.
- create a function called changeDuration() that updates the duration.
*/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    // Create a variable to represent the duration-text span element
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter a new duration:");

    // Save the result to the duration variable
    // Ensure the value is a number and greater than zero
    if (!isNaN(newDuration) && newDuration > 0) {
        duration = parseInt(newDuration, 10);

        // Update the innerHTML of the duration-text element
        durationText.innerHTML = duration;

        // Recalculate the total cost
        recalculate();
    } else {
        alert("Please enter a valid number greater than zero.");
    }
}

// Attach the function to the pseudo-button
durationButton.addEventListener("click", changeDuration);
