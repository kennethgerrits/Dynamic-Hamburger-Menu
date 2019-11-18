$(function () {
    $("#hamburgerClosed img, #hamburgerOpen img").click(toggleMenu);
});

function toggleMenu() {
    $("#hamburgerClosed").toggle();
    $("#hamburgerOpen").toggle();
    $("#menuItem").slideToggle(1000);
}