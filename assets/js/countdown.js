// Set the date we're counting down to
var countDownDate = new Date("Sep 28, 2018 20:00:00").getTime();

function tick(){
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(distance < 0){
    days = hours = minutes = seconds = 0;
  }

  // Display the result in the element with id="countdown-content"
  document.getElementById("dias").innerHTML = days;
  document.getElementById("horas").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("seg").innerHTML = seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-container").innerHTML = "¡Esto ha comenzado!";
  }
}

tick();
// Update the count down every 1 second
var x = setInterval(function() {
  tick();
}, 1000);