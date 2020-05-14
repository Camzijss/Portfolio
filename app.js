$(document).ready(function() { 

        $("#main_page").css("display", "block");
        $("#work_page").css("display", "none");
        $("#about_page").css("display", "none");
        $("#contacts_page").css("display", "none");

        $(".work").click(function() {
            $("#main_page, #about_page, #contacts_page").hide();
            $("#work_page").show();
            $("#main-body").css("background-image", "url(resources/fons_darbi.jpg)");
        });

        $(".mani").click(function() {
            $("#main_page, #work_page, #contacts_page").hide();
            $("#about_page").show();
            $("#main-body").css("background-image", "url(resources/fons_mani.jpg)");
        });

        $(".home").click(function() {
            $("#about_page, #work_page, #contacts_page").hide();
            $("#main_page").show();
            $("#main-body").css("background-image", "url('resources/fons_start.png')");
        });

        $(".kont").click(function() {
            $("#main_page, #work_page, #about_page").hide();
            $("#contacts_page").show();
            $("#main-body").css("background-image", "url(resources/fons_kont.jpg)");
        });
});