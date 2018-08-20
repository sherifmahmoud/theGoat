$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();

    console.log("hello");

    $("#submitBtn").on("click", function () {
        console.log("hello");
        var nameData = $("#nameInput").val().trim();
        var emailData = $("#emailInput").val().trim();
        var messageData = $("#messageInput").val().trim();
        console.log(nameData);

        var contact = {
            name: nameData,
            email: emailData,
            message: messageData
        }
        console.log("contact", contact);

        $("#nameInput").val(" ");
        $("#emailInput").val("");
        $("#messageInput").val("");

        // return false;
    });
});