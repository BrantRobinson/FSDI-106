const paragraph = document.getElementById("demo");
const button = document.getElementById("myBtn");
const resultDiv = document.getElementById("result");

console.log ("paragraph 1", paragraph);
console.log ("button 1", button);

// change the text of the paragraph

button.addEventListener("click", function(){
    resultDiv.innerText = "Button was clicked!";
    resultDiv.style.color = "blue";
    resultDiv.style.fontWeight = "bold";
    paragraph.innerText = "This is the new message";
});


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