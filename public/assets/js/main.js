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
                    laptopCont = $('.laptop-cont');

              mainHeader.css({
                    'transform' : 'scale(1)'
              });

              var fadeInContent = function () {
                  subContent.css('opacity', 1);
                  laptopCont.css({
                      'transform' : 'translateY(0)',
                      'opacity' : 1
                  });
              };

              fadeInContent();
        });

})(jQuery, window, document);
