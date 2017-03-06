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
  var txt = ''
  txt += '<p> $(window).width = ' + $(window).width() + '</p>'
  txt += '<p> $(window).height = ' + $(window).height() + '</p>'
  txt += '<p>Total width/height: ' + screen.width + '*' + screen.height + '</p>'
  txt += '<p>Available width/height: ' + screen.availWidth + '*' + screen.availHeight + '</p>'
  txt += '<p>Color depth: ' + screen.colorDepth + '</p>'
  txt += '<p>Color resolution: ' + screen.pixelDepth + '</p>'
  $(infoWindow).html(txt)
})
