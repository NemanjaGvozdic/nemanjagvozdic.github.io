var randomNum = Math.floor(Math.random() * 4000 + 3000);
setTimeout(hideLoader, randomNum);
setTimeout(saLogo, randomNum + 300);

var showBody = document.getElementById("body");
var loader = document.getElementById("loader");
var loaderLogo = document.getElementById("loader-logo");
var loadingCircle = document.getElementById("loading-circle");
var logoNoAnim = document.getElementById("sa-logo");
var welcomeText = document.getElementById("welcome-text");
var arrow = document.getElementById("arrow");

function hideLoader() {
  showBody.classList.add("show-scroll");
  loader.classList.add("hide-loader");
  loadingCircle.classList.remove("loading-circle");
}

function saLogo() {
  logoNoAnim.classList.add("sa-logo-active");

  setTimeout(saLogoGore, 1000);

  function saLogoGore() {
    logoNoAnim.classList.add("sa-logo-up");
    welcomeText.classList.add("welcome-text-active");
    arrow.classList.add("arrow-active");
  }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0 20px";
    document.getElementById("logo").style.width = "130px";
    document.getElementById("logo").style.margin = "5px 150px";
    document.getElementById("nav-last").style.margin = "25px 300px 0 20px";
    document.getElementById("navbar").style.boxShadow = "0px 0px 10px 1px #000"; 
  } else {
    document.getElementById("navbar").style.padding = "3px 20px";
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo").style.margin = "5px 50px";
    document.getElementById("nav-last").style.margin = "25px 150px 0 20px";
    document.getElementById("navbar").style.boxShadow = "0 0 0 transparent"; 
  }
} 