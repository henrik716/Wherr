document.addEventListener('deviceready', function() {

	var success = function(response) {
		// response.isGooglePlayServicesAvailable is a boolean value
		response.isGooglePlayServicesAvailable;
	}

	var failure = function(response) {
		response.isGooglePlayServicesAvailable;
	}

	GooglePlayServicesCheck.check(success, failure);

	var div = document.getElementById("map_canvas");
	var map = plugin.google.maps.Map.getMap(div, {
		'mapType': plugin.google.maps.MapTypeId.HYBRID,
		'controls': {
			'compass': true,
			'myLocationButton': false,
			'indoorPicker': true,
			'zoom': true
		},
		'gestures': {
			'scroll': true,
			'tilt': true,
			'rotate': true,
			'zoom': true
		},
		'styles': [{
			featureType: "all",
			stylers: [{
				saturation: 0
			}]
		}, {
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [{
					hue: "#00ffee"
				},
				{
					saturation: 50
				}
			]
		}, {
			featureType: "poi.business",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}],
		'camera': {
			target: {
				lat: 59.911491,
				lng: 10.757933
			},
			zoom: 10
		},
		'preferences': {
			'zoom': {
				'minZoom': 3,
				'maxZoom': 18
			},
			'building': false
		}
	});
	map.one(plugin.google.maps.event.MAP_READY, function() {
		console.log("--> map : ready.");
	});
});