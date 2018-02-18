$(document).ready(function() {

/* --------------- Variable Declarations --------------- */

  currentBox = "";
  playerTurn = 1;

/* --------------- Function Declarations --------------- */

  function checkTurn() {
    if($(currentBox).html() === "" && playerTurn === 1) {
      $(currentBox).append("<div class='box-styled'>" + "X" + "</div>");
      playerTurn = 2;
    }
    else if($(currentBox).html() === "" && playerTurn === 2) {
      $(currentBox).append("<div class='box-styled box-styled-player-2'>" + "O" + "</div>");
      playerTurn = 1;
    }
  }

/* --------------- Event Handlers --------------- */

  $("#top-left").on("click", function() {
    currentBox = $("#top-left");
    checkTurn();
  });

  $("#top-mid").on("click", function() {
    currentBox = $("#top-mid");
    checkTurn();
  });

  $("#top-right").on("click", function() {
    currentBox = $("#top-right");
    checkTurn();
  });

});
