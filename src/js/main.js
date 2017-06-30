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
                          $(this).toggleClass('is-active');
                          navigationMenu.toggleClass('slide-up-down');
                      }

                      menuIcon.on('click', displayMenu);
                  },
                  animateSkills: function() {
                    var htmlBar = $('.html'),
                          cssBar = $('.css'),
                          status = $('.content-score'),
                          width = 1,
                          value = [78,  75, 45, 50  ],
                          id = setInterval(frame, 30);

                    for (var i = 0; i < value.length -1; i++) {
                            var position = value[i];
                            console.log(position);
                    }
                    function frame() {
                        if ( width >= position) {
                              clearInterval(id);
                        }   else {
                            width++;
                            htmlBar.css('width', width + '%');
                            cssBar.css('width', width + '%');
                            status.html(width * 1 + '%');
                        }
                    }

                  }

              };

            app.resizeWindow();
            app.displayMenuOnResp();
            app.animateSkills();
        });

})(jQuery, window, document);
