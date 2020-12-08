//display current time 
var time = moment();

setInterval(function() {
  $("#currentDay").text(time.format("dddd MMMM Do"));

}, 1000);

// somehow keep the time running if possible 


//local storage and storing appointments
function saveAppointment(){
  var nineBtn = document.getElementById("textarea9").nodeValue;
  localStorage.setItem(nineBtn, "nineBtn");
  alert("Appointment saved");
  console.log(localStorage);
}









