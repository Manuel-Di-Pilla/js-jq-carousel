$(document).ready(
  function () {
    $('.next').click(
      function () {
        next();
        nextCircle();
      }
    )
    $('.prev').click(
      function () {
        prev();
        prevCircle();
      }
    )
    $('i').click(
      function () {
        $('i.active').removeClass('active');
        $(this).addClass('active');
      }
    )
  }
)

$(document).keydown(
  function () {
    if (event.keyCode == 39) {
      next();
      nextCircle();
    } else if (event.keyCode == 37) {
      prev();
      prevCircle();
    }
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
function nextCircle () {
  var first = $('i.first');
  var last = $('i.last');
  var active = $('i.active');
  var nextCircle = active.next();
  if (last.hasClass('active') == true) {
    first.addClass('active');
    last.removeClass('active');
  } else {
    active.removeClass('active');
    nextCircle.addClass('active');
  }
}
function prevCircle () {
  var first = $('i.first');
  var last = $('i.last');
  var active = $('i.active');
  var prevCircle = active.prev();
  if (first.hasClass('active') == true) {
    last.addClass('active');
    first.removeClass('active');
  } else {
    active.removeClass('active');
    prevCircle.addClass('active');
  }
}
function clickCircle() {
  var circle = $('i');
  var active = $('i.active');
  if (circle.hasClass('active') == false) {
    circle.addClass('active');
  }
}
