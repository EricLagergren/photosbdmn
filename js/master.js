// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

/*global $:false */
var doc = document;
$(".mobile-nav").click(function() {
    $(".mobile-nav, .menu-bars, .bmenu").toggleClass("active");
});
$(doc).ready(function() {
    $("#note").click(function(e) {
        e.preventDefault();
        $("#note-body").slideToggle("slow");
    });
});
(function() {
    var e = $("div.pageTitle").attr("id");
    var t = $("div.pageAuthorTwitter").attr("id");
    var n = $("div.siteUrl").attr("id");
    var r = $("div.pageUrl").attr("id");
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $("a#twttr").attr("href", "twitter://post?message=" + e + "%20via%20" + "@" + t + "%20" + n + r);
        $("a#fb").attr("href", "fb://publish/profile/me?text=" + e + "%20" + n + r);
        $("a#gplus").attr("href", "gplus://share?url=" + n + r);
        $("a#twitter").attr("href", "twitter://user?screen_name=elagergren");
        $("a#facebook").attr("href", "fb://profile/eric.lagergren.9");
        $("a#instagram").attr("href", "instagram://user?username=ericscotttt");
        $("a#linkedin").attr("href", "linkedin://profile/280566463");
    }
})();
$(doc).ready(function() {
    $('a[href^="#"]').on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            n = $(t);
        $("html, body").stop().animate({
            scrollTop: n.offset().top
        }, 1200, "swing");
    });
});
$(doc).scroll(function() {
    var showHeight = $(this).scrollTop();
    if ($('.byline').length) {
        var winHeight = $(window).height(),
            viewHeight = $(window).scrollTop(),
            currentTop = $('.byline').offset().top,
            dist = (viewHeight - currentTop) + winHeight;
            
        if (dist < 0) {
            $('.bottom-social').fadeIn();
        } else {
            $('.bottom-social').fadeOut();
        }
    }

    if (showHeight > 253 && $(window).width() < 550) {
        $('.mobile-nav').fadeIn();
    } else {
        $('.mobile-nav').fadeOut();
    }


});
