//selecting one class among all
function allFunction() {
    location.replace("../blood group.html")
}
function tenFunction() {
    location.replace("10.html")
}
function nineFunction() {
    location.replace("09.html")
}
function eightFunction() {
    location.replace("08.html")
}
function sevenFunction() {
    location.replace("07.html")
}
function sixFunction() {
    location.replace("06.html")
}
function utenFunction() {
    location.replace("U10.html")
}
function unineFunction() {
    location.replace("U09.html")
}
function ueightFunction() {
    location.replace("U08.html")
}
function usevenFunction() {
    location.replace("U07.html")
}
function usixFunction() {
    location.replace("U06.html")
}
// When the user scrolls down #px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}