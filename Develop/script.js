
//current time using moment 
$(document).ready(function () {
  var currentDate = moment().format('MM/DD/YYYY');
  console.log(currentDate);

  $('#currentDate').text(currentDate);

})

// somehow keep the time running if possible 
// setInterval(currentTime, 60000);
  currentTime();

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
  onclick="saveAppointmentTen()";
  console.log(localStorage);
}


function saveAppointmentEleven() {
  var elevenBtn = document.getElementById("hour-11").nodeValue;
  localStorage.setItem(elevenBtn, "elevenBtn");
  alert("Appointment saved");
  console.log(localStorage);
}

function saveAppointmentTwelve() {
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

makeAppointment();

//Now get from local storage for reload 
//create var for each to get back what was stored 

function makeAppointment() {
  var nineBtn = localStorage.getItem("nineBtn");
  document.getElementById("hour-9").value = nineBtn;

  var tenBtn =localStorage.getItem("tenBtn");
  document.getElementById("hour-10").value = tenBtn;

  var elevenBtn = localStorage.getItem("elevenBtn");
  document.getElementById("hour-11").value = elevenBtn;

  var twelveBtn = localStorage.getItem("twelveBtn");
  document.getElementById("hour-12").value = twelveBtn;

  var oneBtn = localStorage.getItem("oneBtn");
  document.getElementById("hour-1").value = oneBtn;

  var twoBtn = localStorage.getItem("twoBtn");
  document.getElementById("hour-2").value = twoBtn;

  var threeBtn = localStorage.getItem("threeBtn");
  document.getElementById("hour-3").value = threeBtn;

  var fourBtn = localStorage.getItem("fourBtn");
  document.getElementById("hour-4").value = fourBtn;

  var fiveBtn = localStorage.getItem("fiveBtn");
  document.getElementById("hour-5").value = fiveBtn; 

  console.log(localStorage);
}

// loop for past/prestent/future time periods 

// var present = new Date().getHours();

for (i = 9; i < 6; i++) {
  if (present > i) {
    $("#textarea" + i).addClass("past");
    
  }
  else if (present === i) {
    $("#textarea" + i).addClass("present");

  }
  else if (present < i ){
    $("#textare" == i).addClass("future");
  }

}

console.log(present);





