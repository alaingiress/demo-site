// when the user presses the submit button change the greeting to inclued their name // 

// get access to the buttom and set up a click event handler 
var button = document.getElementById("submite");
button. onclick = changeGreeting 

function changeGreeting(){
    var greeting = document.getElementsByName("h1")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML ="hello, " + input;
}