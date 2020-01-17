$(document).ready(
  function () {
    $('.next').click(
      function () {
        next();
      }
    )
  }
)

function next() {
  var first = $('img.first');
  var last = $('img.last');
  var active = $('img.active');
  var nextImg = active.next();
  if (last.hasClass('active') == true) {
    first.addClass('active');
    last.removeClass('active');
  } else {
    active.removeClass('active');
    nextImg.addClass('active');
  }
}
