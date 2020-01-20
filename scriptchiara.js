$(document).ready(
  function () {
    $('.next').click(
      function () {
        nextClick();
      }
    );
    $('.prev').click(
      function () {
        prevClick();
      }
    );
    $('.nav i').click(
      function () {
        var thisPosition = $(this).index();
        var img = $('img').eq(thisPosition);
        $('.nav i').removeClass('active');
        $('img').removeClass('active');
        img.addClass('active');
        $(this).addClass('active');
        console.log($(this).index());
        //devo prendere la posizione di questo pallino, devo usare questa posizione per cercare l immagine corrispondente
      }
    )
  }
);
function nextClick() {
  var first = $('img.first');
  var last = $('img.last');
  var active = $('img.active');
  var imgNext = active.next();
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  var circleFirst = $('i.first');
  var circleLast = $('i.last');
  console.log(first, last, active);
  if (last.hasClass('active') == true) {
    last.removeClass('active');
    first.addClass('active');
    circleLast.removeClass('active');
    circleFirst.addClass('active');
  } else {
    active.removeClass('active');
    imgNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }
}
function prevClick() {
  var first = $('img.first');
  var last = $('img.last');
  var active = $('img.active');
  var imgPrev = active.prev();
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();
  var circleFirst = $('i.first');
  var circleLast = $('i.last');
  console.log(first, last, active);
  if (first.hasClass('active') == true) {
    first.removeClass('active');
    last.addClass('active');
    circleFirst.removeClass('active');
    circleLast.addClass('active');
  } else {
    active.removeClass('active');
    imgPrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
