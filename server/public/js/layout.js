/* eslint no-undef: "off" */
$(document).ready(function () {
  var scrollStart = 0
  var startChange = $('#startChange')
  var offset = startChange.offset()
  if (startChange.length) {
    $(document).scroll(function () {
      scrollStart = $(this).scrollTop()
      if (scrollStart > offset.top) {
        $('.navbar-default').css('background-color', '#ffffff')
      } else {
        $('.navbar-default').css('background-color', 'transparent')
      }
    })
  }
})

function initMap () { // eslint-disable-line no-unused-vars
  let tripDay = document.getElementById('tripDay')
  let lats = tripDay.getAttribute('data-lat')
  let lngs = tripDay.getAttribute('data-lng')
  console.log(lats)
  console.log(lngs)
  let destinations = tripDay.getAttribute('data-destination')
  lats = lats.substr(1, lats.length - 1).split(',')
  lngs = lngs.substr(1, lngs.length - 1).split(',')
  destinations = destinations.substr(1, destinations.length - 1).split(',')
  let centerLat = lats.reduce((acc, val) => (Number(val) + acc), 0) / lats.length
  let centerLng = lngs.reduce((acc, val) => (Number(val) + acc), 0) / lngs.length

  let center = {
    lat: centerLat,
    lng: centerLng
  }
  let markers = []
  for (var i = 0; i < lats.length; i++) {
    let icon = (i === +tripDay.value) ? '/img/markers/blue-marker-40.png' : '/img/markers/red-marker-40.png'
    markers.push({coor: {lat: Number(lats[i]), lng: Number(lngs[i])}, icon, title: destinations[i]})
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center
  })
  var coorLocations = []
  markers.forEach(element => {
    coorLocations.push(element.coor)
    let point = new google.maps.Marker({// eslint-disable-line no-unused-vars
      position: element.coor,
      icon: element.icon,
      map,
      title: element.title
    })
  })
  coorLocations.push(coorLocations[0])
  var travelPath = new google.maps.Polyline({
    path: coorLocations,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  })
  travelPath.setMap(map)
}
