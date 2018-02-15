Template.profile.onRendered(function(){

        // Options for Google map
        // More info see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions1 = {
            zoom: 14,
            center: new google.maps.LatLng(40.6700, -73.9400),
            // Style for Google Maps
            styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
        };

        // Get all html elements for map
        var mapElement1 = document.getElementById('map1');

        // Create the Google Map using elements
        var map1 = new google.maps.Map(mapElement1, mapOptions1);

    $("span.pie").peity("pie", {
        fill: ["#62cb31", "#edf0f5"]
    });

});