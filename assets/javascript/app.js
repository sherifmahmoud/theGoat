function displayEvent() {

    var apiURL = "https://api.meetup.com/find/topic_categories?photo-host=public&sig_id=261233219&sig=5429ec55637f83b08224374646e6a8845140dc4c";

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {
        $("#___").text(JSON.stringify(response));
    });
};


$(document).ready(function () {
    $('.parallax').parallax();
});