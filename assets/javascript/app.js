/*function displayEvent() {

var apiURL = "https://api.meetup.com/find/topic_categories?photo-host=public&sig_id=261233219&sig=5429ec55637f83b08224374646e6a8845140dc4c";

$.ajax({
    url: apiURL,
    method: "GET"
}).then(function(response) {
    $("#___").text(JSON.stringify(response));
});
};*/

var HERE_API_ID = 'fVtzRsdecK4wdwxwvSmV';
var HERE_APP_CODE = 'MncMVESMhCKZzuCVGwOepw';
var PETFINDER_API_KEY = "0164d1167e200069fe3eb9c06cc6f8b8";
var PETFINDER_API_SECRET = "15251a8fce9d7bdbc19a23333b3ba191";

$(document).ready(function () {
    var lat = 0;
    var lng = 0;

    var here_platform = new H.service.Platform({
        'app_id': HERE_API_ID,
        'app_code': HERE_APP_CODE
    });
    // Obtain the default map types from the platform object:
    var defaultLayers = here_platform.createDefaultLayers();

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': '331 E Chicago Chicago, IL 60611 USA' }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
        }
        console.log(`Long.: ${lng} lat.:${lat}`);

        var map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: lat, lng: lng }
            });
    });
    // Instantiate (and display) a map object:



});