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
            // Run these codes when the DOM has finished loading.
              var mainHeader = $('.main-header'),
                    subContent = $('.sub-content'),
                    count = 0,
                    monitorCont = $('.monitor-cont'),
                    slideWindowContainer = $('.slide-window-container');

              mainHeader.css({
                    'transform' : 'scale(1)'
              });

              var fadeInContent = function () {
                  subContent.css('opacity', 1);
                  monitorCont.css({
                      'transform' : 'translateY(0)',
                      'opacity' : 1
                  });
                  slideWindowContainer.css({
                    'transform' : 'translateY(0)',
                    'opacity' : 1
                  });
              };

              fadeInContent();

              var links = $('a[href^="#"]');
              // Smooth navigation scroll
              function smoothNavigationScroll(e) {
                    var target, $target, body = $('html, body'), speed = 900;
                    e.preventDefault();

                    target = $(this).hash;
                    $target = $(target);
                    body.stop().animate({
                        'scrollTop': $target.offset().top
                    }, speed, 'swing');
              }

              /* function animationComplete() {
                var target = $(this).hash;
                window.location.hash = target;
              } */

              links.on('click', smoothNavigationScroll);

              // Slideshow Section
              function slideshow () {
                  var slideWindowContainer = $('.slide-window-container'),
                        windowBody = slideWindowContainer.find('.window-body'),
                        windowImg = windowBody.find('.window-img'),
                        path = 'assets/',
                        count = 0,
                        speed = 5000,
                        //img = windowImg.find('img');
                        img = [
                          path + 'img/photo-gallery.jpg',
                          path + 'img/audify-landing-page.jpg',
                          path + 'img/golf-day-layout.jpg'
                        ],
                        imgLength = img.length;

                         windowImg.css({
                            'background' : 'url(' + img[ count ] + ') 0 0 no-repeat',
                            'background-size' : 'cover'
                        });

                         //windowImg.fadeOut(200);

                         var start = setInterval(function () {

                             count++;

                             windowImg.fadeOut(500);

                             /*windowImg.css({
                                 'background': 'url(' + img[count] + ') 0 0 no-repeat',
                                 'background-size': 'cover'
                             });*/

                             windowImg.fadeIn(200);

                             if (count === imgLength) {
                                 count = 0;
                                 clearInterval(start);
                             }

                             console.log('img: ' + count);
                        }, speed);


              }
              slideshow();

              // Run these functions only when an event is called.
              var app = {
                  // Display Menu on Mobile view
                  displayMenuOnResp: function() {
                      var menuIcon = $('.menu-cont'),
                            navigationMenu = $('.nav'),
                            links = navigationMenu.find('ul > li > a');

                      function displayMenu() {
                          $(this).toggleClass('is-active');
                          navigationMenu.toggleClass('slide-up-down');
                          navigationMenu.css('z-index', 1);
                      }

                      function hideMenu() {
                          navigationMenu.removeClass('slide-up-down');
                          menuIcon.removeClass('is-active');
                      }

                      menuIcon.on('click', displayMenu);
                      links.on('click', hideMenu);
                  },
                  // Fire these functions on Scroll events
                  displayContentOnScroll: function() {
                      var bio = $('.main'),
                            mainContent = bio.find('.col-9'),
                            portfolio = $('.portfolio-cont'),
                            skills = $('.skills-cont');

                      function navigateScroll() {
                            // Biography Section
                            bio.waypoint(function(direction) {
                                if ( direction === 'down' ) {
                                      mainContent.css('opacity', 1);
                                }
                            }, {
                              offset: '20%'
                            });
                            // Portfolio Section
                            portfolio.waypoint(function(direction) {
                                var boxWrapper = portfolio.find('.box-wrapper'),
                                      box = boxWrapper.find('.box'),
                                      speed = 300,
                                      delaySpeed = 1.5;
                                //box.first().css('left', 0);
                                function runFrame() {
                                    $(box[count]).css('left', 0);
                                    count++;
                                    if ( count < box.length -1) {
                                          var index = box[ count ],
                                                val = $(index).delay(delaySpeed);
                                          val.css('left', 0);
                                    } else {
                                        clearInterval(run);
                                    }
                                }
                                var run = setInterval(runFrame, speed);

                                if ( direction === 'down' ) {
                                        runFrame();
                                }
                            }, {
                                offset: '35%'
                            });
                          // Skills Section
                          skills.waypoint(function(direction) {
                                var //htmlBar = skills.find('.html-bar'),
                                      //htmlStatus = skills.find('.html-status'),
                                      //cssBar = skills.find('.css-bar'),
                                      //cssSatus = skills.find('.css-status'),
                                      //scriptBar = skills.find('.script-bar'),
                                      //scriptSatus = skills.find('.script-status'),
                                      bar = skills.find('.bar'),
                                      status = skills.find('.status'),
                                      width = 0;

                                /*var val = htmlBar.data('value'),
                                      val2 = cssBar.data('value'),
                                      val3 = scriptBar.data('value');*/

                                /*console.log('html value : ' + val + '\n' + 'css value : ' + val2
                                + '\n' + 'script value : ' + val3);*/



                              /*
                              * (1). Loop through each bar elements
                              * (2). Get the value for each of those elements
                              * (3). If the width is less than the current given value.
                              * (4). Increase the width by the given value
                              * -- Update The Status --
                              * (1). Loop through each status elements
                              * (2). Assign the value width to that current status
                              */
                              var position, barIndex, indexVal;
                              var array = [ ];
                              // Get the value for each bar elements
                              for (var i = 0; i < bar.length; i++) {
                                       position = bar[ i ];
                                       barIndex = $(position);
                                      indexVal = barIndex.data('value');
                                     width++;
                                     // Check if the width is less/greater than the given value
                                     if (width <= indexVal || width >= indexVal) {
                                           barIndex.css('width', indexVal + '%');
                                     } else {
                                          return false;
                                     }
                                     array.push(indexVal);
                              }

                              function updateStatus() {
                                    var x, statusPos, statusIndex;
                                    for (x = 0; x <= status.length; x++) {
                                            statusPos = status[ x ];
                                            statusIndex = $(statusPos);
                                            var g = parseInt(statusPos);
                                            //console.log(statusPos);
                                            if (g === 0) {
                                                  statusIndex.html(indexVal *1 + '%');
                                            }
                                    }
                              }
                              updateStatus();
                              //console.log('Print :' + array[2]);

                          }, {
                            offset: '40%'
                          });
                      }
                      navigateScroll(); // Fire the navigateScroll function.
                  }
              };

            app.displayMenuOnResp();
            app.displayContentOnScroll();
        });

})(jQuery, window, document);
