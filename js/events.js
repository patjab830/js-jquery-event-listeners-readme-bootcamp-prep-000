//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("input").on("keydown", function() {
    const key = parseInt(e.which || e.detail);
    if ( e.which === )
  })
}

$(document).ready(function(){

// call functions here

});
