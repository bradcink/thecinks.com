// if HTML DOM Element that contains the map2 is found...
if (document.getElementById('map2-canvas2')){
  $('.button').click(function(){

    zoom = map2.getZoom();
    if (zoom > 15) map2.setZoom(15map);

    var lat = $(this).data('lat');
    var lng = $(this).data('lng');

    google.maps.event.addListenerOnce(map2, "idle", function() {
          panTo(lat, lng);
    });

  });

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
    setTimeout(doPan, 20);
  }
}

function doPan() {
  var next = panPath.shift();
  if (next != null) {
    // Continue our current pan action
    map2.panTo( new google.maps.LatLng(next[0], next[1]));
    setTimeout(doPan, 20 );
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

}
