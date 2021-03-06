var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var crystalBtn = $('.crystalButton');

function startGame() {
	currentScore = 0;
	$('#scoreBox').text(currentScore);
	$('.alert').addClass('modal');
	$('#wins').text(winCounter);
	$('#losses').text(lossCounter);
	targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log("target score is", targetScore);
	$('#scoreTarget').text(targetScore);
	var buttonValues = [];
	for (var i = 0; i < 4; i++) {
		buttonValues.push(Math.floor(Math.random() * 12) + 1);
		console.log(buttonValues);
	}
	$('#button1').attr('value', buttonValues[0]);
	$('#button2').attr('value', buttonValues[1]);
	$('#button3').attr('value', buttonValues[2]);
	$('#button4').attr('value', buttonValues[3]);
}

startGame();

var playGame = function() {
	currentScore = currentScore + (Number($(this).attr('value')));
	$('#scoreBox').text(currentScore);
	if (currentScore === targetScore) {
		$('#scoreBox').text(currentScore)
		winCounter++;
		$('#wins').text(winCounter);
		$('.modal').removeClass('modal');
		$('#winloss').text('You livin in a Gangsta Paradise.');
	} else if (currentScore > targetScore) {
		$('#scoreBox').text(currentScore);
		lossCounter++;
		$('#losses').text(lossCounter);
		$('.modal').removeClass('modal');
		$('#winloss').text('Whoops! You hustled dem skreets too much.');
	}
}

$('.crystalButton').on('click', playGame);
$('.btn-success').on('click', startGame);

$(document).ready(function() {
	var obj = document.createElement("audio");
	obj.src = "assets/sounds/anuthaone.mp3";
	obj.volume = 0.75;
	obj.autoPlay = false;
	obj.preLoad = true;
	obj.controls = true;
  
	$(".btn-success").click(function() {
	  obj.play();
	  console.log('Playing...')
	});
  });