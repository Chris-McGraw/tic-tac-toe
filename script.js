$(document).ready(function() {

/* --------------- Variable Declarations --------------- */

  currentBox = "";
  playerTurn = 1;
  gameOver = false;

/* --------------- Function Declarations --------------- */

function checkWinPlayerOne() {
/* ----- P1 Horizontal Win Conditions ----- */
  if($("#top-left").children().html() === "X" && $("#top-mid").children().html() === "X" && $("#top-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }

  else if($("#center-left").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#center-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }

  else if($("#bottom-left").children().html() === "X" && $("#bottom-mid").children().html() === "X" && $("#bottom-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }
/* ----- P1 Vertical Win Conditions ----- */
  else if($("#top-left").children().html() === "X" && $("#center-left").children().html() === "X" && $("#bottom-left").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }

  else if($("#top-mid").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-mid").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }

  else if($("#top-right").children().html() === "X" && $("#center-right").children().html() === "X" && $("#bottom-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }
/* ----- P1 Diagonal Win Conditions ----- */
  else if($("#top-left").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-right").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }

  else if($("#top-right").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-left").children().html() === "X") {
    $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

    gameOver = true;
  }
}

/* function checkWinPlayerTwo() {
  if($("#top-left").children().html() === "O" && $("#top-mid").children().html() === "O" && $("#top-right").children().html() === "O") {
    $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

    gameOver = true;
  }
} */

  function checkTurn() {
    if(gameOver === false && $(currentBox).html() === "" && playerTurn === 1) {
      $(currentBox).append("<div class='box-styled'>" + "X" + "</div>");

      checkWinPlayerOne();

      playerTurn = 2;
    }
    else if(gameOver === false && $(currentBox).html() === "" && playerTurn === 2) {
      $(currentBox).append("<div class='box-styled box-styled-player-2'>" + "O" + "</div>");

      /* checkWinPlayerTwo() */

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
