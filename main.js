$(document).ready(
  function () {
    $('.next').click(
      function () {
        next();
      }
    )
    $('.prev').click(
      function () {
        prev();
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
function prev() {
  var first = $('img.first');
  var last = $('img.last');
  var active = $('img.active');
  var prevImg = active.prev();
  if (first.hasClass('active') == true) {
    last.addClass('active');
    first.removeClass('active');
  } else {
    active.removeClass('active');
    prevImg.addClass('active');
  }
}
