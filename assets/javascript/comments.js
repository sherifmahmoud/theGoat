var name;
var shelter;
var story;

var database = firebase.database();

// On click submit, pushes info to Firebase
$("#submit").on("click", function (event) {
    event.preventDefault();

    name = $("#name").val().trim();
    shelter = $("#shelter").val().trim();
    story = $("#story").val();

    database.ref().push({
        name: name,
        shelter: shelter,
        story: story,
    });


    $(".input-field").trigger("reset")
})

database.ref().on("child_added", function (snapshot) {
    var dbName = snapshot.val().name;
    var dbShelter = snapshot.val().shelter;
    var dbStory = snapshot.val().story;



    // Update table
    var newRow = $("<tr>");
    newRow.append($("<td>").text(dbName));
    newRow.append($("<td>").text(dbShelter));
    newRow.append($("<td>").text(dbStory));
    $("#tbody").append(newRow);

});

