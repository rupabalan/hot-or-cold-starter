
$(document).ready(function(){
	//global variable
	var counter=0;
	 $('#userGuess').val("");
  $('#count').text(counter);
  $('.guessBox').empty();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//function when new button is clicked
  $(".new").click(function(){
  	counter=0;

  $('#userGuess').val("");
  $('#count').text(counter);
  $('.guessBox').empty();
  $('#feedback').text("Make your Guess!");
    });
//new number

var computer_guess=generate_random_number();

//user feedback

$('html').on('click','#guessButton',function(event){
	event.preventDefault();
var user_guess= $('#userGuess').val();
  //increment guess counter
 counter++;
 //check user guess
 var r=check_user_guess(user_guess);

   if (r==1)
   {
   $('#count').text(counter);
   var html = '<li>' +user_guess+'</li>';
   $('#guessList').append(html);
  var result=compare_guess(user_guess,computer_guess);
   }
   else
   {
    alert("Please enter guess between 1 and 100");
   }
  });
});

function generate_random_number(){

	var x = 100; // can be any number
var rand = Math.floor(Math.random()*x) + 1;
return rand;
}

function compare_guess(u,c)
{
  var temp = Math.abs(u-c);
 

  if (temp>=50)
  {
    $('#feedback').text("Ice Cold");
  }
  else if (temp >=30 && temp<50)
  {
     $('#feedback').text("Cold");  
  }
  else if (temp >=20 && temp<30)
  {
    $('#feedback').text("Warm"); 
  }
  else if (temp >=10 && temp<20)
  {
      $('#feedback').text("Hot");
  }
  else if (temp >0 && temp <10)
  {
    $('#feedback').text("Very Hot"); 
  }
  else if (temp==0)
  {
      $('#feedback').text("Found match. Good Job");
  }
}

function check_user_guess(u)
{

 if (jQuery.isNumeric(u))
 {
   if (u<1 || u>100) 
   {
    return 0;
   }
   else
    {
      return 1;
    }
 }
 else
 {
  return 0;
}

}

