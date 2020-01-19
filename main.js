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
$(function () {
  var interval;
  function startSlider() {
    interval = setInterval(function () {
      slider();
    }, 3000);
  }
  function stopSlider() {
    clearInterval(interval)
  }
  $('.images').on('mouseenter', stopSlider);
  $('.images').on('mouseleave', startSlider );
  $('i').on('mouseenter', stopSlider);
  $('i').on('mouseleave', startSlider);
  startSlider();
})

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
$(document).keydown(
  function () {
    if (event.keyCode == 39) {
      stopSlider();
    } else if (event.keyCode == 37) {
      stopSlider();
    }
  }
)
$(document).keyup(
  function () {
    if (event.keyCode == 39) {
      startSlider();
    } else if (event.keyCode == 37) {
      startSlider();
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
  var imgFirst = $('img.first');
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
  var imgThird = $('img.third');
  if (third.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    third.addClass('active');
    imgThird.addClass('active');
  }
}
function clickCircleLast() {
  var last = $('i.last');
  var imgLast = $('img.last');
  if (last.hasClass('active') == false) {
    $('img').removeClass('active');
    $('i').removeClass('active');
    last.addClass('active');
    imgLast.addClass('active');
  }
}

function slider() {
  var img1 = $('img.first');
  var img1Next = img1.next();
  var img2 = $('img.second');
  var img2Next = img2.next();
  var img3 = $('img.third');
  var img3Next = img3.next();
  var img4 = $('img.last');
  var img4Next = img4.next();
  var circle1 = $('i.first');
  var circle2 = $('i.second');
  var circle3 = $('i.third');
  var circle4 = $('i.last');

  if (img1.hasClass('active') == true) {
    img1.removeClass('active');
    img1Next.addClass('active');
    circle1.removeClass('active');
    circle2.addClass('active');
  } else if (img2.hasClass('active') == true) {
    img2.removeClass('active');
    img2Next.addClass('active');
    circle2.removeClass('active');
    circle3.addClass('active');
  } else if (img3.hasClass('active') == true) {
    img3.removeClass('active');
    img3Next.addClass('active');
    circle3.removeClass('active');
    circle4.addClass('active');
  } else if (img4.hasClass('active') == true) {
    img4.removeClass('active');
    img1.addClass('active');
    circle4.removeClass('active');
    circle1.addClass('active');
  }
}
