const $home = $(".home");
const $homeBtn = $("#homeBtn");

const $about = $(".about");
const $aboutBtn = $("#aboutBtn");

const $contact = $(".contact");
const $contactBtn = $("#contactBtn");


$about.hide();
$contact.hide();

$homeBtn.click(function(){
    $home.slideDown();
    $about.slideUp();
    $contact.slideUp();
    
    $homeBtn.addClass("btn-active");
    $aboutBtn.removeClass("btn-active");
    $contactBtn.removeClass("btn-active");
});

$aboutBtn.click(function(){
    $about.slideDown();
    $contact.slideUp();
    $home.slideUp();
    
    $aboutBtn.addClass("btn-active");
    $homeBtn.removeClass("btn-active");
    $contactBtn.removeClass("btn-active");
});

$contactBtn.click(function(){
    $contact.slideDown();
    $home.slideUp();
    $about.slideUp();
    
    $contactBtn.addClass("btn-active");
    $homeBtn.removeClass("btn-active");
    $aboutBtn.removeClass("btn-active");
});