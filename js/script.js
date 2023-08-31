// vars

  var player = [];
  var computer = [];
  var playedCards = [];
  var cards = [];
  var $draw = $("#draw");
  var $player = $("#player");
  var $computer = $("#computer");
  var $playerNumber = $("#playerNumber");
  var $computerNumber = $("#computerNumber");
  var $playerSuit = $("#playerSuit");
  var $computerSuit = $("#computerSuit");
  var $winner = $("#winner");
  var $player1Count = $("#player1Count");
  var $player2Count = $("#player2Count");
  var $playerAnswer = $("#playerAnswer");
  var $submit = $("#submit");
  var number1;
  var number2;
  var suit1;
  var suit2;
  var numberImg1;
  var numberImg2;
  var audio = new Audio('./sounds/card.mp3');
  var correctSound = new Audio('./sounds/correct.mp3');
  var incorrectSound = new Audio('./sounds/incorrect.mp3')
  var compare = 0;
  var chosen = 0;
  var winner = 0;
  var integerChoice = 0;
  var addition = 0;
  var multiplication = 0;
  var subtraction = 0;
  var arithmetic = 0;

  // created cards

  var cards = [];

  for (i=1; i<14; i++){
    for (k=1; k<5; k++) {
      var j = [i,k];
      cards.push(j);
    }
  }

  //shuffled cards

  cards.shuffle = function(){
    var input = this;
    for (var i = cards.length-1; i>=0; i--) {
      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = cards[randomIndex][0];
      var itemAtSecond = cards[randomIndex][1];

      input[randomIndex][0] = input[i][0];
      input[randomIndex][1] = input[i][1];
      input[i][0] = itemAtIndex;
      input[i][1] = itemAtSecond;

    }
    return input;
  }


  cards.shuffle();

  // split cards amongst the players

  var half = cards.length/2;
  for (i=0; i<half; i++) {
    player.push(cards[i]);
  }

  cards.splice(0, half);

  // showed cards on screen

  computer = cards;

  $player1Count.html(player.length);
  $player2Count.html(computer.length);

  // endGame function

  function endGame(){
    if(player.length == 0){
      $winner.html("GAME OVER </br> Computer Wins </br> Player has no more cards to play.");
    }
    if(computer.length == 0){
      $winner.html("GAME OVER </br> Player Wins </br> Computer has no more cards to play.");
    }
    $winner.css("color", "red");
    $winner.css("font-weight", "bold");
    $("#end").css("font-weight", "bold");
    $playerNumber.html("");
    $computerNumber.html("");
    $draw.off();
  }

// is the draw button function.

  $draw.on('click', function(){
    if (arithmetic == 1) {
      $("#submit").css("display", "block");
      $("#playerAnswer").css("display", "block");
    }

    $('input').val(''); //This empties the input box.

    assign();

  })

  $submit.on('click', function(){
    playerAnswer = $playerAnswer.val().trim();
    submit();
  })

  // assign function

  function assign() {

    $player.css("border-color", "black");
    $computer.css("border-color", "black");

    if(player.length == 0 || computer.length == 0){
      endGame();
    }

    //$draw.on('click', function() {
    //  assign();
    //});

    //$draw.on('click', function() {
    //  assign();
    //})

    console.log("assign");
    $playerSuit.empty();
    $computerSuit.empty();

  $playerSuit.css("display", "block");
  $computerSuit.css("display", "block");

    number1=player[0][0];
    number2=computer[0][0];

    $playerNumber.html(number1);
    $computerNumber.html(number2);

    suit1 = player[0][1];
    suit2 = computer[0][1];

    audio.play();

    if (integerChoice == 1){
      console.log("integer choice");
      if (suit1 == 1){
        number1 = number1 - 2*(number1);
      }
      if (suit1 == 2){
        number1 = number1 - 2*(number1);
      }
      if (suit2 == 1){
        number2 = number2 - 2*(number2);
      }
      if (suit2 == 2){
        number2 = number2 - 2*(number2);
      }
    }

    if (suit1 == 1) {
      suit1 = "<img src='./images/hearts.png'/>";
    }
    if (suit1 == 2) {
      suit1 = "<img src='./images/diamonds.png'/>";
    }
    if (suit1 == 3)  {
      suit1 = "<img src='./images/clubs.png'/>";
    }
    if (suit1 == 4) {
      suit1 = "<img src='./images/spades.png'/>";
    }
    if (suit2 == 1) {
      suit2 = "<img src='./images/hearts.png'/>";
    }
    if (suit2 == 2) {
      suit2 = "<img src='./images/diamonds.png'/>";
    }
    if (suit2 == 3)  {
      suit2 = "<img src='./images/clubs.png'/>";
    }
    if (suit2 == 4) {
      suit2 = "<img src='./images/spades.png'/>";
    }

    if (number1<11){
      for (i=0; i<(Math.abs(number1)); i++) {
        $playerSuit.append(suit1);
      };
    } else {
      if (number1 == 11 || number1 == -11) {
        numberImg1 = "<img src='./images/jack.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);
      }
      if (number1 == 12 || number1 == -12) {
        numberImg1 = "<img src='./images/queen.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);
      }
      if (number1 == 13 || number1 == -13) {
        numberImg1 = "<img src='./images/king.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);


      }
    }

    if (number2<11){
      for (i=0; i<(Math.abs(number2)); i++) {
        $computerSuit.append(suit2);
      };
    } else {
      if (number2 == 11 || number2 == -11) {
        numberImg2 = "<img src='./images/jack.png'/>";
        $computerSuit.append(suit2);
        $computerNumber.html(numberImg2);
      }
      if (number2 == 12 || number2 == -12) {
        numberImg2 = "<img src='./images/queen.png'/>";
        $computerSuit.append(suit2);
        $computerNumber.html(numberImg2);
      }
      if (number2 == 13 || number2 == -13) {
        numberImg2 = "<img src='./images/king.png'/>";
        $computerSuit.append(suit2);
        $computerNumber.html(numberImg2);


      }
    }

  playedCards.push(player[0]);
  playedCards.push(computer[0]);
  console.log(playedCards.length, "how many played");

  audio.play();

  player.splice(0,1);
  computer.splice(0,1);
  $player1Count.html(player.length);
  $player2Count.html(computer.length);

  console.log("call greater");
  greater();
  }

