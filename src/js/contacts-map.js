
// google.maps.event.addDomListener(window, 'load', initMap);

	function initMap() {
	var kiev = {
		lat: 50.452228,
		lng: 30.522073
	};

	var myicon = '../img/map-marker.png';

	var mapContacts = new google.maps.Map(document.getElementById('contacts-map'), {
		center: kiev,
		zoom: 12
//		styles: [
//			{
//				"featureType": "water",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#e9e9e9"
//            },
//					{
//						"lightness": 17
//            }
//        ]
//    },
//			{
//				"featureType": "landscape",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#f5f5f5"
//            },
//					{
//						"lightness": 20
//            }
//        ]
//    },
//			{
//				"featureType": "road.highway",
//				"elementType": "geometry.fill",
//				"stylers": [
//					{
//						"color": "#ffffff"
//            },
//					{
//						"lightness": 17
//            }
//        ]
//    },
//			{
//				"featureType": "road.highway",
//				"elementType": "geometry.stroke",
//				"stylers": [
//					{
//						"color": "#ffffff"
//            },
//					{
//						"lightness": 29
//            },
//					{
//						"weight": 0.2
//            }
//        ]
//    },
//			{
//				"featureType": "road.arterial",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#ffffff"
//            },
//					{
//						"lightness": 18
//            }
//        ]
//    },
//			{
//				"featureType": "road.local",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#ffffff"
//            },
//					{
//						"lightness": 16
//            }
//        ]
//    },
//			{
//				"featureType": "poi",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#f5f5f5"
//            },
//					{
//						"lightness": 21
//            }
//        ]
//    },
//			{
//				"featureType": "poi.park",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#dedede"
//            },
//					{
//						"lightness": 21
//            }
//        ]
//    },
//			{
//				"elementType": "labels.text.stroke",
//				"stylers": [
//					{
//						"visibility": "on"
//            },
//					{
//						"color": "#ffffff"
//            },
//					{
//						"lightness": 16
//            }
//        ]
//    },
//			{
//				"elementType": "labels.text.fill",
//				"stylers": [
//					{
//						"saturation": 36
//            },
//					{
//						"color": "#333333"
//            },
//					{
//						"lightness": 40
//            }
//        ]
//    },
//			{
//				"elementType": "labels.icon",
//				"stylers": [
//					{
//						"visibility": "off"
//            }
//        ]
//    },
//			{
//				"featureType": "transit",
//				"elementType": "geometry",
//				"stylers": [
//					{
//						"color": "#f2f2f2"
//            },
//					{
//						"lightness": 19
//            }
//        ]
//    },
//			{
//				"featureType": "administrative",
//				"elementType": "geometry.fill",
//				"stylers": [
//					{
//						"color": "#fefefe"
//            },
//					{
//						"lightness": 20
//            }
//        ]
//    },
//			{
//				"featureType": "administrative",
//				"elementType": "geometry.stroke",
//				"stylers": [
//					{
//						"color": "#fefefe"
//            },
//					{
//						"lightness": 17
//            },
//					{
//						"weight": 1.2
//            }
//        ]
//    }
//]
	});
	var markers = locations.map(function (location, i) {
		return new google.maps.Marker({
			position: location,
			map: mapContacts,
			icon: myicon
		});
	});
	var markerCluster = new MarkerClusterer(mapContacts, markers, {
		imagePath: '../img/cluster'
	});
	// Смена города
	$('.contacts__select').on('change', function () {
		var city = $(this).val()
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
			'address': city
		}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				mapContacts.setCenter(results[0].geometry.location);
			} else {
				// something is wrong
			}
		});
	});
}
var locations = [
	{
		lat: 48.924104,
		lng: 24.711977
	},
	{
		lat: 48.926740,
		lng: 24.712009
		},
	{
		lat: 48.927988,
		lng: 24.715421
		},
	{
		lat: 50.452228,
		lng: 30.522073
	},
	{
		lat: 50.451921,
		lng: 30.524433
	}
	];
