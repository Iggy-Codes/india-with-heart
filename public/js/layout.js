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
  // var txt = ''
  // txt += '<p> $(window).width = ' + $(window).width() + '</p>'
  // txt += '<p> $(window).height = ' + $(window).height() + '</p>'
  // txt += '<p>Total width/height: ' + screen.width + '*' + screen.height + '</p>'
  // txt += '<p>Available width/height: ' + screen.availWidth + '*' + screen.availHeight + '</p>'
  // txt += '<p>Color depth: ' + screen.colorDepth + '</p>'
  // txt += '<p>Color resolution: ' + screen.pixelDepth + '</p>'
  // console.log(txt)
  // $(infoWindow).html(txt)
})

function initMap () {
  let tripDay = document.getElementById('tripDay')
  let lats = tripDay.getAttribute('data-lat')
  // console.log('lats ' + lats)
  let lngs = tripDay.getAttribute('data-lng')
  let destinations = tripDay.getAttribute('data-destination')
  lats = lats.substr(1, lats.length - 1).split(',')
  lngs = lngs.substr(1, lngs.length - 1).split(',')
  destinations = destinations.substr(1, destinations.length - 1).split(',')
  // console.log(lats)
  let centerLat = lats.reduce((acc, val) => (Number(val) + acc), 0) / lats.length
  let centerLng = lngs.reduce((acc, val) => (Number(val) + acc), 0) / lngs.length

  let center = {
    lat: centerLat,
    lng: centerLng
  }
      // - console.log(center)
      // - //- console.log('lngs' + lngs)
  let markers = []
  for (var i = 0; i < lats.length; i++) {
    let icon = (i === +tripDay.value) ? '/img/markers/blue-marker-40.png' : '/img/markers/red-marker-40.png'
    markers.push({coor: {lat: Number(lats[i]), lng: Number(lngs[i])}, icon, title: destinations[i]})
  }
  // console.log(markers)
  // console.log(markers.length)
      // - console.log('tripday ' + tripDay.value + '\n' + lats + '\n' + lngs)
      // - console.log(markers)
           // - var locations = [
      // -   { name: 'Delhi', coor: { lat: 28.6618976, lng: 77.22739580000007 }},
      // -   { name: 'Jodhpur', coor: { lat: 26.23894689999999, lng: 73.02430939999999 }},
      // -   { name: 'Udaipur', coor: { lat: 24.585445, lng: 73.712479 }},
      // -   { name: 'Bundi', coor: { lat: 25.430514, lng: 75.649903 }} ,
      // -   { name: 'Jaipur', coor: { lat: 26.912434, lng: 75.787271 }},
      // -   { name: 'Agra', coor: { lat: 27.17667, lng: 78.008075 }}]
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center
  })
  var coorLocations = []
  markers.forEach(element => {
    coorLocations.push(element.coor)
        // - console.log(element.coor)
    let point = new google.maps.Marker({
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
