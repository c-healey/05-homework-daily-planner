$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        let textIn = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, textIn);
    });
    function handlehour() {
        //  get hour
        hour = moment().hours();

        $(".time-block").each(function () {
            let timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

            if (hour > timeBlockHour) {
                $(this).removeClass("present");
                $(this).addClass("past");
                $(this).removeClass("future");
            } else if (hour === timeBlockHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            } else {
                $(this).addClass("future");
            }
        })

    }
    handlehour();
    let interval = setInterval(handlehour, 15000);
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})