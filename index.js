var width = $(window).width();

var hasSlide1 = 0;
var hasSlide2 = 0;
var hasSlide3 = 0;
var counter = 0;


$(window).on('scroll', function(){
    let offset = window.pageYOffset * 2.5;
    let normOffset = window.pageYOffset * 0.85 - 60;
    let negativeOffset = ~offset + 1;

    var width = $(window).width();

    const title1 = $("#title div.row div.title-text h1:nth-child(1)");
    const title2 = $("#title div.row div.title-text h1:nth-child(4)");
    const title3 = $("#title div.row div.title-text h1:nth-child(5)");
    const aboutTitle = $("#about div.about-left p");

    var pos1 = title1.position();
    var pos2 = title2.position();
    var pos3 = title3.position();

    title1.css("transform", 'translateX(' + negativeOffset + 'px)');
    title2.css("transform", 'translateX(' + offset + 'px)');
    title3.css("transform", 'translateX(' + negativeOffset + 'px)');
    if(normOffset < 340) {
        aboutTitle.css("transform", 'translateY(' + normOffset + 'px)');
    } else {
        aboutTitle.css("transform", 'translateY(' + "340" + 'px)');
    }

    console.log(normOffset);
    // if(pos2.left > width) {
    //     title2.hide();
    // }
})

$(document).ready(function() {
    const pageBottom = $("#about");
    // pageBottom.hide();
    if(width < 950) {
        alert("This website hasn't been optimized for mobile yet! Some assets may appear out of place.");
        $("#title div.row h1:first").effect("blind");
    }

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
});


// function slide1() {
//     const title1 = $("#title div.row div.title-text h1:nth-child(1)");
//     $("#title div.row div.title-text h1:nth-child(1)").effect("drop", 700);
// }

// function slide2() {
//     const title2 = $("#title div.row div.title-text h1:nth-child(4)");
//     $("#title div.row div.title-text h1:nth-child(4)").effect("drop", {direction: 'right'}, 700);
// }

// function slide3() {
//     const title3 = $("#title div.row div.title-text h1:nth-child(5)");
//     $("#title div.row div.title-text h1:nth-child(5)").effect("drop", 700);
// }

// function showBottom() {
//     $("#about").show();
// }

// $(document).keypress(function(event) {
//     title1.effect("slide", 700);
// });

// $(document).click(function() {
//     title1.effect("drop", 700);
//     // title2.effect("drop", {direction: 'right'}, 600);
// });



