(function ($, window, document, undefined) {

        'use strict';

        $(function() {
            // Hero Elements stored into a variable.
            // Run these codes when the DOM has finished loading.
              var mainHeader = $('.main-header'),
                    subContent = $('.sub-content'),
                    count = 0,
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

              // Run these functions only when an event is called.
              var app = {
                  // Display Menu on Mobile view
                  displayMenuOnResp: function() {
                      var menuIcon = $('.menu-cont'),
                            navigationMenu = $('.nav');

                      function displayMenu() {
                          $(this).toggleClass('is-active');
                          navigationMenu.toggleClass('slide-up-down');
                      }
                      menuIcon.on('click', displayMenu);
                  },
                  // Fire these functions on Scroll events
                  smoothNavigationScroll: function() {
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
                                box.first().css('left', 0);
                                function runFrame() {
                                    count++;
                                    if ( count <= box.length ) {
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
                              * (2). Assign the width to that corresponding status
                              */
                              var position, barIndex, indexVal;

                              // Get the value for each bar elements
                              for (var i = 0; i < bar.length; i++) {
                                       position = bar[ i ];
                                       barIndex = $(position);
                                      indexVal = barIndex.data('value');
                                     //console.log(statusPos);
                                     width++;
                                     for (var x = 0; x < status.length; x++) {
                                              var statusPos = status[ x ];
                                              var statusIndex = $(statusPos);
                                              statusIndex.html(indexVal * 1 + '%');
                                              //console.log(statusPos);
                                     }
                                     // Check if the width is less than the given value
                                     if (width < indexVal) {
                                            //console.log(indexVal);
                                           barIndex.css('width', indexVal + '%');
                                     } else {
                                          return false;
                                     }
                              }
                              console.log(position + statusPos);

                          }, {
                            offset: '40%'
                          });
                      }

                      navigateScroll(); // Fire the navigateScroll function.
                  }
              };

            app.displayMenuOnResp();
            app.smoothNavigationScroll();
        });

})(jQuery, window, document);
