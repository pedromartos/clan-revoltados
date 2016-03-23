###!
# Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
# Code licensed under the Apache License v2.0.
# For details, see http://www.apache.org/licenses/LICENSE-2.0.
###

# jQuery for page scrolling feature - requires jQuery Easing plugin
$ ->
  console.log 'SCROLL TOP', $(window).scrollTop()

  $(window).scroll ->
    scroll = $(window).scrollTop()
    if scroll >= 300
      $('.navbar-default').addClass 'navbar-shrink'
    else
      $('.navbar-default').removeClass 'navbar-shrink'
    return

  $('a.page-scroll').bind 'click', (event) ->
    $anchor = $(this)
    $('html, body').stop().animate { scrollTop: $($anchor.attr('href')).offset().top }, 1500, 'easeInOutExpo'
    event.preventDefault()
    return
  return

# Highlight the top nav as scrolling occurs
$('body').scrollspy target: '.navbar-fixed-top'

# Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click ->
  $('.navbar-toggle:visible').click()
  return