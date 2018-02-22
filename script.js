$(document).ready(function() {

/* ------------------------- Variable Declarations ------------------------- */

  currentBox = "";
  playerOneSymbol = "";
  playerTwoSymbol = "";
  playerTurn = 1;
  gameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;

/* ------------------------- Function Declarations ------------------------- */

  function advanceScreenToSymbolChoice() {
    $(".game-title").remove();
    $("#single-player").remove();
    $("#multi-player").remove();
    $("#game-overlay").append("<div class='symbol-choice-title'>Player One Choose</div>");
    $("#game-overlay").append("<div class='symbol-choice'>" +
    "<span id='symbol-X'>X</span> or " +
    "<span id='symbol-O'>O</span></div>");
    playerOneScore = 0;
    playerTwoScore = 0;
  }


  function advanceScreenToGameBoard() {
    $(".symbol-choice-title").remove();
    $(".symbol-choice").remove();
    $("#game-overlay").toggleClass("hidden");
    $("#info-container").append("<div id='player-1-title' class='active-player'>Player 1:</div>");
    $("#info-container").append("<div id='player-2-title'>Player 2:</div>");
    $("#info-container").append("<div id='player-1-score' class='active-player'>" +
    playerOneScore + "</div>");
    $("#info-container").append("<div id='player-2-score'>" +
    playerTwoScore + "</div>");
  }


  function advanceScreenToRematch() {
    gameOver = false;
    playerTurn = 1;
    $(".player-win-title").remove();
    $("#play-again").remove();
    $("#quit").remove();
    $("#game-overlay").toggleClass("hidden");
    $("#player-2-title").removeClass("active-player");
    $("#player-2-score").removeClass("active-player");
    $("#player-1-title").addClass("active-player");
    $("#player-1-score").addClass("active-player");
    $(".box-styled").remove();
    $(".box-styled-player-2").remove();
    $("#top-left").removeClass("box-styled-win");
    $("#top-mid").removeClass("box-styled-win");
    $("#top-right").removeClass("box-styled-win");
    $("#center-left").removeClass("box-styled-win");
    $("#center-mid").removeClass("box-styled-win");
    $("#center-right").removeClass("box-styled-win");
    $("#bottom-left").removeClass("box-styled-win");
    $("#bottom-mid").removeClass("box-styled-win");
    $("#bottom-right").removeClass("box-styled-win");
  }


  function returnScreenToGameStart() {
    gameOver = false;
    playerTurn = 1;
    $(".player-win-title").remove();
    $("#play-again").remove();
    $("#quit").remove();

    $("#player-1-title").remove();
    $("#player-1-score").remove();
    $("#player-2-title").remove();
    $("#player-2-score").remove();

    $(".box-styled").remove();
    $(".box-styled-player-2").remove();
    $("#top-left").removeClass("box-styled-win");
    $("#top-mid").removeClass("box-styled-win");
    $("#top-right").removeClass("box-styled-win");
    $("#center-left").removeClass("box-styled-win");
    $("#center-mid").removeClass("box-styled-win");
    $("#center-right").removeClass("box-styled-win");
    $("#bottom-left").removeClass("box-styled-win");
    $("#bottom-mid").removeClass("box-styled-win");
    $("#bottom-right").removeClass("box-styled-win");

    $("#game-overlay").append("<div class='game-title'>Tic -Tac -Toe</div>")
    $("#game-overlay").append("<div id='single-player' class='game-mode'>1 Player</div>")
    $("#game-overlay").append("<div id='multi-player' class='game-mode'>2 Player</div>");

    $("#multi-player").on("click", function() {
      advanceScreenToSymbolChoice();
      $("#symbol-X").on("click", function() {
        playerOneSymbol = "X";
        playerTwoSymbol = "O";
        advanceScreenToGameBoard();
      });
      $("#symbol-O").on("click", function() {
        playerOneSymbol = "O";
        playerTwoSymbol = "X";
        advanceScreenToGameBoard();
      });
    });
  }


  function playerOneWin() {
    gameOver = true;
    playerOneScore++;
    $("#player-1-score").html(playerOneScore);

    $("#game-overlay").toggleClass("hidden");
    $("#game-overlay").append("<div class='player-win-title'>Player One Wins</div>");
    $("#game-overlay").append("<div id='play-again' class='continue-options'>Play Again</div>");
    $("#game-overlay").append("<div id='quit' class='continue-options'>Quit</div>");

    $("#play-again").on("click", function() {
      advanceScreenToRematch();
    });
    $("#quit").on("click", function() {
      returnScreenToGameStart();
    });
  }


  function playerTwoWin() {
    gameOver = true;
    playerTwoScore++;
    $("#player-2-score").html(playerTwoScore);

    $("#game-overlay").toggleClass("hidden");
    $("#game-overlay").append("<div class='player-win-title'>Player Two Wins</div>");
    $("#game-overlay").append("<div id='play-again' class='continue-options'>Play Again</div>");
    $("#game-overlay").append("<div id='quit' class='continue-options'>Quit</div>");

    $("#play-again").on("click", function() {
      advanceScreenToRematch();
    });
    $("#quit").on("click", function() {
      returnScreenToGameStart();
    });
  }


  function playerDraw() {
    gameOver = true;

    $("#game-overlay").toggleClass("hidden");
    $("#game-overlay").append("<div class='player-win-title'>Draw</div>");
    $("#game-overlay").append("<div id='play-again' class='continue-options'>Play Again</div>");
    $("#game-overlay").append("<div id='quit' class='continue-options'>Quit</div>");

    $("#play-again").on("click", function() {
      advanceScreenToRematch();
    });
    $("#quit").on("click", function() {
      returnScreenToGameStart();
    });
  }


  function checkWin() {
  /* ----- X Symbol Horizontal Win Conditions ----- */
    if($("#top-left").children().html() === "X" &&
    $("#top-mid").children().html() === "X" &&
    $("#top-right").children().html() === "X") {
      $("#top-left").addClass("box-styled-win");
      $("#top-mid").addClass("box-styled-win");
      $("#top-right").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

    else if($("#center-left").children().html() === "X" &&
    $("#center-mid").children().html() === "X" &&
    $("#center-right").children().html() === "X") {
      $("#center-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

    else if($("#bottom-left").children().html() === "X" &&
    $("#bottom-mid").children().html() === "X" &&
    $("#bottom-right").children().html() === "X") {
      $("#bottom-left").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }
  /* ----- X Symbol Vertical Win Conditions ----- */
    else if($("#top-left").children().html() === "X" &&
    $("#center-left").children().html() === "X" &&
    $("#bottom-left").children().html() === "X") {
      $("#top-left").addClass("box-styled-win");
      $("#center-left").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

    else if($("#top-mid").children().html() === "X" &&
    $("#center-mid").children().html() === "X" &&
    $("#bottom-mid").children().html() === "X") {
      $("#top-mid").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

    else if($("#top-right").children().html() === "X" &&
    $("#center-right").children().html() === "X" &&
    $("#bottom-right").children().html() === "X") {
      $("#top-right").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }
  /* ----- X Symbol Diagonal Win Conditions ----- */
    else if($("#top-left").children().html() === "X" &&
    $("#center-mid").children().html() === "X" &&
    $("#bottom-right").children().html() === "X") {
      $("#top-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

    else if($("#top-right").children().html() === "X" &&
    $("#center-mid").children().html() === "X" &&
    $("#bottom-left").children().html() === "X") {
      $("#top-right").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");
      if(playerOneSymbol === "X") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "X") {
        playerTwoWin();
      }
    }

  /* ----- O Symbol Horizontal Win Conditions ----- */
    else if($("#top-left").children().html() === "O" &&
    $("#top-mid").children().html() === "O" &&
    $("#top-right").children().html() === "O") {
      $("#top-left").addClass("box-styled-win");
      $("#top-mid").addClass("box-styled-win");
      $("#top-right").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

    else if($("#center-left").children().html() === "O" &&
    $("#center-mid").children().html() === "O" &&
    $("#center-right").children().html() === "O") {
      $("#center-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

    else if($("#bottom-left").children().html() === "O" &&
    $("#bottom-mid").children().html() === "O" &&
    $("#bottom-right").children().html() === "O") {
      $("#bottom-left").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }
  /* ----- O Symbol Vertical Win Conditions ----- */
    else if($("#top-left").children().html() === "O" &&
    $("#center-left").children().html() === "O" &&
    $("#bottom-left").children().html() === "O") {
      $("#top-left").addClass("box-styled-win");
      $("#center-left").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

    else if($("#top-mid").children().html() === "O" &&
    $("#center-mid").children().html() === "O" &&
    $("#bottom-mid").children().html() === "O") {
      $("#top-mid").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-mid").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

    else if($("#top-right").children().html() === "O" &&
    $("#center-right").children().html() === "O" &&
    $("#bottom-right").children().html() === "O") {
      $("#top-right").addClass("box-styled-win");
      $("#center-right").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }
  /* ----- O Symbol Diagonal Win Conditions ----- */
    else if($("#top-left").children().html() === "O" &&
    $("#center-mid").children().html() === "O" &&
    $("#bottom-right").children().html() === "O") {
      $("#top-left").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-right").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

    else if($("#top-right").children().html() === "O" &&
    $("#center-mid").children().html() === "O" &&
    $("#bottom-left").children().html() === "O") {
      $("#top-right").addClass("box-styled-win");
      $("#center-mid").addClass("box-styled-win");
      $("#bottom-left").addClass("box-styled-win");
      if(playerOneSymbol === "O") {
        playerOneWin();
      }
      else if(playerTwoSymbol === "O") {
        playerTwoWin();
      }
    }

  /* ----- Player Draw Conditions ----- */
    else if($("#top-left").html() !== "" && $("#top-mid").html() !== "" &&
    $("#top-right").html() !== "" && $("#center-left").html() !== "" &&
    $("#center-mid").html() !== "" && $("#center-right").html() !== "" &&
    $("#bottom-left").html() !== "" && $("#bottom-mid").html() !== "" &&
    $("#bottom-right").html() !== "") {
      playerDraw();
    }
  }


  function playerAction() {
    if(gameOver === false && $(currentBox).html() === "" && playerTurn === 1) {
      if(playerOneSymbol === "X") {
        $(currentBox).append("<div class='box-styled'>X</div>");
      }
      else if(playerOneSymbol === "O") {
        $(currentBox).append("<div class='box-styled box-styled-player-2'>O</div>");
      }
      checkWin();
      playerTurn = 2;
    }
    else if(gameOver === false && $(currentBox).html() === "" && playerTurn === 2) {
      if(playerTwoSymbol === "X") {
        $(currentBox).append("<div class='box-styled'>X</div>");
      }
      else if(playerTwoSymbol === "O") {
        $(currentBox).append("<div class='box-styled box-styled-player-2'>O</div>");
      }
      checkWin();
      playerTurn = 1;
    }
  }


  function checkTurn() {
    if(gameOver === false && playerTurn === 1) {
      $("#player-2-title").removeClass("active-player");
      $("#player-2-score").removeClass("active-player");
      $("#player-1-title").addClass("active-player");
      $("#player-1-score").addClass("active-player");
    }
    else if(gameOver === false && playerTurn === 2) {
      $("#player-1-title").removeClass("active-player");
      $("#player-1-score").removeClass("active-player");
      $("#player-2-title").addClass("active-player");
      $("#player-2-score").addClass("active-player");
    }
  }

/* ------------------------ Overlay Event Handlers ------------------------ */

  $("#multi-player").on("click", function() {
    advanceScreenToSymbolChoice();
    $("#symbol-X").on("click", function() {
      playerOneSymbol = "X";
      playerTwoSymbol = "O";
      advanceScreenToGameBoard();
    });
    $("#symbol-O").on("click", function() {
      playerOneSymbol = "O";
      playerTwoSymbol = "X";
      advanceScreenToGameBoard();
    });
  });

/* ----------------------- Game Board Event Handlers ----------------------- */

  $("#top-left").on("click", function() {
    currentBox = $("#top-left");
    playerAction();
    checkTurn();
  });

  $("#top-mid").on("click", function() {
    currentBox = $("#top-mid");
    playerAction();
    checkTurn();
  });

  $("#top-right").on("click", function() {
    currentBox = $("#top-right");
    playerAction();
    checkTurn();
  });

  $("#center-left").on("click", function() {
    currentBox = $("#center-left");
    playerAction();
    checkTurn();
  });

  $("#center-mid").on("click", function() {
    currentBox = $("#center-mid");
    playerAction();
    checkTurn();
  });

  $("#center-right").on("click", function() {
    currentBox = $("#center-right");
    playerAction();
    checkTurn();
  });

  $("#bottom-left").on("click", function() {
    currentBox = $("#bottom-left");
    playerAction();
    checkTurn();
  });

  $("#bottom-mid").on("click", function() {
    currentBox = $("#bottom-mid");
    playerAction();
    checkTurn();
  });

  $("#bottom-right").on("click", function() {
    currentBox = $("#bottom-right");
    playerAction();
    checkTurn();
  });

});
