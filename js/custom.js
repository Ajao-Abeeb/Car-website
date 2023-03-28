$(".range-slider-ui").each(function () {
    var minRangeValue = $(this).attr('data-min');
    var maxRangeValue = $(this).attr('data-max');
    var minName = $(this).attr('data-min-name');
    var maxName = $(this).attr('data-max-name');
    var unit = $(this).attr('data-unit');

    $(this).append("" +
        "<span class='min-value'></span> " +
        "<span class='max-value'></span>" +
        "<input class='current-min' type='hidden' name='"+minName+"'>" +
        "<input class='current-max' type='hidden' name='"+maxName+"'>"
    );
    $(this).slider({
        range: true,
        min: minRangeValue,
        max: maxRangeValue,
        values: [minRangeValue, maxRangeValue],
        slide: function (event, ui) {
            event = event;
            var currentMin = parseInt(ui.values[0], 10);
            var currentMax = parseInt(ui.values[1], 10);
            $(this).children(".min-value").text( currentMin + " " + unit);
            $(this).children(".max-value").text(currentMax + " " + unit);
            $(this).children(".current-min").val(currentMin);
            $(this).children(".current-max").val(currentMax);
        }
    });

    var currentMin = parseInt($(this).slider("values", 0), 10);
    var currentMax = parseInt($(this).slider("values", 1), 10);
    $(this).children(".min-value").text( currentMin + " " + unit);
    $(this).children(".max-value").text(currentMax + " " + unit);
    $(this).children(".current-min").val(currentMin);
    $(this).children(".current-max").val(currentMax);
});
$(document).ready(function()
{
 $(" .owl-executive").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
 })
 $('.owl-testimonials').owlCarousel({
    items:1,
    loop:true,
    dots: true,
    nav: false,
    autoplay: true,
    margin:30,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

$('.owl-features').owlCarousel({
    items:3,
    loop:true,
    dots: true,
    nav: true,
    autoplay: true,
    margin:30,
      responsive:{
          0:{
              items:1
          },
          800:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })


})