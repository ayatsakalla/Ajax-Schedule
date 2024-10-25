$(document).ready(function () {

    $('#submitDay').on('click', function () {
        $.ajax({
            url: `https://api.npoint.io/c865733db70b577f165c`,
            method: 'GET',
            success: function () {

                pageCounter++

            },
            error: function () {

            }
        });
    })

});