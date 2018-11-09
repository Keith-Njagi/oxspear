// Manual Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("myslides");

    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

// Automatic Slideshow
var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0; i < x.length; i++){
        x[i].style.display ="none";
    }
    slideIndex++;
    if (slideIndex > x.length){
        slideIndex =1
    }
    x[slideIndex-1].style.display="block";
    setTimeout(carousel, 5000);//Change image every 5 seconds
} 



//Scroll button
window.onscroll = function(){scrollFunction()};
//Show scroll button once window is scrolled
function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        document.getElementById("scroll01").style.display = "block";
        document.getElementByclass("site-scroll-button").style.display = "block";
    }else{
        document.getElementById("scroll01").style.display = "none";
        document.getElementByclass("site-scroll-button").style.display = "none";
        }
}
//The scroll function on click
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }