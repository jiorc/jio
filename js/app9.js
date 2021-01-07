var myModal8 = document.getElementById("myModal8");

// Get the button that opens the modal
var btn8 = document.getElementById("myBtn8");

// Get the <span1> element that closes the modal
var span8 = document.getElementById("close8");

// When the user clicks the button, open the modal 
btn8.onclick = function () {
    myModal8.style.display = "block";
}

// When the user clicks on <span1> (x), close the modal
span8.onclick = function () {
    myModal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == myModal8) {
        modal8.style.display = "none";
        
        
    }
}