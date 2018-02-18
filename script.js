$(document).ready(function() {

/* --------------- Variable Declarations --------------- */

  currentBox = "";
  playerTurn = 1;
  gameOver = false;

/* --------------- Function Declarations --------------- */

function checkWinPlayerOne() {
  if($("#top-left").children().html() === "X" && $("#top-mid").children().html() === "X" && $("#top-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }
}

  function checkTurn() {
    if(gameOver === false && $(currentBox).html() === "" && playerTurn === 1) {
      $(currentBox).append("<div class='box-styled'>" + "X" + "</div>");


      console.log($("#top-left").html());
      checkWinPlayerOne();

      playerTurn = 2;
    }
    else if(gameOver === false && $(currentBox).html() === "" && playerTurn === 2) {
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


  $("#center-left").on("click", function() {
    currentBox = $("#center-left");
    checkTurn();
  });

  $("#center-mid").on("click", function() {
    currentBox = $("#center-mid");
    checkTurn();
  });

  $("#center-right").on("click", function() {
    currentBox = $("#center-right");
    checkTurn();
  });


  $("#bottom-left").on("click", function() {
    currentBox = $("#bottom-left");
    checkTurn();
  });

  $("#bottom-mid").on("click", function() {
    currentBox = $("#bottom-mid");
    checkTurn();
  });

  $("#bottom-right").on("click", function() {
    currentBox = $("#bottom-right");
    checkTurn();
  });

});
