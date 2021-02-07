var currentDate = moment(). format("MM/DD/YYYY, h:mm:ss a");
$("#theDate").append(currentDate);
console.log(currentDate);
 
var timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

function updatetime() {
  var currentTime = moment().format('H');
  for(var i=0; i < timeArr.length; i++) {
    console.log(currentTime);

    if(parseInt(timeArr[i]) > currentTime){
      $("#" + timeArr[i]).attr("style", "background-color: lightblue");

      
    }
    else if (parseInt(timeArr[i]) < currentTime) {
      ("#" + timeArr[i]).attr("style", "background-color:lightpurple");


    }
    else if (parseInt(timeArr[i]) == currentTime) {
      $("#" + timeArr[i]).attr("style", "background-color: lightgreen");
    }
  }
 
};