//greater function

  function greater(){
  console.log("greater");
  console.log("in greater how many played ", playedCards.length)

  if (number1 === number2){
    console.log("war")
    war();
  }

  if (compare == 1) {
    console.log("compare")
    compareMath();
    return;
  }

  if (arithmetic == 1) {
    console.log("arithmetic")
    return;
  }


  if (number1 > number2) {
    console.log("player one wins");
    $winner.html("Player One Wins");
    $player.css("border-color", "red");
    for (i=0; i<playedCards.length; i++) {
      player.push(playedCards[i]);
    }
    $player1Count.html(player.length);
    playedCards = [];
  } else if (number2 > number1) {
    console.log("player two wins");
    $winner.html("Player Two Wins");
    $computer.css("border-color", "red");
    for (i=0; i<playedCards.length; i++) {
      computer.push(playedCards[i]);
    }
    $player2Count.html(computer.length);
    playedCards = [];
    }
  }


  function war(){
    $winner.html("This means war!");
    console.log("war");
    for (i=0; i<3; i++){
    playedCards.push(player[0]);
    playedCards.push(computer[0]);
    console.log(playedCards.length);
    player.splice(0,1);
    computer.splice(0,1);
    $player1Count.html(player.length);
    $player2Count.html(computer.length);

  }
    $playerSuit.css("display", "none");
    $computerSuit.css("display", "none");

      numberImg1 = "<img style='height:20rem;' src='./images/card.png'/>";
      $playerNumber.html(numberImg1);
      numberImg2 = "<img style='height:20rem;' src='./images/card.png'/>";
      $computerNumber.html(numberImg2);
        $draw.off('click');
        audio.play();

      window.setTimeout(function(){
        audio.play();
      }, 1000);
      window.setTimeout(function(){
        audio.play();
      }, 1800);
      window.setTimeout(function(){
        $draw.on('click', function(){
          assign();
        });
        console.log("call assign");
        assign();
        audio.play();
      }, 2600);


    }

    function submit() {
      console.log("run sumbit");
      if (addition == 1) {
        addMath();
      }

      if (subtraction == 1) {
        subtractMath();
      }

      if (multiplication == 1) {
        multiplyMath();
      }
      mathCheck();
    }

    function compareMath(){
      if (number1 > number2) {
        winner = 1;
      } else {
        winner = 2;

      }
    }


    function addMath() {
      answer = number1 + number2;
      if (playerAnswer == answer) {
        chosen = winner;
      } else {
        chosen = winner - 1;
      }
    }

    function subtractMath() {
      answer = number1 - number2;
      if (playerAnswer == answer) {
        chosen = winner;
      } else {
        chosen = winner - 1;
      }
    }

    function multiplyMath() {
      answer = number1 * number2;
      if (playerAnswer == answer) {
        chosen = winner;
      } else {
        chosen = winner - 1;
      }
    }





    function mathCheck(){
      console.log("run math check");
      if (chosen == winner){
        for (i=0; i<playedCards.length; i++) {
          player.push(playedCards[i]);
        }
        $winner.html("Player One Wins");
        $player.css("border-color", "red");
        correctSound.play();
        $player1Count.html(player.length);
        playedCards=[];
      } else if (chosen != winner) {
        for (i=0; i<playedCards.length; i++) {
          computer.push(playedCards[i]);
        }
        $winner.html("Player Two Wins");
        $computer.css("border-color", "red");
        incorrectSound.play();
        $player2Count.html(computer.length);
        playedCards=[];
      }
    }


//math buttons

    $("#mathOptions").on('click', function(){
      $(".hidden").css("display", "none");
      $("#options").css("display", "block");
      $("#cardDirections").css("display", "block");
    })

    $("#compare").on('click', function() {
      $("#options").css("display", "none");
      $("#integers").css("display", "block");
      $("#compareDirections").css("display", "block");
      $("#one").css("display", "block");
      $("#two").css("display", "block");
      compare = 1;
    })

    $("#arithmetic").on('click', function() {
      $("#options").css("display", "none");
      $("#math").css("display", "block");
      arithmetic = 1;
    })

    $("#math").on('click', function() {
      $("#math").css("display", "none");
      $("#integers").css("display", "block");
    })

    $("#no").on('click', function() {
      $("#integers").css("display", "none");
      $("#mathOptions").css("display", "none");
    })

    $("#yes").on('click', function() {
      console.log("yes clicked")
      $("#integers").css("display", "none");
      $("#integerDirections").css("display", "block");
      $("#mathOptions").css("display", "none");
      integerChoice = 1;
    })

  $("#add").on('click', function() {
    $("#addDirections").css("display", "block");
    addition = 1;
  })

  $("#multiply").on('click', function() {
    $("#multiplyDirections").css("display", "block");
    multiplication = 1;
  })

  $("#subtract").on('click', function() {
    $("#subtractDirections").css("display", "block");
    subtraction = 1;
  })

  $("#one").on('click', function() {
    chosen = 1;
    mathCheck();
  })

  $("#two").on('click', function() {
    chosen = 2;
    mathCheck();
  })

//playedCards = [];
//$player1Count.html(player.length);
//$player2Count.html(computer.length);
