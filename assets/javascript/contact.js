console.log("hello");

$("#submit").on("click", function () {
    var nameData = $("#name-input").val().trim();
    var emailData = $("#email-input").val().trim();
    var messageData = $("#message-input").val().trim();

    var contact = {
        name: nameData,
        email: emailData,
        message: messageData
    }
    console.log(nameData);
    console.log(emailData);
    console.log(messageData);



    $("#name-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");

    return false;
});

$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
});