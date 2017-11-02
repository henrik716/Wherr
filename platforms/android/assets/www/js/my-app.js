document.addEventListener('deviceready', function() {
	
	// Starter Google play (nødvendig for android)
    var success = function(response) {
        // response.isGooglePlayServicesAvailable is a boolean value
        response.isGooglePlayServicesAvailable;
    }

    var failure = function(response) {
        response.isGooglePlayServicesAvailable;
    }

    GooglePlayServicesCheck.check(success, failure);
	
	
	// Oppretting av kartet
    var div = document.getElementById("map_canvas");
    var map = plugin.google.maps.Map.getMap(div, {
        'mapType': plugin.google.maps.MapTypeId.HYBRID,
        'controls': {
            'compass': true,
            'myLocationButton': true,
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
	
	// Denne bruker location fra google api for å sette en markør der du er, kanskje ltt unødvendig om vi har enable get location (venstre hjørne i appen).
	// Men kan være aktuell om vi ikke bruker geolocation fra google lenger.
    var onSuccess = function(location) {
        var msg = ["Current your location:\n",
            "latitude:" + location.latLng.lat,
            "longitude:" + location.latLng.lng,
            "speed:" + location.speed,
            "time:" + location.time,
            "bearing:" + location.bearing
        ].join("\n");


        map.addMarker({
            'position': location.latLng,
            'title': msg
        }, function(marker) {
            marker.showInfoWindow();
            map.animateCamera({
                target: location.latLng,
                zoom: 16
            }, function() {
                marker.showInfoWindow();
            });
        });
    };

    var onError = function(msg) {
        alert(JSON.stringify(msg));
    };

    var button = div.getElementsByTagName('button')[0];
    button.addEventListener('click', function() {
        map.clear();
        map.getMyLocation(onSuccess, onError);
    });
});