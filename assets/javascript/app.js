var baseURL = "https://api.petfinder.com/";
				var reqType = "pet.find?";
				var params = "animal=dog&location=Chicago, IL&count=2&output=basic&";
				var yourKey = "key=0164d1167e200069fe3eb9c06cc6f8b8&";
				var format = "format=json";
				var callback = "&callback=?";

				var fullURL = baseURL+reqType+params+yourKey+format+callback;
				$(document).ready(function(){
				  $(".animalInfo").text(fullURL);

				  $.ajax({
					dataType: "json",
					url: fullURL,
					success:(function(data){
					  var prettyData = JSON.stringify(data, null,'\t');
                      $(".dog").text(prettyData);
                      console.log(prettyData);

					})
				  });

				});

                // var baseURL1 = "https://api.petfinder.com/";
				// var reqType1 = "pet.find?";
				// var params1 = "animal=cat&location=Chicago, IL&count=2&output=basic&";
				// var yourKey1 = "key=0164d1167e200069fe3eb9c06cc6f8b8&";
				// var format1 = "format=json";
				// var callback1 = "&callback=?";
                // var pTag = $("<p>");
				// var fullURL1 = baseURL1+reqType1+params1+yourKey1+format1+callback1;
				// $(document).ready(function(){
				//   $(".cat").text(fullURL1);

				//   $.ajax({
				// 	dataType: "json",
				// 	url: fullURL,
				// 	success:(function(data){
				// 	  var prettyData = JSON.stringify(data, null,'\t');
                //       $(".cat").text(prettyData);
                //       console.log(prettyData);

				// 	})
				//   });

				// });
			