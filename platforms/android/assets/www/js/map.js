// Google maps
document.addEventListener('deviceready', function () {
    
        var success = function(response) {
            // response.isGooglePlayServicesAvailable is a boolean value 
            response.isGooglePlayServicesAvailable;
			myApp.alert('facjfacj');
        } 
 
        var failure = function(response) {
            response.isGooglePlayServicesAvailable;
			myApp.alert('nooooo');
        }
 
        GooglePlayServicesCheck.check(success, failure);
    });

	
var div = document.getElementById("map");
var map = plugin.google.maps.Map.getMap(div, {
  'mapType': plugin.google.maps.MapTypeId.ROADMAP,
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
  'styles': [
    {
      featureType: "all",
      stylers: [
        { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ],
  'camera' : {
    target: {
      lat: 37.422375,
      lng: -122.084207
    },
    zoom: 10
  },
  'preferences': {
    'zoom': {
      'minZoom': 10,
      'maxZoom': 18
    },
    'building': false
  }
});
map.one(plugin.google.maps.event.MAP_READY, function() {
  console.log("--> realMap : ready.");
});