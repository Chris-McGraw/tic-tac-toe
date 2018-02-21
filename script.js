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

      $("#top-left").addClass("box-styled-win");
      $("#top-mid").addClass("box-styled-win");
      $("#top-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#center-left").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#center-right").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#center-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#bottom-left").children().html() === "X" && $("#bottom-mid").children().html() === "X" && $("#bottom-right").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#bottom-left").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- P1 Vertical Win Conditions ----- */
    else if($("#top-left").children().html() === "X" && $("#center-left").children().html() === "X" && $("#bottom-left").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#top-left").addClass("box-styled-win");
      $("#center-left").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-mid").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-mid").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#top-mid").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-right").children().html() === "X" && $("#center-right").children().html() === "X" && $("#bottom-right").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#top-right").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- P1 Diagonal Win Conditions ----- */
    else if($("#top-left").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-right").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#top-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-right").children().html() === "X" && $("#center-mid").children().html() === "X" && $("#bottom-left").children().html() === "X") {
      $("#info-container").append("<div>"+ "P1 WINS" +"</div>");

      $("#top-right").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- Draw Conditions ----- */
    else if($("#top-left").html() !== "" && $("#top-mid").html() !== "" && $("#top-right").html() !== "" && $("#center-left").html() !== "" &&
    $("#center-mid").html() !== "" && $("#center-right").html() !== "" &&
    $("#bottom-left").html() !== "" && $("#bottom-mid").html() !== "" && $("#bottom-right").html() !== "") {
      $("#info-container").append("<div>"+ "DRAW" +"</div>");

      gameOver = true;
    }
  }

  function checkWinPlayerTwo() {
  /* ----- P2 Horizontal Win Conditions ----- */
    if($("#top-left").children().html() === "O" && $("#top-mid").children().html() === "O" && $("#top-right").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-left").addClass("box-styled-win");
      $("#top-mid").addClass("box-styled-win");
      $("#top-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#center-left").children().html() === "O" && $("#center-mid").children().html() === "O" && $("#center-right").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#center-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#bottom-left").children().html() === "O" && $("#bottom-mid").children().html() === "O" && $("#bottom-right").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#bottom-left").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- P2 Vertical Win Conditions ----- */
    else if($("#top-left").children().html() === "O" && $("#center-left").children().html() === "O" && $("#bottom-left").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-left").addClass("box-styled-win");
      $("#center-left").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-mid").children().html() === "O" && $("#center-mid").children().html() === "O" && $("#bottom-mid").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-mid").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-right").children().html() === "O" && $("#center-right").children().html() === "O" && $("#bottom-right").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-right").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- P2 Diagonal Win Conditions ----- */
    else if($("#top-left").children().html() === "O" && $("#center-mid").children().html() === "O" && $("#bottom-right").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");

      gameOver = true;
    }

    else if($("#top-right").children().html() === "O" && $("#center-mid").children().html() === "O" && $("#bottom-left").children().html() === "O") {
      $("#info-container").append("<div>"+ "P2 WINS" +"</div>");

      $("#top-right").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");

      gameOver = true;
    }
  /* ----- Draw Conditions ----- */
    else if($("#top-left").html() !== "" && $("#top-mid").html() !== "" && $("#top-right").html() !== "" && $("#center-left").html() !== "" &&
    $("#center-mid").html() !== "" && $("#center-right").html() !== "" &&
    $("#bottom-left").html() !== "" && $("#bottom-mid").html() !== "" && $("#bottom-right").html() !== "") {
      $("#info-container").append("<div>"+ "DRAW" +"</div>");

      gameOver = true;
    }
  }

  function checkTurn() {
    if(gameOver === false && $(currentBox).html() === "" && playerTurn === 1) {
      $(currentBox).append("<div class='box-styled'>" + "X" + "</div>");

      checkWinPlayerOne();

      playerTurn = 2;
    }
    else if(gameOver === false && $(currentBox).html() === "" && playerTurn === 2) {
      $(currentBox).append("<div class='box-styled box-styled-player-2'>" + "O" + "</div>");

      checkWinPlayerTwo();

      playerTurn = 1;
    }
  }

/* --------------- Event Handlers --------------- */

  $("#multi-player").on("click", function() {
    $(".game-title").remove();
    $("#single-player").remove();
    $("#multi-player").remove();

    $("#game-overlay").append("<div class='symbol-choice-title'>Player One Choose</div>");
    $("#game-overlay").append("<div class='symbol-choice'>" + "<span>X</span> or " + "<span>O</span></div>"); 

    /* $("#game-overlay").toggleClass("hidden"); */
  });

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
