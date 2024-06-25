(function(root, factory) {
    'use strict';
    //Browser globals (root is window)
    root.common = factory(root.jQuery);
}(this ? this : window, function($) {
    'use strict';
    var common = {
        mainVisualContentH: 0,
        breakPointSp: 750,
        scrollTop: function(scrollTop) {
            var pagetop = $(".pageTop a");
            if (pagetop.length <= 0) {
                return;
            }
            pagetop.off('click').on('click', function() {
                $('html, body').animate({ scrollTop: 0 }, 500);
            });
        },
        fixedHeader: function() {
            var header = $('header');
            if (header.length <= 0) {
                return;
            }
            var body = $('body');
            var screenH = window.innerHeight;
            var st = screenH / 3;
            // Get the scrollTop value after the page is reloaded
            var scrollTopPosition = $(window).scrollTop();
            setFixedHeader();
            var screenW = window.innerWidth;
            if (screenW <= 768) {
                return;
            }
            $(window).scroll(function() {
                if (window.innerWidth <= 768) {
                    return;
                }
                scrollTopPosition = $(this).scrollTop();
                setFixedHeader();
            });

            function setFixedHeader() {
                if (scrollTopPosition >= st) {
                    if (!body.hasClass('fixed-nav')) {
                        body.addClass('fixed-nav');
                    }
                } else {
                    if (body.hasClass('fixed-nav')) {
                        body.removeClass('fixed-nav');
                    }
                }
            }
        },
        hamburgerMenuClick: function() {
            var header = $('header');
            if (header.length <= 0 || header.find('.hamburger-menu').length <= 0) {
                return;
            }
            header.find('.hamburger-menu').off('click').on('click', function() {
                if ($(this).find('.bar').hasClass('active')) {
                    $(this).find('.bar').removeClass('active');
                    header.removeClass('active');
                    $('body .overlay').remove();
                } else {
                    $(this).find('.bar').addClass('active');
                    header.addClass('active');
                    $('body').append('<div class="overlay"></div>');
                }
                $('body').on('click', '.overlay', function() {
                    $('.hamburger-menu').trigger('click');
                });
                header.find('nav ul li ul li a').on('click', function() {
                    $('.hamburger-menu').trigger('click');
                })
            });
            header.find('.ic-sp').on('click', function(e) {
                var that = $(this);
                if (that.parent().parent().hasClass('active')) {
                    that.parent().parent().removeClass('active');
                } else {
                    that.parent().parent().addClass('active');
                }
                that.parent().parent().find('ul').stop().slideToggle();
                return false;
            })
        },
        areaMap: function() {
            var elemClick = $('.area-map .school-list ul li .label');
            if (elemClick.length <= 0) {
                return;
            }
            elemClick.on('click', function(e) {
                var that = $(this);
                if (that.hasClass('show')) {
                    that.removeClass('show');
                } else {
                    that.addClass('show');
                }
                that.parent().find('.inner').stop().slideToggle();
            });
        },
        /**
         * Animation content using AOS library 
         *
         * https://michalsnik.github.io/aos/
         * Github: https://github.com/michalsnik/aos
         *
         * @return {void}
         */
        anchorLink: function() {
            var acLink = $('[data-anchor]');
            if (acLink.length <= 0) {
                return;
            }
            acLink.on('click', function() {
                var that = $(this);
                var anchorId = that.data('anchor');
                if (!anchorId) {
                    return;
                }
                var target = $(anchorId);
                if (target.length <= 0) {
                    return;
                }
                var speed = 1000;
                if (that.data('acl-speed')) {
                    speed = that.data('acl-speed') * 1;
                }
                var position = target.offset().top;
                $('body,html').animate({ scrollTop: position }, speed, 'swing');
            });
        },
        informationSlider: function() {
            var slider = $(".information-slider ul");
            if (!slider) {
                return
            }
            if (slider.length <= 0) {
                return;
            }
            slider.slick({
                infinite: true,
                dots: false,
                waitForAnimate: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 600,
                slidesToShow: 2,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                arrows: true,
                mobileFirst: false,
                variableWidth: false,
                responsive: [{
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 959,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                ]
            }).on('touchmove', function(event, slick, currentSlide, nextSlide) {
                slider.slick('slickPlay');
            });
        },
        aboutTeacherSlider: function() {
            var slider = $(".about-page .content-box4 .teacher-list ul");
            if (!slider) {
                return
            }
            if (slider.length <= 0) {
                return;
            }
            slider.slick({
                infinite: true,
                dots: false,
                waitForAnimate: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 600,
                slidesToShow: 2,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                arrows: true,
                mobileFirst: false,
                variableWidth: false,
                responsive: [{
                        breakpoint: 751,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            }).on('touchmove', function(event, slick, currentSlide, nextSlide) {
                slider.slick('slickPlay');
            });
        },
        bannerSlider: function() {
            var slider = $(".home-page .content-box .banner-lg ul");
            if (slider.length <= 0) {
                return;
            }
            var slickOpts = {
                infinite: true,
                dots: false,
                waitForAnimate: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                arrows: false,
                mobileFirst: true,
                responsive: [{
                    breakpoint: 751,
                    settings: {
                        slidesToShow: 2,
                    }
                }, ]
            };
            var ss = null;
            var screenW = window.innerWidth;
            if (screenW <= 751) {
                ss = slider.slick(slickOpts).on('touchmove', function(event, slick, currentSlide, nextSlide) {
                    slider.slick('slickPlay');
                });
            }
            $(window).on('load resize orientationchange', function() {
                if (!ss) {
                    return;
                }
                var screenW = window.innerWidth;
                if (screenW >= 751) {
                    slider.slick('unslick');
                } else if (!ss.hasClass('slick-initialized')) {
                    slider.slick(slickOpts);
                }
            });
        },
        videoPlay: function() {
            var video = $('.video-box .video .ic-play');
            if (video.length <= 0) {
                return;
            }
            video.on('click', function() {
                var that = $(this);
                var popUp = that.parent().find('video').clone();
                var ct = $('<div class="show-video">' +
                    '<div class="video-inner"><div class="video-wp"><div class="video">' +
                    '</div></div></div>' +
                    ' <div class="overlay"></div>' +
                    '</div>');
                ct.find('.video').empty().append(popUp);
                ct.find('video').attr({
                    'autoplay': true,
                    'controls': true
                });
                $('body').append(ct);
                $('body').on('click', '.overlay', function() {
                    ct.remove();
                });
            });
            if ($('body').find('.show-video').length > 0) {
                return;
            }
        },
        openAreaMapContent: function() {
            var areaMapTitle = $('.home .area-map .ttl');
            var areaMapContent = $('.home .area-map-content');
            if (areaMapTitle.length <= 0 || areaMapContent.length <= 0) {
                return;
            }
            areaMapTitle.on('click', function() {
                var that = $(this);
                var parentElement = that.parent().parent();
                var act = parentElement.find('.home .area-map-content').stop().slideToggle();
                if (parentElement.hasClass('show')) {
                    parentElement.removeClass('show')
                } else {
                    parentElement.addClass('show')
                }
            });
        },
        areaMapBoxFixed: function(scrollTop) {
            if (!scrollTop) {
                scrollTop = 0;
            }
            var header = $('header'),
                homePage = $('.home-page'),
                body = $('body'),
                areaMapTitleBox = $('.area-map-title-box');
            if (homePage.length <= 0 || homePage.length <= 0 || areaMapTitleBox.length <= 0) {
                return;
            }
            var screenH = window.innerHeight,
                screenW = window.innerWidth,
                headerH = header.outerHeight(),
                homePageH = homePage.outerHeight(),
                areaMapTitleBoxH = areaMapTitleBox.outerHeight();

            if (screenW <= 768) {
                body.removeClass('areamap-fixed');
                return;
            }
            var homeContainerH = headerH + homePageH + areaMapTitleBoxH;
            if (scrollTop >= areaMapTitleBoxH) {
                body.removeClass('areamap-fixed');
            } else {
                if (homeContainerH > screenH) {
                    body.addClass('areamap-fixed');
                } else {
                    body.removeClass('areamap-fixed');
                }
            }
        },
        resetScrollTopHomePage: function() {
            var homePage = $('.home-page');
            if (homePage.length <= 0) {
                return;
            }
            window.scrollTo(0, 0);
        },
        filterClick: function(itemClick, item) {
            itemClick = (typeof itemClick === 'object') ? itemClick : $(itemClick);
            if (itemClick.length <= 0) {
                return;
            }
            item = (typeof item === 'object') ? item : $(item);
            if (item.length <= 0) {
                return;
            }
            itemClick.on('click', function(e) {
                e.preventDefault();
                var that = $(this);
                var itemBtn = itemClick.parent();
                var target = that.attr('href');
                if (!target || itemBtn.length <= 0) {
                    return;
                }
                itemBtn.removeClass('active')
                that.parent().addClass('active');
                if (target == '#all') {
                    item.show();
                    return;
                }
                var content = $('[data-target="' + target + '"]');
                item.hide();
                content.show();
            });
        },
        openMapDialog: function() {
            var itemClick = $('.area-map .box-content .school-list .btn-group .btns .btn');
            if (itemClick.length <= 0) {
                return;
            }
            itemClick.on('click', function() {
                var that = $(this);
                var target = that.attr('href');
                if (!target || $('.dialog-show').length > 0) {
                    return;
                }
                var content = $('[data-target="' + target + '"]');
                if (content.length <= 0) {
                    return;
                }
                var dialogContent = content.clone();
                if (!dialogContent) {
                    return;
                }
                var dialog = $(self.dialog());
                dialog.find('.dialog-wrapper').empty().html(dialogContent);
                dialog.find('.close-dialog').on('click', function() {
                    dialog.remove();
                });
                $('body').append(dialog);
                var slider = dialog.find('.school-slider')
                if (!slider) {
                    return
                }
                if (slider.length <= 0) {
                    return;
                }
                slider.slick({
                    infinite: false,
                    dots: false,
                    waitForAnimate: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 600,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    pauseOnDotsHover: false,
                    arrows: true,
                    mobileFirst: false,
                    variableWidth: false,
                    responsive: [{
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                    ]
                }).on('touchmove', function(event, slick, currentSlide, nextSlide) {
                    slider.slick('slickPlay');
                });
            });
        },
        dialog: function() {
            return '<div class="dialog">' +
                '<div class="dialog-inner">' +
                '<div class="dialog-body">' +
                '<div class="dialog-content"><div class="dialog-content-inner">' +
                '<div class="dialog-wrapper"></div>' +
                '</div></div>' +
                '<span class="close close-dialog"></span>' +
                '</div>' +
                '<div class="overlay close-dialog"></div>' +
                '</div>' +
                '</div>';
        },
    }
    var self = common;
    $(document).ready(function() {
        self.scrollTop();
        self.anchorLink();
        self.hamburgerMenuClick();
        self.informationSlider();
        self.areaMap();
        self.fixedHeader();
        self.bannerSlider();
        self.videoPlay();
        self.openAreaMapContent();
        self.resetScrollTopHomePage();
        self.areaMapBoxFixed();
        self.filterClick('.filter-box .items .inner', '.article-box .items');
        self.filterClick('.filter-box .items .inner', '.article .items');
        self.aboutTeacherSlider();
        self.openMapDialog();
    });
    $(function() {
        $(window).on('scroll resize', function() {
            self.areaMapBoxFixed($(this).scrollTop());
        });
    });
    /* Export: */
    return common;
}));