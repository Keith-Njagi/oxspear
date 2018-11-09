$(function(){
    
    // Navigation bar Drop-down
    $(".dropdown-main").click(function(){
        $(".dropdown-menu").slideToggle(500);
    });
    
    // Page footer
    var currentYear = (new Date).getFullYear();
    $("footer span").text((new Date).getFullYear());
        
    //Responsive Top Nav-bar Slide Toggle
    $(".nav-button-dark").click(function(){
        $(".navIndex-dark a").slideToggle(200);
    })

    //Responsive Top Nav-bar Slide Toggle
    $(".nav-button-light").click(function(){
        $(".navIndex-light a").slideToggle(200);
    })



});