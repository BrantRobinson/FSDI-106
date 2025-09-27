const resultDiv = document.getElementById("result");

console.log ("");




function hello() {
    console.log("Hello World");
    bye();
}

function bye() {
    console.log("Goodbye World");
    init();
}

function init() {
    console.log("Page Loaded");
}


window.onload = hello;
// init without the () means wait until the page loads to run the function

// status codes
// 100 - info
// 200 - successful
// 300 - redirect
// 400 - client error
// 500 - server error

//methods
//get - retrieve
//post - submit
//put - update all 
//patch - update a portion
//delete - remove