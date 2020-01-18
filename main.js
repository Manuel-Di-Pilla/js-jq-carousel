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
    $('i.first').click(
      function () {
        clickCircleFirst();
      }
    )
    $('i.second').click(
      function () {
        clickCircleSecond();
      }
    )
    $('i.third').click(
      function () {
        clickCircleThird();
      }
    )
    $('i.last').click(
      function () {
        clickCircleLast();
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
function clickCircleFirst() {
  var first = $('i.first');
  var imgFirst = $('img.first')
  if (first.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    first.addClass('active');
    imgFirst.addClass('active');
  }
}
function clickCircleSecond() {
  var second = $('i.second');
  var imgSecond = $('img.second')
  if (second.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    second.addClass('active');
    imgSecond.addClass('active');
  }
}
function clickCircleThird() {
  var third = $('i.third');
  var imgThird = $('img.third')
  if (third.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    third.addClass('active');
    imgThird.addClass('active');
  }
}
function clickCircleLast() {
  var last = $('i.last');
  var imgLast = $('img.last')
  if (last.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    last.addClass('active');
    imgLast.addClass('active');
  }
}
