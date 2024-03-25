
$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        items: 1
    });

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive : {
            200: {
                items: 2
            },
            350: {
                items: 3
            },
            450: {
                items: 4
            },
            600: {
                items: 5
            },
            900 : {
                items: 6
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })


    // new phones owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive : {
             200: {
                items: 2
            },
            350: {
                items: 3
            },
            450: {
                items: 4
            },
            600: {
                items: 5
            },
            900 : {
                items: 6
            }
        }
    });

});

let countDate = new Date('mar 30, 2024 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);    