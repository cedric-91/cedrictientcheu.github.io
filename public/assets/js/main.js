/*!
 * cedric-tientcheu
 * My Portfolio site
 * 
 * @author Cedric Tientcheu
 * @version 1.0.0
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

        'use strict';

        $(function() {
            // Hero Elements stored into a variable.
              var mainHeader = $('.main-header'),
                    subContent = $('.sub-content'),
                    btnLink = $('.btn'),
                    laptopCont = $('.laptop-cont'),
                    monitorCont = $('.monitor-cont');

              mainHeader.css({
                    'transform' : 'scale(1)'
              });

              var fadeInContent = function () {
                  subContent.css('opacity', 1);
                  monitorCont.css({
                      'transform' : 'translateY(0)',
                      'opacity' : 1
                  });
              };

              fadeInContent();

              var app = {
                  resizeWindow : function() {
                      var img = $('#logo-img'),
                            browser = $('document');

                      if (browser.width() <= 780 + 'px') {
                            window.alert('Window is 480 wide');
                            img.attr('src', 'assets/img/small-logo.png');
                      }
                  },
                  displayMenuOnResp: function() {
                      var menuIcon = $('.menu-cont'),
                            navigationMenu = $('.nav');

                      function displayMenu() {
                          navigationMenu.slideDown(500);
                      }

                      menuIcon.on('click', displayMenu);
                  }


              };

            app.resizeWindow();
            app.displayMenuOnResp();
        });

})(jQuery, window, document);
