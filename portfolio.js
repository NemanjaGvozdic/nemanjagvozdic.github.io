//ANIMACIJA ZA HEADER
$("header h6").hide().slideDown(3000);
$("header h3").hide().delay(3000).fadeIn(1000);


//PRIKAZIVANJE OSTATKA STRANICE
$(".wrapper").hide();
$("footer").hide();
$("body").scroll(function(){
    $(".wrapper").show(1000);
    $("footer").show(1000);
    });



//SAKRIVANJE POSEBNIH DELOVA
const $tutBox = $(".tutorial-box").hide();
const $tutHead = $(".tutorial");
const $contentFlex = $(".content-flex").hide();
const $langBox = $(".languages-box").hide();
const $contBox = $(".contact-box").hide();
const $projBox = $(".projects-box").hide();


$(".tutorial-header").click(function(){
    if ( $tutBox.css('display') == 'none' ){
        $tutBox.slideDown(800);
        $tutHead.delay(4000).slideUp(800);
    }
});


$(".content-flex-header").click(function(){
    if ( $contentFlex.css('display') == 'none' ){
        $contentFlex.slideDown(800);
        
        $langBox.slideUp(800);
        $contBox.slideUp(800);
        $projBox.slideUp(800);
    }else{
        $contentFlex.slideUp(800);
    }
});


$(".languages-header").click(function(){
    if ( $langBox.css('display') == 'none' ){
        $langBox.slideDown(800);
        
        $contentFlex.slideUp(800);
        $contBox.slideUp(800);
        $projBox.slideUp(800);
    }else{
        $langBox.slideUp(800);
    }
});


$(".projects-header").click(function(){
    if ( $projBox.css('display') == 'none' ){
        $projBox.slideDown(800);
        
        $contentFlex.slideUp(800);
        $contBox.slideUp(800);
        $langBox.slideUp(800);
    }else{
        $projBox.slideUp(800);
    }
});

$(".contact-header").click(function(){
    if ( $contBox.css('display') == 'none' ){
        $contBox.slideDown(800);
        
        $contentFlex.slideUp(800);
        $langBox.slideUp(800);
        $projBox.slideUp(800);
    }else{
        $contBox.slideUp(800);
    }
});







//SAKRIVANJE POSEBNIH DELOVA NA PRELAZ MISA, IZBACENO
//const $contentFlex = $(".content-flex").hide();
//const $langBox = $(".languages-box").hide();
//const $contBox = $(".contact-box").hide();
//
//
//$(".content-flex-header").mouseover(function(){
//        $contentFlex.slideDown(800); 
//});
//$("nav").mouseleave(function(){
//        $contentFlex.slideUp(800); 
//});
//
//
//
//$(".languages-header").mouseover(function(){
//        $langBox.slideDown(800); 
//});
//$(".languages").mouseleave(function(){
//        $langBox.slideUp(800); 
//});
//
//
//
//$(".contact-header").mouseover(function(){
//        $contBox.slideDown(800); 
//});
//$(".contact").mouseleave(function(){
//        $contBox.slideUp(800); 
//});


