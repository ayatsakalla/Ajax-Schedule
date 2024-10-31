$('#submitDay').on("click", function () {
    let selectedDay = $("#dayInput").val().trim().toUpperCase();

    if (!["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)) {
        alert("Invalid Letter Day");
        return;
    } else {
        $.ajax({
            url: "https://api.npoint.io/599c64f17cb3497dd77b",
            method: "GET",
            success: function (data) {
                const schedule = data.schedule;

                const letterDaySchedule = schedule.filter((obj) =>
                    obj.days.includes(selectedDay)
                );
                renderHTML(letterDaySchedule);
            },
        });
    }
});


function renderHTML(daySchedule) {
    $("#scheduleList").empty();
    let htmlTable = "";
    daySchedule.forEach(function (classArray) {
        htmlTable += `
                    <tr>
                    <td>${classArray.period}</td>
                    <td>${classArray.class}</td>
                    <td>${classArray.teacher}</td>
                    <td>${classArray.room}</td>
                   </tr> `;
    });

    $("#scheduleList").append(htmlTable);
}
