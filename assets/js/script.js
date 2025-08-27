$(document).ready(function () {
    "use strict";

    $('.login-box-list .login-box .login-box-header').on('click', function () {
        $(this).parent('.login-box').toggleClass('show').siblings().toggleClass('hide');
    });
    
    /*-----MAIN SIDEBAR JS----*/
    var sidebarClass = true;
    $('.show-hide-btn').on('click', function () {
        $('.sidebar-sec').toggleClass('sidebar-hide');
        $(this).toggleClass('rotate');
    });
    /*-----MAIN SIDEBAR JS----*/
    

    // Modal Open Close Start
    $('.openModal').click(function () {
        $('.modal-overlay').show();
        setTimeout(function () {
            $('.modalContainer').fadeIn(); // Fades in the modal after 3 seconds
        }, 150); // 3000 milliseconds = 1 seconds
    });

    $('.modalClose').click(function () {
        $('.modal-overlay').fadeOut();
        $('.modalContainer').fadeOut();
    });
    $('.modal-overlay').click(function () {
        $(this).fadeOut();
        $('.modalContainer').fadeOut();
    });
    // Modal Open Close End

    var banner_slider = $(".slider").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 2000,
        nav: false,
    });


    $('.fv-account-tabs .fv-account-tabs-list button').on('click', function (e) {
        var currentAttrValue = $(this).attr('data-target');
        // Show/Hide Tabs
        $('.fv-account-tab-body ' + currentAttrValue).fadeIn(400).siblings().hide();
        // Change/remove current tab to active
        $(this).parent('.fv-account-tab').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    

    $(".at-title").click(function () {
        $(this)
            .toggleClass("active")
            .next(".at-tab")
            .slideToggle()
            .parent()
            .siblings()
            .find(".at-tab")
            .slideUp()
            .prev()
            .removeClass("active");
    });

    $('.full-view-details-tabs .full-view-details-tab-list button').on('click', function (e) {
        var currentAttrValue = $(this).attr('data-target');
        // Show/Hide Tabs
        $('.full-view-details-body ' + currentAttrValue).fadeIn(400).siblings().hide();
        // Change/remove current tab to active
        $(this).parent('.full-view-details-tab').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    

});
