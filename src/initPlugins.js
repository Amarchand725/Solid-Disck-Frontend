// src/initPlugins.js

export function initAllPlugins() {
    // HSMegaMenu
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      direction: 'horizontal',
      pageContainer: $('.container'),
      breakpoint: 767.98,
      hideTimeOut: 0
    });
  
    // SVG Injector
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
  
    // Header
    $.HSCore.components.HSHeader.init($('#header'));
  
    // Scroll Animations
    $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  
    // Unfold
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      }
    });
  
    // FancyBox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');
  
    // Countdown
    $.HSCore.components.HSCountdown.init('.js-countdown', {
      yearsElSelector: '.js-cd-years',
      monthsElSelector: '.js-cd-months',
      daysElSelector: '.js-cd-days',
      hoursElSelector: '.js-cd-hours',
      minutesElSelector: '.js-cd-minutes',
      secondsElSelector: '.js-cd-seconds'
    });
  
    // Malihu Scrollbar
    $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));
  
    // Form Focus
    $.HSCore.components.HSFocusState.init();
  
    // Validation
    $.HSCore.components.HSValidation.init('.js-validate', {
      rules: {
        confirmPassword: {
          equalTo: '#signupPassword'
        }
      }
    });
  
    // Show Animations
    $.HSCore.components.HSShowAnimation.init('.js-animation-link');
  
    // Slick Carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
  
    // GoTo Button
    $.HSCore.components.HSGoTo.init('.js-go-to');
  
    // Hamburger
    $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');
  
    // Sidebar Unfold
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
      beforeClose: function () {
        $('#hamburgerTrigger').removeClass('is-active');
      },
      afterClose: function () {
        $('#headerSidebarList .collapse.show').collapse('hide');
      }
    });
  
    // Sidebar Collapse
    $('#headerSidebarList [data-toggle="collapse"]').off('click').on('click', function (e) {
      e.preventDefault();
      var target = $(this).data('target');
      if ($(this).attr('aria-expanded') === "true") {
        $(target).collapse('hide');
      } else {
        $(target).collapse('show');
      }
    });
  
    // Select Picker
    $.HSCore.components.HSSelectPicker.init('.js-select');
  }  