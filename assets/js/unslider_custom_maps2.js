$(document).ready(function($) {
  var marker;
  var map2markers =[];
  var obj2 = {};
  obj2.goldenGateBridgeWalkingRoute = '<li class="goldenGateli0" data-lat="37.802094" data-lng="-122.443079" data-icon="null"><strong>Bridge Route: </strong>Walk from our home to Marina Blvd and head West. The whole route is <bold class="insertMiles"></bold> miles</li><li class="goldenGateli1" data-lat="37.807225" data-lng="-122.446605" data-icon="map-icon-marina">Take a right on the San Francisco Bay Trail along the harbor to the St. Francis Yacht Club</li><li class="goldenGateli2" data-lat="37.808649" data-lng="-122.440178" data-icon="map-icon-whale-watching">Continue past the Golden Gate Yacht Club to a little known artistic secret: the Wave Organ</li><li class="goldenGateli3" data-lat="37.806444" data-lng="-122.450901" data-icon="map-icon-wind-surfing">From the Wave Organ, walk back past the yacht clubs and West on San Francisco Bay Trail toward the Beach at Presidio</li><li class="goldenGateli4" data-lat="37.804596" data-lng="-122.464044" data-icon="map-icon-natural-feature">Enjoy the scenery as you walk down the trail toward Crissy Field, which used to be a military aviation landing strip</li><li class="goldenGateli5" data-lat="37.810773" data-lng="-122.476599" data-icon="map-icon-physiotherapist">Finish your walk at Fort Point under the Golden Gate Bridge and touch Hoppers Hands fence</li>';
  obj2.cableCarWalkingRoute = '<li class="cableCarli0" data-lat="37.802094" data-lng="-122.443079" data-icon="null"><strong>Cable Car Route: </strong>Walk from our home to Marina Blvd and head East. The whole route is <bold class="insertMiles"></bold> miles</li><li class="cableCarli1" data-lat="37.805471" data-lng="-122.429343" data-icon="map-icon-viewing">Head up the hill through Ft. Mason and past the Aquatic Park</li><li class="cableCarli2" data-lat="37.805638" data-lng="-122.420423" data-icon="map-icon-train-station">Take a right on Hyde St. and pass the Powell-Hyde Cable Car Turntable and continue to Hyde and North Point St. to catch the next cable car with less of the tourist traffic </li><li class="cableCarli3" data-lat="37.802052" data-lng="-122.419629" data-icon="map-icon-skateboarding">Ride the cable car up the hill and hop out at the curvy part of Lombard St. to grab an iconic San Francisco shot. Catch the next cable car: they run every ten minutes or so</li><li class="cableCarli4" data-lat="37.788013" data-lng="-122.407375" data-icon="map-icon-clothing-store">Continue your ride all the way down to Sutter St. and walk a block to Union Square</li><li class="cableCarli5" data-lat="37.795584" data-lng="-122.392944" data-icon="map-icon-sailing">Finish your walk at Union Square or continue to the Ferry Building as you walk down Market St.</li>';
  obj2.goldenGateParkWalkingRoute = '<li class="ggParkli0" data-lat="37.802094" data-lng="-122.443079" data-icon="null"><strong>Park Route: </strong>Cab from our home to Sutro Heights Parking Lot near Lands End. The whole route is <bold class="insertMiles"></bold> miles</li><li class="ggParkli1" data-lat="37.780327" data-lng="-122.512862" data-icon="map-icon-diving">Out of the parking lot, head across the street to explore the trails that lead down to Sutro Baths</li><li class="ggParkli3" data-lat="37.770466" data-lng="-122.508909" data-icon="map-icon-walking">Walk along the sidewalk south past the Cliff House Restaurant and Ocean Beach until you reach Fulton St. Cross the Great Highway (101) here to enter Golden Gate Park and explore the windmills at the edge of the park</li><li class="ggParkli4" data-lat="37.769047" data-lng="-122.497871" data-icon="map-icon-pet-store">Continuing through the park, you will pass a number of public amenities including the Golf Course, Equestrian Fields, and Fly Fishing Casting Ponds before arriving at the Bison Paddock</li><li class="ggParkli5" data-lat="37.77067" data-lng="-122.485597" data-icon="map-icon-park">Continuing through the park, we would be remiss not to mention the pristine Golden Gate Disc Golf Course loacted near Marx Meadow</li><li class="ggParkli6" data-lat="37.769126" data-lng="-122.470318" data-icon="map-icon-florist">Heading East, you will eventually find yourself at the other end of the park near the beautiful Botanical Gardens</li><li class="ggParkli7" data-lat="37.771028" data-lng="-122.467899" data-icon="map-icon-museum">A short walk from the Botanical Gardens leads you outside the de Young Museum where you can find many renowned pieces of artwork on display</li><li class="ggParkli8" data-lat="37.770197" data-lng="-122.466493" data-icon="map-icon-aquarium">And just on the other side of the pavillion, you can explore the California Academy of Sciences with a number of unique and interactive tours and zoological exhibits</li>';
  var slider = $('.my-slider').unslider({
    speed: 500,               //  The speed to animate each slide (in milliseconds)
    delay: 3000,              //  The delay between slide animations (in milliseconds)
    complete: function() {},  //  A function that gets called after every slide animation
    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    dots: true,								//  Display dot navigation
    arrows: {
      prev: '<a class="unslider-arrow-left"><i class="fa fa-arrow-left"></i></a>',
      next: '<a class="unslider-arrow-right"><i class="fa fa-arrow-right"></i></a>'
    },                        //  Display arrow navigation
    fluid: true               //  Support responsive design. May break non-responsive designs
    });

    $('.walkingTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      $('.walkingRoutesDiv').html(obj2[target]);
      slider.unslider('re_init');
      setPolyOptions(obj1[target+'Coordinates']);
      addEventListenerMap2(37.802103,-122.442975);
      $(".insertMiles").html((polylineDistances[polylineDistances.length-1].toString()).substring(0,3));
    });

    slider.on('unslider.change', function(event, index, slide) {
      var digit = index;
      if (digit != "0") {
        var lat = $('.unslider-active').data('lat');
        var lng = $('.unslider-active').data('lng');
        var mapIconLabel = $('.unslider-active').data('icon');
        mapAnimate(lat, lng);
        newMarker(lat, lng, mapIconLabel);
      }
      else {
        var lat = $('.unslider-active').data('lat');
        var lng = $('.unslider-active').data('lng');
        mapAnimate(lat, lng);
      }
    });
// Many thanks to Jack W. for this solution (http://codepen.io/j4k/pen/zrvqPJ)
      function mapAnimate(lat, lng){
        zoom = map2.getZoom();
        if (zoom > 15) map2.setZoom(15);

        panTo(lat, lng);
        google.maps.event.addListenerOnce(map2, "idle", function() {
              if (zoom > 15) map2.setZoom(15);
              google.maps.event.trigger(map2, 'resize');
        });
      }

      var panPath = [];   // An array of points the current panning action will use
      var panQueue = [];  // An array of subsequent panTo actions to take
      var STEPS = 200;     // The number of steps that each panTo action will undergo

      function panTo(newLat, newLng) {
        if (panPath.length > 0) {
          // We are already panning...queue this up for next move
          panQueue.push([newLat, newLng]);
        } else {
          // Lets compute the points we'll use
          panPath.push("LAZY SYNCRONIZED LOCK");  // make length non-zero - 'release' this before calling setTimeout
          var curLat = map2.getCenter().lat();
          var curLng = map2.getCenter().lng();
          var dLat = (newLat - curLat)/STEPS;
          var dLng = (newLng - curLng)/STEPS;

          for (var i=0; i < STEPS; i++) {
            panPath.push([curLat + dLat * i, curLng + dLng * i]);
          }
          panPath.push([newLat, newLng]);
          panPath.shift();      // LAZY SYNCRONIZED LOCK
          setTimeout(doPan, 2);
        }
      }

      function doPan() {
        var next = panPath.shift();
        if (next != null) {
          // Continue our current pan action
          map2.panTo( new google.maps.LatLng(next[0], next[1]));
          setTimeout(doPan, 2 );
        } else {
          // We are finished with this pan - check if there are any queue'd up locations to pan to
          var queued = panQueue.shift();
          if (queued != null) {
            panTo(queued[0], queued[1]);
          } else {
            map2.setZoom(zoom);
          }
        }
      }

      // the smooth zoom function
      function smoothZoom (map2, max, cnt) {
          if (cnt >= max) {
                  return;
              }
          else {
              z = google.maps.event.addListener(map2, 'zoom_changed', function(event){
                  google.maps.event.removeListener(z);
                  r(map2, max, cnt + 1);
              });
              setTimeout(function(){map2.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
          }
      }

      // Adds a marker to the map and push to the array.
      function newMarker(markerLat, markerLng, mapIconLabel) {
        var marker = new Marker({
          map: map2,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: markerLat, lng: markerLng},
          icon: {
            path: MAP_PIN,
        		fillColor: '#779ECB',
        		fillOpacity: 0.8,
        		strokeColor: '',
        		strokeWeight: 0
          },
          map_icon_label: '<span class="map-icon ' + mapIconLabel + '"></span>'
        });

        clearMarkers2();
        map2markers.push(marker);
      }

      // Sets the map on all markers in the array.
      function setMap2OnAll(map2) {
        for (var i = 0; i < map2markers.length; i++) {
          map2markers[i].setMap(map2);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers2() {
        setMap2OnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers2() {
        setMap2OnAll(map2);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers2() {
        clearMarkers2();
        map2markers = [];
      }

      (function() {

            Response.create({ mode: 'markup', prefix: 'r', breakpoints: [0,320,481,641,961,1020,1281] });
            Response.create({ mode: 'src',  prefix: 'src', breakpoints: [0,320,481,641,961,1020,1281] });

   })();
});
