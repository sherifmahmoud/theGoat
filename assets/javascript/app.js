//define the form on pull from on HTML...
var petForm = document.querySelector('#petForm');
//Define the click function on the cat/dog photos...
$(".animalBtn").on('click', fetchAnimals);
// fetch animals...
function fetchAnimals(event) {
    //get user input...
    var animal = '';
    //if user clicks the cat img...
    if ($(this).attr('id') === "catBtn") {
        animal = "cat";
        //if user clicks the dog img... 
    } else {
        animal = "dog";
    }
    //console.log the click to make use working properly...
    console.log(animal);
    //target the zip code input
    var zip = $('#zipCode').val();

	if (!isValidZip(zip)) {
		alert('Please Enter a Valid Zip Code');
	return;
  	}

	//Validate the Zip code...
	function isValidZip (zip) {
		return /^\d{5}(-\d{4})?$/.test(zip);
	  };
	  
	  


    //Start API sequence using JSONP...
    var url = 'https://api.petfinder.com/pet.find';
    var apiKey = "0164d1167e200069fe3eb9c06cc6f8b8";
    // Within $.ajax{...} is where we fill out our query... 
    $.ajax({
        url: url,//baseurl for api...
        jsonp: "callback",//define callback...
        dataType: "jsonp",//request data in JSONP...
        data: {
            key: apiKey,//apiKey...
            animal: animal,//animal variable from click...
            'location': zip,//zip code from input...
            count: 20,//search return amount...
            output: 'basic',//argument to return basic animal profile...
            format: 'json'//define the output for JSON and not XML...
        },
        //response from JSONP...
        success: function (response) {
            $('#results').empty();
            var results = document.querySelector('#results');
            var pets = response.petfinder.pets.pet;
            //showAnimals(response);
            pets.forEach(function (pet) {
                console.log(response);
                //console log the objects returns
                console.log(pet);
                //Dynamic cards - adding classes/elements...
                var divRow = $("<div>");
                divRow.addClass('row');
                var divCol = $('<div>');
                divCol.addClass('col s12 m7');
                var divCard = $('<div>');
                divCard.addClass('card xlarge');
                var divCardImg = $('<div>');
                divCardImg.addClass('card-image');
                
				//Photo of the animals...
                var img = $("<img>");
                img.attr("src", pet.media.photos.photo[3].$t);
                img.attr("alt", "picture of animal");
                img.attr("width", 300);
                
				//Add animal name to Photo...
                var span = $("<span>").addClass('card-title');
                span.text(pet.name.$t);
                var divContent = $("<div>");
                divContent.addClass('card-content');
                
				//variables for pathways and constructing the dynamic cards from the for loop output...
                var animalName = pet.name.$t;
                var pDescript = $("<p>").text(pet.description.$t);
                var petId = pet.id.$t;
                var city = pet.contact.city.$t;
				var state = pet.contact.state.$t;
				var divAction = $("<div>");
                var statement = "Hello, I go by the name " + animalName + ", click the link to learn more!!!"
                var blank = "_blank";
				
				//Variables to be used in future iterations...
				//var pEmail = $("<P>").text(pet.contact.email.$t);
				//var email = pet.contact.email.$t;
				//var pNumber = $('<p>').text(pet.contact.phone.$t);
				//var number = pet.contact.phone.$t;
				//var shelterId = $("<p>").text(pet.shelterId.$t);
				//var gender = pet.sex.$t;


				//Click Feature to redirect to the animals full profile
                var href = 'https://www.petfinder.com/search/pets-for-adoption/?id=' + petId;
                var anchor = $('<a>').attr('href', href).attr('target', blank);
				var maphref = 'map.html';
				var mapAnchor = $('<a>').attr('href', maphref);
				
				//Build out the map feature with classes and attributes...
				mapAnchor.addClass("mapLink");
				mapAnchor.addClass('white-text');
				mapAnchor.attr('data-city', city);
				mapAnchor.attr('data-zip', zip);
				mapAnchor.attr('data-state', state);
				mapAnchor.text("Show Map");
                anchor.text("Click Here To See My Story!");
                divRow.append(divCol);
                divCol.append(divCard);
                divCard.append(divCardImg);
                divCardImg.append(img).append(span);
                divCardImg.append(span);
                divCard.append(divContent);
                divContent.append(statement);
                divAction.addClass('card-action cyan');
				divCard.append(divAction);
                divAction.append(anchor);
				divAction.append(mapAnchor);
				anchor.addClass('white-text');
				mapAnchor.attr('white-text');
                //Append to the results div on HTML... 
                $("#results").append(divRow);
            });
                }});
            }//fetchAnimals


$(document).on('click', '.mapLink', function(){
	var city = $(this).attr("data-city");
	var state = $(this).attr("data-state");
	var zip = $(this).attr("data-zip");

	localStorage.setItem("city", city);
	localStorage.setItem("zip", zip );
	localStorage.setItem("state", state);

	window.location.href = $(this).attr('href');

});