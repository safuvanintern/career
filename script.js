
// Get all the buttons that open the modal
const buttons = document.querySelectorAll(".container-btn");

// Get the form model
const form = document.getElementById('applyForm');

// Get the model
const popup = document.getElementById("applyPopup");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-btn")[0];

// Get the position input field
const positionField = document.getElementById("position");

// Attach event listeners to all buttons
buttons.forEach(button => {
    button.onclick = function () {
        // Set the position field value based on the button's data-position attribute
        positionField.value = button.getAttribute("data-position");

        // Show the popup
        popup.style.display = "flex";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    popup.style.display = "none";
    form.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
        form.reset();
    }
}
