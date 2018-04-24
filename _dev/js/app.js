/* ----------------------------------------
   Public Vars
--------------------------------------- */


/* ----------------------------------------
   Init
--------------------------------------- */

function init() {

    $("#status").html("loaded.");
    $("#status").removeClass("not-loaded");
    $("#status").addClass("is-loaded");

}

$(document).ready(function(){

    init();

});
