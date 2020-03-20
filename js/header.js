$(function() {
    $("#menu-sub").css("display", "none");
});

function showMenu() {
    if ($("#menu-sub").css("display") === "block") {
        $("#menu-sub").css("display", "none");
        var text = $("#menu-button").text();
        $("#menu-button").text(text.slice(3, text.length - 3));
    } else {
        $("#menu-sub").css("display", "block");
        var text = $("#menu-button").text();
        $("#menu-button").text("<< " + text + " >>");
    }
}