// Tutorial: https://developers.google.com/maps/documentation/javascript/tutorial

function initMap() {

  // Specify features and elements to define styles.
  var styleArray = 

	// Begin map styles. (Get more styles here: https://snazzymaps.com/)
	[
		 {
			  "featureType": "all",
			  "elementType": "geometry.fill",
			  "stylers": [
					{
						 "weight": "2.00"
					}
			  ]
		 },
		 {
			  "featureType": "all",
			  "elementType": "geometry.stroke",
			  "stylers": [
					{
						 "color": "#9c9c9c"
					}
			  ]
		 },
		 {
			  "featureType": "all",
			  "elementType": "labels.text",
			  "stylers": [
					{
						 "visibility": "on"
					}
			  ]
		 },
		 {
			  "featureType": "landscape",
			  "elementType": "all",
			  "stylers": [
					{
						 "color": "#f2f2f2"
					}
			  ]
		 },
		 {
			  "featureType": "landscape",
			  "elementType": "geometry.fill",
			  "stylers": [
					{
						 "color": "#ffffff"
					}
			  ]
		 },
		 {
			  "featureType": "landscape.man_made",
			  "elementType": "geometry.fill",
			  "stylers": [
					{
						 "color": "#ffffff"
					}
			  ]
		 },
		 {
			  "featureType": "poi",
			  "elementType": "all",
			  "stylers": [
					{
						 "visibility": "off"
					}
			  ]
		 },
		 {
			  "featureType": "road",
			  "elementType": "all",
			  "stylers": [
					{
						 "saturation": -100
					},
					{
						 "lightness": 45
					}
			  ]
		 },
		 {
			  "featureType": "road",
			  "elementType": "geometry.fill",
			  "stylers": [
					{
						 "color": "#eeeeee"
					}
			  ]
		 },
		 {
			  "featureType": "road",
			  "elementType": "labels.text.fill",
			  "stylers": [
					{
						 "color": "#7b7b7b"
					}
			  ]
		 },
		 {
			  "featureType": "road",
			  "elementType": "labels.text.stroke",
			  "stylers": [
					{
						 "color": "#ffffff"
					}
			  ]
		 },
		 {
			  "featureType": "road.highway",
			  "elementType": "all",
			  "stylers": [
					{
						 "visibility": "simplified"
					}
			  ]
		 },
		 {
			  "featureType": "road.arterial",
			  "elementType": "labels.icon",
			  "stylers": [
					{
						 "visibility": "off"
					}
			  ]
		 },
		 {
			  "featureType": "transit",
			  "elementType": "all",
			  "stylers": [
					{
						 "visibility": "off"
					}
			  ]
		 },
		 {
			  "featureType": "water",
			  "elementType": "all",
			  "stylers": [
					{
						 "color": "#46bcec"
					},
					{
						 "visibility": "on"
					}
			  ]
		 },
		 {
			  "featureType": "water",
			  "elementType": "geometry.fill",
			  "stylers": [
					{
						 "color": "#c8d7d4"
					}
			  ]
		 },
		 {
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
					{
						 "color": "#070707"
					}
			  ]
		 },
		 {
			  "featureType": "water",
			  "elementType": "labels.text.stroke",
			  "stylers": [
					{
						 "color": "#ffffff"
					}
			  ]
		 }
	]
	// End map style


	var myLatlng = new google.maps.LatLng(-37.817251, 144.955891); // Set coordinates.
	var mapOptions = {
		mapTypeControl: true,
		scrollwheel: false,
		styles: styleArray, // Apply the map style array to the map.
		zoom: 14,
		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById("tt-map"), mapOptions);

	// Marker image
	var iconBase = 'assets/img/';
	var marker = new google.maps.Marker({
		position: myLatlng,
		title:"Hello! We Are Here. :)",
		icon: iconBase + 'map-marker.png'
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);
	
}