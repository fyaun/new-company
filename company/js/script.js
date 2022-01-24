/////////////////////////////////
// swiperの初期化
////////////////////////////
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      //クリック時に写真もスライド
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

// wowの初期化を設定する
  new WOW().init();


// ハンバーガーメニュー
$('.drawer-icon').on('click', function(e) {
//ブラウザに依存するのを無効化する
  e.preventDefault();

  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');

  return false;
})

// スムーススクロール
// スクロールすると表示される
$(function(){

  $(window).scroll(function(){

      if($(this).scrollTop() > 80) {
          $(".to-top").fadeIn();
      } else {
          $(".to-top").fadeOut();
      }
  });

  $(".to-top").click(function(){
      $("body, html").animate({
          scrollTop: 0
      }, 500);
  });
  
// ページ内リンク
  $('a[href^="#"]').on('click', function(){

    //headerの高さを取得
    let header = $('.header').innerHeight();
    // idを取得
    let id = $(this).attr('href');
    // 位置を取得
    let position = $(id).offset().top - header;
    console.log(id);
    console.log(position);
    

      $("html, body").animate({
          scrollTop: position
      }, 500);
  });
});

// 下線をつける
$('.header__nav li a').on('click', function() {
  $('.header__nav li a').removeClass('is-action');
  $(this).addClass('is-action');
});

//アコーディオン
$('.qa-box__q').on('click', function(){
  $(this).next().slideToggle();
  $(this).children('.qa-box__icon').toggleClass('is-open');
});

//modal
$('.js-close-button').on('click', function(e){
  //aタグ本来の動きを消す
  e.preventDefault();
  let target = $(this).data('target');
  $(target).hide();
});
$('.js-open-button').on('click', function(e){
  //aタグ本来の動きを消す
  e.preventDefault();
  let target = $(this).data('target');
  $(target).show();
});