$(document).ready(function() {

/* ------------------------- Variable Declarations ------------------------- */

  currentBox = "";
  playerOneSymbol = "";
  playerTwoSymbol = "";
  cpuSymbol = "";
  gameMode = "";
  playerTurn = 0;
  turnCount = 1;
  gameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  cpuScore = 0;

/* ------------------------- Function Declarations ------------------------- */

  function randomPlayerTurn() {
    var randomNum = Math.floor((Math.random() * 2));
    if(gameMode === "singlePlayer") {
      if(randomNum === 0) {
        playerTurn = 1;
      }
      else if(randomNum === 1) {
        playerTurn = "CPU";
      }
    }
    else if(gameMode === "multiPlayer") {
      if(randomNum === 0) {
        playerTurn = 1;
      }
      else if(randomNum === 1) {
        playerTurn = 2;
      }
    }
  }


  function advanceScreenToSymbolChoice() {
    $(".game-title").remove();
    $("#single-player").remove();
    $("#multi-player").remove();
    $("#game-overlay").append("<div class='symbol-choice-title'>Player One Choose</div>");
    $("#game-overlay").append("<div class='symbol-choice'>" +
    "<span id='symbol-X' class='symbol-accent'>X</span> or " +
    "<span id='symbol-O' class='symbol-accent'>O</span></div>");
    playerOneScore = 0;
    playerTwoScore = 0;
    cpuScore = 0;
    playerOneSymbol = "";
    playerTwoSymbol = "";
    cpuSymbol = "";

    turnCount = 1;
  }


  function advanceScreenToGameBoard() {
    $(".symbol-choice-title").remove();
    $(".symbol-choice").remove();
    $("#game-overlay").toggleClass("hidden");

    if(cpuSymbol === "X") {
      $("#info-container").append("<div id='player-1-title'>Player 1 - " +
      "<span id='player-title-symbol-O'>O</span> :</div>");
      $("#info-container").append("<div id='player-2-title'>CPU - " +
      "<span id='player-title-symbol-X'>X</span> :</div>");
    }
    else if(cpuSymbol === "O") {
      $("#info-container").append("<div id='player-1-title'>Player 1 - " +
      "<span id='player-title-symbol-X'>X</span> :</div>");
      $("#info-container").append("<div id='player-2-title'>CPU - " +
      "<span id='player-title-symbol-O'>O</span> :</div>");
    }
    else if(playerOneSymbol === "X") {
      $("#info-container").append("<div id='player-1-title'>Player 1 - " +
      "<span id='player-title-symbol-X'>X</span> :</div>");
      $("#info-container").append("<div id='player-2-title'>Player 2 - " +
      "<span id='player-title-symbol-O'>O</span> :</div>");
    }
    else if(playerTwoSymbol === "X") {
      $("#info-container").append("<div id='player-1-title'>Player 1 - " +
      "<span id='player-title-symbol-O'>O</span> :</div>");
      $("#info-container").append("<div id='player-2-title'>Player 2 - " +
      "<span id='player-title-symbol-X'>X</span> :</div>");
    }
    $("#info-container").append("<div id='player-1-score'>" +
    playerOneScore + "</div>");
    $("#info-container").append("<div id='player-2-score'>" +
    playerTwoScore + "</div>");

    randomPlayerTurn();
    setTimeout(function() {
      checkTurn();
    }, 200);

    if(playerTurn === "CPU") {
      setTimeout(function() {
        cpuGameLogic();
      }, 800);
    }
  }


  function advanceScreenToRematch() {
    gameOver = false;

    turnCount = 1;

    $(".player-win-title").remove();
    $("#play-again").remove();
    $("#quit").remove();
    $("#game-overlay").toggleClass("hidden");

    randomPlayerTurn();
    setTimeout(function() {
      checkTurn();
    }, 200);

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

    if(playerTurn === "CPU") {
      setTimeout(function() {
        cpuGameLogic();
      }, 800);
    }
  }


  function returnScreenToGameStart() {
    gameOver = false;
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

    $("#single-player").on("click", function() {
      gameMode = "singlePlayer";
      advanceScreenToSymbolChoice();
      $("#symbol-X").on("click", function() {
        playerOneSymbol = "X";
        cpuSymbol = "O";
        advanceScreenToGameBoard();
      });
      $("#symbol-O").on("click", function() {
        playerOneSymbol = "O";
        cpuSymbol = "X";
        advanceScreenToGameBoard();
      });
    });
    $("#multi-player").on("click", function() {
      gameMode = "multiPlayer";
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

    if(gameMode === "singlePlayer") {
      $("#game-overlay").append("<div class='player-win-title'>You Win</div>");
    }
    else if(gameMode === "multiPlayer") {
      $("#game-overlay").append("<div class='player-win-title'>Player One Wins</div>");
    }

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


  function cpuWin() {
    gameOver = true;
    cpuScore++;
    $("#player-2-score").html(cpuScore);

    $("#game-overlay").toggleClass("hidden");
    $("#game-overlay").append("<div class='player-win-title'>You Lose</div>");
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "X") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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
      else if(cpuSymbol === "O") {
        cpuWin();
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


  function markCpuBox(targetBox) {
    if(cpuSymbol === "X") {
      targetBox.append("<div class='box-styled'>X</div>");
    }
    else if(cpuSymbol === "O") {
      targetBox.append("<div class='box-styled box-styled-player-2'>O</div>");
    }
  }


  function markCpuBoxRandom() {
    var emptyBoxes = [];
    if($("#top-left").html() === "") {
      emptyBoxes.push($("#top-left"));
    }
    if($("#top-mid").html() === "") {
      emptyBoxes.push($("#top-mid"));
    }
    if($("#top-right").html() === "") {
      emptyBoxes.push($("#top-right"));
    }
    if($("#center-right").html() === "") {
      emptyBoxes.push($("#center-right"));
    }
    if($("#bottom-right").html() === "") {
      emptyBoxes.push($("#bottom-right"));
    }
    if($("#bottom-mid").html() === "") {
      emptyBoxes.push($("#bottom-mid"));
    }
    if($("#bottom-left").html() === "") {
      emptyBoxes.push($("#bottom-left"));
    }
    if($("#center-left").html() === "") {
      emptyBoxes.push($("#center-left"));
    }
    var randomNum = Math.floor((Math.random() * emptyBoxes.length));
    markCpuBox(emptyBoxes[randomNum]);
  }


  function markCpuBoxRandomCardinal() {
    var emptyBoxes = [];
    if($("#top-mid").html() === "") {
      emptyBoxes.push($("#top-mid"));
    }
    if($("#center-right").html() === "") {
      emptyBoxes.push($("#center-right"));
    }
    if($("#bottom-mid").html() === "") {
      emptyBoxes.push($("#bottom-mid"));
    }
    if($("#center-left").html() === "") {
      emptyBoxes.push($("#center-left"));
    }
    var randomNum = Math.floor((Math.random() * emptyBoxes.length));
    markCpuBox(emptyBoxes[randomNum]);
  }


  function markCpuBoxRandomCorner() {
    var emptyBoxes = [];
    if($("#top-left").html() === "") {
      emptyBoxes.push($("#top-left"));
    }
    if($("#top-right").html() === "") {
      emptyBoxes.push($("#top-right"));
    }
    if($("#bottom-right").html() === "") {
      emptyBoxes.push($("#bottom-right"));
    }
    if($("#bottom-left").html() === "") {
      emptyBoxes.push($("#bottom-left"));
    }
    var randomNum = Math.floor((Math.random() * emptyBoxes.length));
    markCpuBox(emptyBoxes[randomNum]);
  }


  function cpuOffense() {
    if($("#top-left").children().html() === cpuSymbol &&
    $("#top-mid").children().html() === cpuSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#top-left").children().html() === cpuSymbol &&
    $("#top-right").children().html() === cpuSymbol &&
    $("#top-mid").html() === "") {
      markCpuBox($("#top-mid"));
      return true;
    }
    else if($("#top-left").children().html() === cpuSymbol &&
    $("#center-left").children().html() === cpuSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#top-left").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#top-left").children().html() === cpuSymbol &&
    $("#bottom-right").children().html() === cpuSymbol &&
    $("#center-mid").html() === "") {
      markCpuBox($("#center-mid"));
      return true;
    }
    else if($("#top-mid").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#bottom-mid").html() === "") {
      markCpuBox($("#bottom-mid"));
      return true;
    }
    else if($("#top-right").children().html() === cpuSymbol &&
    $("#top-mid").children().html() === cpuSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#top-right").children().html() === cpuSymbol &&
    $("#center-right").children().html() === cpuSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#top-right").children().html() === cpuSymbol &&
    $("#bottom-right").children().html() === cpuSymbol &&
    $("#center-right").html() === "") {
      markCpuBox($("#center-right"));
      return true;
    }
    else if($("#top-right").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#top-right").children().html() === cpuSymbol &&
    $("#bottom-left").children().html() === cpuSymbol &&
    $("#center-mid").html() === "") {
      markCpuBox($("#center-mid"));
      return true;
    }
    else if($("#center-right").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#center-left").html() === "") {
      markCpuBox($("#center-left"));
      return true;
    }
    else if($("#bottom-right").children().html() === cpuSymbol &&
    $("#center-right").children().html() === cpuSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#bottom-right").children().html() === cpuSymbol &&
    $("#bottom-mid").children().html() === cpuSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#bottom-right").children().html() === cpuSymbol &&
    $("#bottom-left").children().html() === cpuSymbol &&
    $("#bottom-mid").html() === "") {
      markCpuBox($("#bottom-mid"));
      return true;
    }
    else if($("#bottom-right").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#bottom-mid").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#top-mid").html() === "") {
      markCpuBox($("#top-mid"));
      return true;
    }
    else if($("#bottom-left").children().html() === cpuSymbol &&
    $("#bottom-mid").children().html() === cpuSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#bottom-left").children().html() === cpuSymbol &&
    $("#center-left").children().html() === cpuSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#bottom-left").children().html() === cpuSymbol &&
    $("#top-left").children().html() === cpuSymbol &&
    $("#center-left").html() === "") {
      markCpuBox($("#center-left"));
      return true;
    }
    else if($("#bottom-left").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#center-left").children().html() === cpuSymbol &&
    $("#center-mid").children().html() === cpuSymbol &&
    $("#center-right").html() === "") {
      markCpuBox($("#center-right"));
      return true;
    }
    else {
      return false;
    }
  }


  function cpuDefense() {
    if($("#top-left").children().html() === playerOneSymbol &&
    $("#top-mid").children().html() === playerOneSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#top-left").children().html() === playerOneSymbol &&
    $("#top-right").children().html() === playerOneSymbol &&
    $("#top-mid").html() === "") {
      markCpuBox($("#top-mid"));
      return true;
    }
    else if($("#top-left").children().html() === playerOneSymbol &&
    $("#center-left").children().html() === playerOneSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#top-left").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#top-mid").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#bottom-mid").html() === "") {
      markCpuBox($("#bottom-mid"));
      return true;
    }
    else if($("#top-right").children().html() === playerOneSymbol &&
    $("#top-mid").children().html() === playerOneSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#top-right").children().html() === playerOneSymbol &&
    $("#center-right").children().html() === playerOneSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#top-right").children().html() === playerOneSymbol &&
    $("#bottom-right").children().html() === playerOneSymbol &&
    $("#center-right").html() === "") {
      markCpuBox($("#center-right"));
      return true;
    }
    else if($("#top-right").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#center-right").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#center-left").html() === "") {
      markCpuBox($("#center-left"));
      return true;
    }
    else if($("#bottom-right").children().html() === playerOneSymbol &&
    $("#center-right").children().html() === playerOneSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#bottom-right").children().html() === playerOneSymbol &&
    $("#bottom-mid").children().html() === playerOneSymbol &&
    $("#bottom-left").html() === "") {
      markCpuBox($("#bottom-left"));
      return true;
    }
    else if($("#bottom-right").children().html() === playerOneSymbol &&
    $("#bottom-left").children().html() === playerOneSymbol &&
    $("#bottom-mid").html() === "") {
      markCpuBox($("#bottom-mid"));
      return true;
    }
    else if($("#bottom-right").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#bottom-mid").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#top-mid").html() === "") {
      markCpuBox($("#top-mid"));
      return true;
    }
    else if($("#bottom-left").children().html() === playerOneSymbol &&
    $("#bottom-mid").children().html() === playerOneSymbol &&
    $("#bottom-right").html() === "") {
      markCpuBox($("#bottom-right"));
      return true;
    }
    else if($("#bottom-left").children().html() === playerOneSymbol &&
    $("#center-left").children().html() === playerOneSymbol &&
    $("#top-left").html() === "") {
      markCpuBox($("#top-left"));
      return true;
    }
    else if($("#bottom-left").children().html() === playerOneSymbol &&
    $("#top-left").children().html() === playerOneSymbol &&
    $("#center-left").html() === "") {
      markCpuBox($("#center-left"));
      return true;
    }
    else if($("#bottom-left").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#top-right").html() === "") {
      markCpuBox($("#top-right"));
      return true;
    }
    else if($("#center-left").children().html() === playerOneSymbol &&
    $("#center-mid").children().html() === playerOneSymbol &&
    $("#center-right").html() === "") {
      markCpuBox($("#center-right"));
      return true;
    }
    else {
      return false;
    }
  }


  function cpuGameLogic() {
    if(gameOver === false && playerTurn === "CPU") {

      console.log(turnCount);

  /* -------------------- Turn 1 -------------------- */
      if(turnCount === 1) {
        markCpuBoxRandomCorner();
      }

  /* -------------------- Turn 2  -------------------- */
      if(turnCount === 2) {
        if($("#center-mid").html() === "") {
          markCpuBox($("#center-mid"));
        }
        else if($("#center-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }
      }

  /* -------------------- Turn 3  -------------------- */
      if(turnCount === 3) {
        markCpuBoxRandomCorner();
      }

  /* -------------------- Turn 4 -------------------- */
      if(turnCount === 4) {
      /* ----- CPU Defense ----- */
        if(cpuDefense() === true) {
        }

        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#bottom-right").children().html() === playerOneSymbol ||
        $("#bottom-right").children().html() === playerOneSymbol &&
        $("#top-left").children().html() === playerOneSymbol) {
          markCpuBoxRandomCardinal();
        }

        else if($("#top-right").children().html() === playerOneSymbol &&
        $("#bottom-left").children().html() === playerOneSymbol ||
        $("#bottom-left").children().html() === playerOneSymbol &&
        $("#top-right").children().html() === playerOneSymbol) {
          markCpuBoxRandomCardinal();
        }

        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol) {
          if($("#top-right").html() === "") {
            markCpuBox($("#top-right"));
          }
        }

        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          if($("#bottom-left").html() === "") {
            markCpuBox($("#bottom-left"));
          }
        }

        else if($("#top-mid").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol ||
        $("#top-mid").children().html() === playerOneSymbol &&
        $("#bottom-right").children().html() === playerOneSymbol ) {
          if($("#top-right").html() === "") {
            markCpuBox($("#top-right"));
          }
        }

        else if($("#top-right").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          if($("#bottom-right").html() === "") {
            markCpuBox($("#bottom-right"));
          }
        }

        else if($("#top-right").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol) {
          if($("#top-left").html() === "") {
            markCpuBox($("#top-left"));
          }
        }

        else if($("#bottom-right").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol) {
          if($("#bottom-left").html() === "") {
            markCpuBox($("#bottom-left"));
          }
        }

        else if($("#top-mid").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol ||
        $("#top-mid").children().html() === playerOneSymbol &&
        $("#bottom-left").children().html() === playerOneSymbol ) {
          if($("#top-left").html() === "") {
            markCpuBox($("#top-left"));
          }
        }

        else if($("#bottom-left").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol) {
          if($("#bottom-right").html() === "") {
            markCpuBox($("#bottom-right"));
          }
        }

        else if($("#top-mid").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

        else if($("#center-right").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          if($("#bottom-right").html() === "") {
            markCpuBox($("#bottom-right"));
          }
        }

        else if($("#center-right").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

        else if($("#bottom-mid").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol) {
          if($("#bottom-left").html() === "") {
            markCpuBox($("#bottom-left"));
          }
        }

        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#center-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

        else if($("#top-right").children().html() === playerOneSymbol &&
        $("#center-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

        else if($("#bottom-right").children().html() === playerOneSymbol &&
        $("#center-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

        else if($("#bottom-left").children().html() === playerOneSymbol &&
        $("#center-mid").children().html() === playerOneSymbol) {
          markCpuBoxRandomCorner();
        }

      }

  /* -------------------- Turn 5 -------------------- */
      if(turnCount === 5) {
      /* ----- CPU Offense----- */
        if(cpuOffense() === true) {
        }

      /* ----- CPU Defense ----- */
        else if(cpuDefense() === true) {
        }

        else {
          markCpuBoxRandomCorner();
        }

      }

  /* -------------------- Turn 6 -------------------- */
      if(turnCount === 6) {
      /* ----- CPU Offense ----- */
        if(cpuOffense() === true) {
        }

      /* ----- CPU Defense ----- */
        else if(cpuDefense() === true) {
        }

      /* ----- CPU Force Tie Logic ----- */
        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#top-right").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          if($("#center-left").html() === "" &&
          $("#center-right").html() === "") {
            markCpuBoxRandomCardinal();
          }
        }

        else if($("#top-right").children().html() === playerOneSymbol &&
        $("#bottom-right").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol) {
          if($("#top-mid").html() === "" &&
          $("#bottom-mid").html() === "") {
            markCpuBoxRandomCardinal();
          }
        }

        else if($("#bottom-right").children().html() === playerOneSymbol &&
        $("#bottom-left").children().html() === playerOneSymbol &&
        $("#top-mid").children().html() === playerOneSymbol) {
          if($("#center-left").html() === "" &&
          $("#center-right").html() === "") {
            markCpuBoxRandomCardinal();
          }
        }

        else if($("#bottom-left").children().html() === playerOneSymbol &&
        $("#top-left").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol) {
          if($("#top-mid").html() === "" &&
          $("#bottom-mid").html() === "") {
            markCpuBoxRandomCardinal();
          }
        }

        else if($("#top-mid").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol &&
        $("#bottom-left").children().html() === playerOneSymbol) {
          if($("#top-left").html() === "" &&
          $("#bottom-right").html() === "") {
            markCpuBoxRandomCorner();
          }
        }

        else if($("#top-mid").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol &&
        $("#bottom-right").children().html() === playerOneSymbol) {
          if($("#top-right").html() === "" &&
          $("#bottom-left").html() === "") {
            markCpuBoxRandomCorner();
          }
        }

        else if($("#top-left").children().html() === playerOneSymbol &&
        $("#center-right").children().html() === playerOneSymbol &&
        $("#bottom-mid").children().html() === playerOneSymbol) {
          if($("#top-right").html() === "" &&
          $("#bottom-left").html() === "") {
            markCpuBoxRandomCorner();
          }
        }

        else if($("#bottom-mid").children().html() === playerOneSymbol &&
        $("#center-left").children().html() === playerOneSymbol &&
        $("#top-right").children().html() === playerOneSymbol) {
          if($("#top-left").html() === "" &&
          $("#bottom-right").html() === "") {
            markCpuBoxRandomCorner();
          }
        }

      }

  /* -------------------- Turn 7 -------------------- */
      if(turnCount === 7) {
      /* ----- CPU Offense----- */
        if(cpuOffense() === true) {
        }

      /* ----- CPU Defense ----- */
        else if(cpuDefense() === true) {
        }

        else {
          markCpuBoxRandomCorner();
        }

      }

  /* -------------------- Turn 8 -------------------- */
      if(turnCount === 8) {
      /* ----- CPU Offense----- */
        if(cpuOffense() === true) {
        }

      /* ----- CPU Defense ----- */
        else if(cpuDefense() === true) {
        }

      /* ----- CPU Force Tie Logic ----- */
        else {
          markCpuBoxRandom();
        }

      }

  /* -------------------- Turn 9 -------------------- */
      if(turnCount === 9) {
      /* ----- CPU Offense----- */
        if(cpuOffense() === true) {
        }

      /* ----- CPU Defense ----- */
        else if(cpuDefense() === true) {
        }

        else {
          markCpuBoxRandom();
        }

      }

      checkWin();
      playerTurn = 1;
      turnCount++;
      checkTurn();
    }
  }


  function playerAction() {
    if(gameMode === "singlePlayer") {
      if(gameOver === false && $(currentBox).html() === "" && playerTurn === 1) {
        if(playerOneSymbol === "X") {
          $(currentBox).append("<div class='box-styled'>X</div>");
        }
        else if(playerOneSymbol === "O") {
          $(currentBox).append("<div class='box-styled box-styled-player-2'>O</div>");
        }

        checkWin();
        playerTurn = "CPU";
        turnCount++;

        setTimeout(function() {
          cpuGameLogic();
        }, 800);
      }
    }

    else if(gameMode === "multiPlayer") {
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
  }


  function checkTurn() {
    if(gameOver === false && playerTurn === 1) {
      $("#player-2-title").removeClass("active-player");
      $("#player-2-score").removeClass("active-player");
      $("#player-title-symbol-X").removeClass("symbol-X-color");
      $("#player-title-symbol-O").removeClass("symbol-O-color");

      $("#player-1-title").addClass("active-player");
      $("#player-1-score").addClass("active-player");
      if(playerOneSymbol === "X") {
        $("#player-title-symbol-X").addClass("symbol-X-color");
      }
      else if(playerOneSymbol === "O") {
        $("#player-title-symbol-O").addClass("symbol-O-color");
      }
    }
    else if(gameOver === false && playerTurn === 2) {
      $("#player-1-title").removeClass("active-player");
      $("#player-1-score").removeClass("active-player");
      $("#player-title-symbol-X").removeClass("symbol-X-color");
      $("#player-title-symbol-O").removeClass("symbol-O-color");

      $("#player-2-title").addClass("active-player");
      $("#player-2-score").addClass("active-player");
      if(playerTwoSymbol === "X") {
        $("#player-title-symbol-X").addClass("symbol-X-color");
      }
      else if(playerTwoSymbol === "O") {
        $("#player-title-symbol-O").addClass("symbol-O-color");
      }
    }
    else if(gameOver === false && playerTurn === "CPU") {
      $("#player-1-title").removeClass("active-player");
      $("#player-1-score").removeClass("active-player");
      $("#player-title-symbol-X").removeClass("symbol-X-color");
      $("#player-title-symbol-O").removeClass("symbol-O-color");

      $("#player-2-title").addClass("active-player");
      $("#player-2-score").addClass("active-player");
      if(cpuSymbol === "X") {
        $("#player-title-symbol-X").addClass("symbol-X-color");
      }
      else if(cpuSymbol === "O") {
        $("#player-title-symbol-O").addClass("symbol-O-color");
      }
    }
  }

/* ------------------------ Overlay Event Handlers ------------------------ */

  $("#single-player").on("click", function() {
    gameMode = "singlePlayer";
    advanceScreenToSymbolChoice();
    $("#symbol-X").on("click", function() {
      playerOneSymbol = "X";
      cpuSymbol = "O";
      advanceScreenToGameBoard();
    });
    $("#symbol-O").on("click", function() {
      playerOneSymbol = "O";
      cpuSymbol = "X";
      advanceScreenToGameBoard();
    });
  });
  $("#multi-player").on("click", function() {
    gameMode = "multiPlayer";
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
