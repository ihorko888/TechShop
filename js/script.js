$('.devices-block-slider').slick({
    dots: false,
    infinite: true,
    speed: .1,
    fade: true,
    cssEase: 'linear'
});

$(document).ready(function() {
    let filter = $('.fa-align-right');
    let sidebar = $('.sidebar');
    let filterClose = $('.filter-close');

    filter.click(function() {
        sidebar.toggleClass('filter-link');
        filter.removeClass('fa-align-right');
        filterClose.toggleClass('d-block');
    });

    filterClose.click(function() {
        filter.toggleClass('fa-align-right');
        filterClose.removeClass('d-block');
        sidebar.removeClass('filter-link');
    });
});

// $(document).ready(function() {
//     let naviMenuBtn = $('.navi-block-menu-btn');
//     let naviMenu = $('.navi-block-menu');

//     naviMenu.click(function() {
//         naviMenu.toggleClass('d-block');
//     });
// });

