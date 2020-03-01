$(document).ready(function() { 

    $("#main_page").css("display", "block");
    $("#work_page").css("display", "none");
    $("#about_page").css("display", "none");
    $("#contacts_page").css("display", "none");

    $(".navigācijas-poga").click(function() {
        var text = $(this).text();

        if (text === "PAR MANI"){
            $("#main_page").css("display", "none");
            $("#work_page").css("display", "none");
            $("#about_page").css("display", "block");
            $("#contacts_page").css("display", "none");
        }

        if (text === "MAIKLS MĀRIS TRĒGERS"){
            $("#main_page").css("display", "block");
            $("#work_page").css("display", "none");
            $("#about_page").css("display", "none");
            $("#contacts_page").css("display", "none");
        }

        if (text === "MANI DARBI"){
            $("#main_page").css("display", "none");
            $("#work_page").css("display", "block");
            $("#about_page").css("display", "none");
            $("#contacts_page").css("display", "none");
        }

        if (text === "KONTAKTI"){
            $("#main_page").css("display", "none");
            $("#work_page").css("display", "none");
            $("#about_page").css("display", "none");
            $("#contacts_page").css("display", "block");
        }


    });

});