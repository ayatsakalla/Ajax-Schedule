const bellSchedule = {
    1: { start: '8:24 AM', end: '9:31 AM' },
    2: { start: '9:36 AM', end: '10:43 AM' },
    3: { start: '10:48 AM', end: '11:55 AM' },
    lunch: { start: '11:55 AM', end: '12:36 PM' },
    4: { start: '12:41 PM', end: '1:48 PM' },
    5: { start: '1:53 PM', end: '3:00 PM' }
};

const letterDayPeriods = {
    A: [1, 2, 3, "Lunch", 5, 6],
    B: [4, 1, 2, "Lunch", 7, 5],
    C: [3, 4, 1, "Lunch", 6, 6],
    D: [2, 3, 4, "Lunch", 5, 6],
    E: [1, 2, 3, "Lunch", 7, 5],
    F: [4, 1, 2, "Lunch", 6, 7],
    G: [3, 4, 7, "Lunch", 5, 6]
};


$('#submitDay').on('click', function () {
    $.ajax({
        url: `https://api.npoint.io/c865733db70b577f165c`,
        method: 'GET',
        success: function () {

            pageCounter++;

        },
        error: function () {

        }
    });
})