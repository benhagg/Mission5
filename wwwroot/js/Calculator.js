$(document).ready(function () { //code inside the function is executed only after the DOM
    $("#tutoringForm").submit(function (event) { // attaches an event listener to tutoringForm
        event.preventDefault(); // Prevent form from reloading the page

        let hours = parseFloat($("#hours").val()); //selects the HTML element with the ID hours 
        let rate = parseFloat($("#rate").val());

        // Validation: Ensure input is a positive number
        if (isNaN(hours) || hours < 0) {
            $("#error-message").text("Please enter a valid number of hours.");
            $("#total").val("");
            return;
        } else {
            $("#error-message").text(""); // Clear error message if valid
        }

        // Calculate total
        let totalCost = hours * rate;
        $("#total").val("$" + totalCost.toFixed(2));// sets the value in total to the cost round to 2
    });
});
