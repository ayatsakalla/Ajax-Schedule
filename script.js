$.ajax({
    url: `https://api.npoint.io/c865733db70b577f165c`,
    method: 'GET',
    success: function () {

    },
    error: function () {

    }
});

// const letterDayPeriods = {
//     A: [1, 2, 3, "Lunch", 5, 6],
//     B: [4, 1, 2, "Lunch", 7, 5],
//     C: [3, 4, 1, "Lunch", 6, 6],
//     D: [2, 3, 4, "Lunch", 5, 6],
//     E: [1, 2, 3, "Lunch", 7, 5],
//     F: [4, 1, 2, "Lunch", 6, 7],
//     G: [3, 4, 7, "Lunch", 5, 6]
// };

$('.error').hide;

$('#submitDay').on('click', function () {
    const textBox = $('#dayInput');
    const letterDay = textBox.val().toUpperCase();
    console.log(letterDay);

    if (letterDay != ("A" || "B" || "C" || "D" || "E" || "F" || "G")) {
        letterDay == null;
        alert("Invalid letter day!");
        console.log("error");
    }
});
