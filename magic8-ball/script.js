$ (document) .ready (function() {
	
	$("#answer").hide();

//magic 8-ball object with array
	var magic8ball = {};
	magic8ball.listofanswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes-Definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "yes", "Signs point to yes", "Reply hazy try again", "ask again later", "better not tell you now", "cannot predict now", "concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

	var askMeAnything = document.getElementById("questionButton");
  
//magic8ball choose random answer from array
  	magic8ball.question = function (askMeAnything)
    {
      $("#8ball") .effect("shake");
      $("#answer").fadeIn(4000);
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * magic8ball.listofanswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var randomAnswer = magic8ball.listofanswers[randomIndex];
      $("#answer") .text (randomAnswer);
      console.log(askMeAnything);
      console.log(randomAnswer);
	};


//magic8ball question function and input

	 $("#answer") .hide();
  var onClick = function ()
  {
    $("8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    setTimeout(
      function(){
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8ball.question(askMeAnything);
      }, 1000);
  };

  //get button to work
	$("#questionButton") .click (onClick);

});