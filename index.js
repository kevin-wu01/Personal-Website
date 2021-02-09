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

    // console.log(normOffset);
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
        // $(".about-left").html("<p class='about-title' style='transform: translateY(340px);'>A</p><p class='about-title' style='transform: translateY(340px);'>b</p><p class='about-title' style='transform: translateY(340px);'>o</p><p class='about-title' style='transform: translateY(340px);'>u</p><p class='about-title' style='transform: translateY(340px);'>t</p><p class='about-title' style='transform: translateY(340px);'>.</p>")
        $(".about-left").html("<div class='about-title' style='line-height: 1.0;'><p>A</p><p>b</p><p>o</p><p>u</p><p>t</p><p>.</p></div>")
    }

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
});

$("#projects div.row div:nth-child(2) div.project-box").hover(function() {
    $(this).css({"background-image": "url(./images/nwhecks.png)", "background-size": "contain", "background-size": "cover"});
    // $(this).css('background-image', 'url(./images/nwhecks5.png)');

    // $(this).animate({backgroundColor: '#33303B'}, 'slow');
    $("#projects").animate({backgroundColor: '#33303B'}, 'fast');
    $("#projects div.row div:nth-child(1) div.project-box").animate({backgroundColor: '#878198'}, 'fast');
    $("#projects div.row div:nth-child(3) div.project-box").animate({backgroundColor: '#878198'}, 'fast');
    $("#projects div.row div:nth-child(4) div.project-box").animate({backgroundColor: '#878198'}, 'fast');
    $("#projects div.row div:nth-child(5) div.project-box").animate({backgroundColor: '#878198'}, 'fast');
    $("#projects div.row div:nth-child(6) div.project-box").animate({backgroundColor: '#878198'}, 'fast');
    $("#about div.about-div div.about-left").animate({backgroundColor: '#33303B'}, 'fast');
}, function() {
    $(this).css({"background-image": "none"});
    $("#projects div.row div:nth-child(1) div.project-box").animate({backgroundColor: '#FFB0A6'}, 'fast');
    $("#projects div.row div:nth-child(3) div.project-box").animate({backgroundColor: '#FFB0A6'}, 'fast');
    $("#projects div.row div:nth-child(4) div.project-box").animate({backgroundColor: '#FFB0A6'}, 'fast');
    $("#projects div.row div:nth-child(5) div.project-box").animate({backgroundColor: '#FFB0A6'}, 'fast');
    $("#projects div.row div:nth-child(6) div.project-box").animate({backgroundColor: '#FFB0A6'}, 'fast');
    $("#projects").animate({backgroundColor: '#FF9A8C'}, 'fast');
    $("#about div.about-div div.about-left").animate({backgroundColor: '#FF9A8C'}, 'fast');
})

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



