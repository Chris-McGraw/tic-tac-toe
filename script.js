$(document).ready(function() {

/* --------------- Variable Declarations --------------- */

  playerTurn = 1;

/* --------------- Function Declarations --------------- */

  $("#top-left").on("click", function() {
    if(playerTurn === 1) {
      $(this).append("<div class='box-styled'>" + "X" + "</div>");

      playerTurn = 2;
    }
    else if(playerTurn === 2) {
      $(this).append("<div class='box-styled box-styled-player-2'>" + "O" + "</div>");

      playerTurn = 1;
    }
  });

  $("#top-mid").on("click", function() {
    if(playerTurn === 1) {
      $(this).append("<div class='box-styled'>" + "X" + "</div>");

      playerTurn = 2;
    }
    else if(playerTurn === 2) {
      $(this).append("<div class='box-styled box-styled-player-2'>" + "O" + "</div>");

      playerTurn = 1;
    }
  });

});
