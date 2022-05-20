$(document).ready(function(){

    $("#currentDay").text(moment().format("MM/DD/YYYY"));

    function hourTracker() {

        var currentHour = moment().hour();

        $(".time-block").each(function() {
            var blockHour=parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();

    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

       
        localStorage.setItem(time, text);
    })

})