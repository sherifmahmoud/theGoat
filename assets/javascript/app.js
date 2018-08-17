


				$(document).ready(function(){
				  $("body").text(fullURL);
                 
                  var baseURL = "https://api.petfinder.com/";
                  var reqType = "breed.list?";
                  var params = "animal=smallfurry&";
                  var yourKey = "key=0164d1167e200069fe3eb9c06cc6f8b8&";
                  var format = "format=json";
                  var callback = "&callback=?";
                  var fullURL = baseURL+reqType+params+yourKey+format+callback;
                  
                  $.ajax({
					dataType: "json",
					url: fullURL,
					success:(function(data){
					  var prettyData = JSON.stringify(data, null,'\t');
                      $("body").text(prettyData);
                      console.log(prettyData);

					})
				  });

				});

			