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

	//Start API sequence using JSONP...
	var url = 'http://api.petfinder.com/pet.find';
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
				var pEmail = $("<P>").text(pet.contact.email.$t);
				var email = pet.contact.email.$t;
				var pNumber = $('<p>').text(pet.contact.phone.$t);
				var number = pet.contact.phone.$t;
				var petId = pet.id.$t;
				var shelterId = $("<p>").text(pet.shelterId.$t);
				var divAction = $("<div>");
				var gender = pet.sex.$t;
				//Click Feature to redirect to the animals full profile
				var href = 'https://www.petfinder.com/search/pets-for-adoption/?id=' + petId;
				var anchor = $('<a>').attr('href', href);
				anchor.text("Click Here To See My Story!");
				var petProfile = "<a href='https://www.petfinder.com/search/pets-for-adoption/?id='";
				var lastHalf = ">Click Here For My Story!</a>";
				divRow.append(divCol);
				divCol.append(divCard);
				divCard.append(divCardImg);
				divCardImg.append(img).append(span);
				divCardImg.append(span);
				divCard.append(divContent);
				divContent.append("Pet Name: *" + animalName + "* ");
				//divContent.append(" Male or Female: " + "'" + gender + "'" + "* ");
				//divContent.append(" Shelter Email: " + email + "* ");

				divAction.addClass('card-action');
				divCard.append(divAction);
				divAction.append(anchor);
				//Append to the results div on HTML... 
				$("#results").append(divRow);
			});
				}});
			}//fetchAnimals