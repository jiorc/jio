var myModal9 = document.getElementById("myModal9");

// Get the button that opens the modal
var btn9 = document.getElementById("myBtn9");

// Get the <span1> element that closes the modal
var span9 = document.getElementById("close9");

// When the user clicks the button, open the modal 
btn9.onclick = function () {
    myModal9.style.display = "block";
}

// When the user clicks on <span1> (x), close the modal
span9.onclick = function () {
    myModal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == myModal9) {
        modal9.style.display = "none";
        
        
    }
}

var myModal11 = document.getElementById("myModal11");
var btn11 = document.getElementById("myBtn11");
var span11 = document.getElementById("close11");
btn11.onclick = function () {
    myModal11.style.display = "block";
}
span11.onclick = function () {
    myModal11.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == myModal11) {
        modal11.style.display = "none";
        
        
    }
}