var petForm = document.querySelector('#petForm');

petForm.addEventListener('submit', fetchAnimals);

// fetch animals...
function fetchAnimals(event) {
	event.preventDefault();

	//get user input...

	var animal = document.querySelector('#animal').value;
	var zip = document.querySelector('#zip').value;

	//Start API sequence...

	var url = 'http://api.petfinder.com/pet.find';
	var apiKey = "0164d1167e200069fe3eb9c06cc6f8b8";

	// Within $.ajax{...} is where we fill out our query... 
	$.ajax({
		url: url,
		jsonp: "callback",
		dataType: "jsonp",
		data: {
			key: apiKey,
			animal: animal,
			'location': zip,
			count: 2,
			output: 'basic',
			format: 'json'
		},
		//response from JSONP...
		success: function (response) {
			showAnimals(response.petfinder.pets.pet);

			// show listing of pets....
			function showAnimals(pets) {
				var results = document.querySelector('#results');
				//clear first...
				results.innerHTML = '';

				pets.forEach((pet) => {
					console.log(pet);
					console.log(pet.name);
					console.log(pet.id);
					console.log(pet.shelterId);
					console.log(pet.description);
					console.log(pet.contact.phone);

					var newDiv = $("<div>");
					//document.querySelector('#results')

				});

			}
		},
	})
};
