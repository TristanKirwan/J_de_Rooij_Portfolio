function SendMail(){
    window.open('mailto:Tristankirwan@hotmail.com');
}
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className == "navbar"){
        x.className += " responsive"
    } else{
        x.className = "navbar";
    }
}
      // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("myBtn").style.display = "block";
} else {
  document.getElementById("myBtn").style.display = "none";
}
}


function topFunction() {
document.body.scrollTop = 0; 
document.documentElement.scrollTop = 0; 
}  

$(function(){
  $("#navbar-placeholder").load("navbar.html");
});