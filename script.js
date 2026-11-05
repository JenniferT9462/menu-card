console.log("Hello from script.js!");
// Get HTML Elements
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

// Declaring the handle submit function
function handleSubmit(event) {
    // Prevents the page reload after clicking the submit button
    event.preventDefault();
    // JSON.parse() converts JSON to an object - input.value captures the user input
    let menu = JSON.parse(input.value);
    // Use textContent to inject text into the count paragraph
    count.textContent = "We have " + menu.length + " items today.";
    menuText.textContent = "";
    for (let i = 0; i < menu.length; i++) {
        menuText.textContent =
          menuText.textContent + menu[i].name + " — $" + menu[i].price + "\n";
    }
}

// Attach an event listener to the form that listens for submit
form.addEventListener("submit", handleSubmit);

