$(function(){
    $('.slider_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'.prev_btn',
        nextArrow:'.next_btn',
      });
      $('.arrival_wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'.prev_btn_1',
        nextArrow:'.next_btn_2',
      });
      $('.seller_wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'.prev_btn_3',
        nextArrow:'.next_btn_4',
      });
      $('.expert_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'.prev_btn_5',
        nextArrow:'.next_btn_6',
      });
      $('.shop_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'.prev_btn_7',
        nextArrow:'.next_btn_8',
      });
})