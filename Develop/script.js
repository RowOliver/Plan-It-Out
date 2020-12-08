//display current time 
var time = moment();

setInterval(function() {
  $("#currentDay").text(time.format("dddd MMMM Do"));

}, 1000);

// somehow keep the time running if possible 


//local storage and storing appointments
function saveAppointmentNine() {
  var nineBtn = document.getElementById("hour-6").nodeValue;
  localStorage.setItem(nineBtn, "nineBtn");
  alert("Appointment saved");
  console.log(localStorage);

}

function saveAppointmentTen() {
  var tenBtn = document.getElementById("hour-10").nodeValue;
  localStorage.setItem(tenBtn, "tenBtn");
  alert("Appointment saved");
  console.log(localStorage);
}


function saveAppointmentEleven() {
  var elevenBtn = document.getElementById("hour-11").nodeValue;
  localStorage.setItem(elevenBtn, "elevenBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentT() {
  var oneBtn = document.getElementById("hour-12").nodeValue;
  localStorage.setItem(oneBtn, "oneBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentThirteen() {
  var oneBtn = document.getElementById("hour-1").nodeValue;
  localStorage.setItem(oneBtn, "oneBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentFourteen() {
  var twoBtn = document.getElementById("hour-2").nodeValue;
  localStorage.setItem(twoBtn, "twoBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentFifteen() {
  var threeBtn = document.getElementById("hour-3").nodeValue;
  localStorage.setItem(threeBtn, "threeBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentSixteen() {
  var fourBtn = document.getElementById("hour-4").nodeValue;
  localStorage.setItem(fourBtn, "fourBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentSeventeen() {
  var fiveBtn = document.getElementById("hour-5").nodeValue;
  localStorage.setItem(fiveBtn, "fiveBtn");
  alert("Appointment saved");
  console.log(localStorage);
}







