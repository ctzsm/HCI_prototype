WebFontConfig = {
    google: {
        families: ["Karla:400,400italic,700,700italic"]
    },
    custom: {
        families: ["SteelfishLtRegular"],
        urls: ["css/fonts.css"]
    }
};
(function() {
    var wf = document.createElement("script");
    wf.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1.4.2/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s)
})();
$(function() {
    $("#include_navBar").load("navbar.html");
});
