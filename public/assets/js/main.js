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
                    //btnLink = $('.btn'),
                    //laptopCont = $('.laptop-cont'),
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
                  smoothNavigationScroll: function() {
                      var bio = $('.main'),
                            mainContent = bio.find('.col-9'),
                            portfolio = $('.portfolio-cont'),
                            skills = $('.skills-cont');
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
                          var boxWrapper = portfolio.find('.box-wrapper');
                          if ( direction === 'down' ) {
                                boxWrapper.css({
                                    'transform' : 'translateX(0)'
                                });
                          }
                      }, {
                          offset: '35%'
                      });

                      // Skills Section
                      skills.waypoint(function(direction) {
                          var column = skills.find('.column'),
                                content = column.find('.content');

                          if ( direction === 'down' ) {
                                for ( var i = 0; i <= content.length; i++ ) {
                                          //var position = content[ i],
                                                //bar = $(position);
                                          
                                }

                          }
                      }, {
                          offset: '50%'
                      });
                  }
              };

            app.resizeWindow();
            app.displayMenuOnResp();
            app.smoothNavigationScroll();
            //app.animateSkills();
        });

})(jQuery, window, document);
