var currentDate = moment(). format("MM/DD/YYYY, h:mm:ss a");
$("#theDate").append(currentDate);
console.log(currentDate);

 
var timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]


function updatetime() {
  var currentTime = moment().format('h');
  for(var i=0; i < timeArr.length; i++) {
    console.log(currentTime);
    //the future
    if(parseInt(timeArr[i]) > currentTime){
      $("#" + timeArr[i]).attr("style", "background-color: lightblue");

      
    }//the past 
    else if (parseInt(timeArr[i]) < currentTime) {
      ("#" + timeArr[i]).attr("style", "background-color:lightpurple");


    }//the present 
    else if (parseInt(timeArr[i]) == currentTime) {
      $("#" + timeArr[i]).attr("style", "background-color: lightgreen");
    }
  }
 
}
  updatetime();

  $(".rowBtn").on("click", function(){
    var currentTime = $(this).parent().attr("id");
    var dayPlan = $(this).parent().find("input").val();
    localStorage.setItem(currentTime, dayPlan);

    console.log(dayPlan);
  });

  $("#time").each(function(){
    var currentTime = $(this).attr("input");
    var dayPlan = localStorage.getItem(currentTime);
    $(this).find("id").val(dayPlan);
  });




