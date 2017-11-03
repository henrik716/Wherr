// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
	document.addEventListener('deviceready')
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

// Google maps
document.addEventListener('deviceready', function () {
    
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
  console.log("--> map : ready.");
});
    })

	
