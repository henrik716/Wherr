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


    // Markercluster, men bugga seg etter jeg definerte markersa i annen fil
    map.on(plugin.google.maps.event.MAP_READY, function() {
        // Test for å se om funksjonen fungerer i det heletatt
        map.addMarker({
            "position": {
                "lat": "59.911491",
                "lng": "10.757933"
            }
        });

        //var map = this;

        //var label = document.getElementById("label");

        //------------------------------------------------------
        // Create a marker cluster.
        // Providing all locations at the creating is the best.
        //------------------------------------------------------
        map.addMarkerCluster({
            //debug: true,
            //maxZoomLevel: 5,
            markers: utesteder,
            icons: [{
                    min: 2,
                    max: 100,
                    url: "./img/blue.png",
                    anchor: {
                        x: 16,
                        y: 16
                    }
                },
                {
                    min: 100,
                    max: 1000,
                    url: "./img/purple.png",
                    anchor: {
                        x: 16,
                        y: 16
                    }
                },
                {
                    min: 1000,
                    max: 2000,
                    url: "./img/blue.png",
                    anchor: {
                        x: 24,
                        y: 24
                    }
                },
                {
                    min: 2000,
                    url: "./img/purple.png",
                    anchor: {
                        x: 32,
                        y: 32
                    }
                },
            ]
        });

        function dummyData() {
            return [{
                    "position": {
                        "lat": 59.1288558,
                        "lng": 10.2271811
                    },
                    "name": "Starbucks - HI - Aiea  03641"
                },
                {
                    "position": {
                        "lat": 59.1317198,
                        "lng": 10.2167628
                    },
                    "name": "Starbucks - HI - Aiea  03642"
                }
            ];
        };
    });
});