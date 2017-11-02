/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
  //  onDeviceReady: function() {
   //     this.receivedEvent('deviceready');
   // },

    // Update DOM on a Received Event
  //  receivedEvent: function(id) {
    //    var parentElement = document.getElementById(id);
     //   var listeningElement = parentElement.querySelector('.listening');
     //   var receivedElement = parentElement.querySelector('.received');

      //  listeningElement.setAttribute('style', 'display:none;');
     //   receivedElement.setAttribute('style', 'display:block;');

     //   console.log('Received Event: ' + id);
   // }
};

app.initialize();

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
        'styles': [{
            featureType: "all",
            stylers: [{
                saturation: -80
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
});
