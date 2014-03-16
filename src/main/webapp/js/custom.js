$('#logo').click(function() {
    $(location).attr('href', "index.jsp");
});

$('#faq').click(function() {
    $(location).attr('href', "faq.html");
});
$('#upload').click(function() {
    $(location).attr('href', "upload.jsp");
});

$('#bug').click(function() {
    $(location).attr('href', "bug.jsp");
});
var fb_token;
var fb_userId = null;
var fb_email;
window.fbAsyncInit = function() {
    FB.init({
        appId: '408193472649526',
        oauth: true,
        status: false, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {

            FB.api('/me', function(response) {
                var picSrc = ("https://graph.facebook.com/" + response.id + "/picture?width=70");
                var parts = location.pathname.split('/');
                // document.getElementById("profilePic").src = picSrc;                            
                $(".fb-pic").attr('src', picSrc);
                $("#user-name").append(response.name);
                $('#entrant').val(response.name);
                $("#sidebar-status-text").text("Sign out");
                /*if (parts[parts.length - 1] !== 'browse.jsp' || parts[parts.length - 1] === '') {
                 location.href = 'browse.jsp';
                 }*/
            }
            );
        } else {
            $("#fb-pic").prepend('<i class="fa fa-user fa-padding-15">');
            $("#user-name").append("Stranger");
            $("#sidebar-status-text").text("Sign in");
        }
    });
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$('.fb-button').click(function() {
    fb_login();
});
$('#sidebar-status').click(function() {

    if ($('#sidebar-status-text').text() === "Sign out") {

        FB.api('/me/permissions', 'delete', function(response) {
            if (response) {
                $(location).attr('href', "index.jsp");
            }
        });
    } else {
        fb_login();
    }
});
/**
 * Calls on fb login when user clicks n fb_login button. Checks if user is in db? if yes,log the user in, if no, sign him up. <- Done with Ajax
 * @returns 
 */
function fb_login() {
    FB.login(function(response) {
        if (response.authResponse) {
            access_token = response.authResponse.accessToken;
            //  check if user has an account in it. If email is available (have not signed up),create a new user
            FB.api("/me", function(rsp) {
                if (rsp && !rsp.error) {
                    $(location).attr("href", "index.jsp");

                }
                ;
            });
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_stream,email,read_stream,user_birthday'
    });
}
;

(function($, window, undefined) {

    'use strict';

    // global
    var Modernizr = window.Modernizr;

    $.CBPFWSlider = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.CBPFWSlider.defaults = {
        // default transition speed (ms)
        speed: 500,
        // default transition easing
        easing: 'ease'
    };

    $.CBPFWSlider.prototype = {
        _init: function(options) {
            // options
            this.options = $.extend(true, {}, $.CBPFWSlider.defaults, options);
            // cache some elements and initialize some variables
            this._config();
            // initialize/bind the events
            this._initEvents();
        },
        _config: function() {

            // the list of items
            this.$list = this.$el.children('ul');
            // the items (li elements)
            this.$items = this.$list.children('li');

            // total number of items
            this.itemsCount = this.$items.length;
            // support for CSS Transitions & transforms
            this.support = Modernizr.csstransitions && Modernizr.csstransforms;
            this.support3d = Modernizr.csstransforms3d;
            // transition end event name and transform name
            // transition end event name
            var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transformNames = {
                'WebkitTransform': '-webkit-transform',
                'MozTransform': '-moz-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'transform': 'transform'
            };

            if (this.support) {
                this.transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ] + '.cbpFWSlider';
                this.transformName = transformNames[ Modernizr.prefixed('transform') ];
            }
            // current and old item´s index
            this.current = 0;
            this.old = 0;
            // check if the list is currently moving
            this.isAnimating = false;
            // the list (ul) will have a width of 100% x itemsCount
            var size = 3;
            if ($(window).width() < 380) {
                size = 1;
            } else {
            }
            this.$list.css('width', ($(window).width() + 100) / size * this.itemsCount + 'px');
            // apply the transition
            if (this.support) {
                this.$list.css('transition', this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing);
            }
            // each item will have a width of 100 / itemsCount
            //this.$items.css('width', 100 / this.itemsCount + '%');
            this.$items.css('width', ($(window).width() + 15) / size + 'px');
            // add navigation arrows and the navigation dots if there is more than 1 item
            if (this.itemsCount > 1) {
                $('nav').remove();
                // add navigation arrows (the previous arrow is not shown initially):
                this.$navPrev = $('<span class="cbp-fwprev">&lt;</span>');
                this.$navNext = $('<span class="cbp-fwnext">&gt;</span>');
                $('<nav/>').append(this.$navPrev, this.$navNext).appendTo(this.$el);
                // add navigation dots
                var dots = '';
                $('div.cbp-fwdots').remove();

                for (var i = 0; i < this.itemsCount; ++i) {
                    // current dot will have the class cbp-fwcurrent
                    var dot = i === this.current ? '<span class="cbp-fwcurrent"></span>' : '<span></span>';
                    dots += dot;
                }
                var navDots = $('<div class="cbp-fwdots"/>').append(dots).appendTo(this.$el);
                this.$navDots = navDots.children('span');

            }

        },
        _initEvents: function() {

            var self = this;
            if (this.itemsCount > 1) {

               $("#cbp-fwslider").on("swipeleft", $.proxy(this._navigate, this, 'previous'));
               
                
                this.$navPrev.on('click.cbpFWSlider', $.proxy(this._navigate, this, 'previous'));
                this.$navNext.on('click.cbpFWSlider', $.proxy(this._navigate, this, 'next'));
                this.$navDots.on('click.cbpFWSlider', function() {
                    self._jump($(this).index());
                });
            }

        },
        _navigate: function(direction) {

            // do nothing if the list is currently moving
            if (this.isAnimating) {
                return false;
            }

            this.isAnimating = true;
            // update old and current values
            this.old = this.current;
            if (direction === 'next' && this.current < this.itemsCount - 1) {
                ++this.current;
            }
            else if (direction === 'previous' && this.current > 0) {
                --this.current;
            }
            // slide
            this._slide();

        },
        _slide: function() {

            // check which navigation arrows should be shown
            this._toggleNavControls();
            // translate value
            //var translateVal = -1 * this.current * 100 / this.itemsCount;
            var size= 3;
            if($(window).width() < 422){
                size = 1;
            }
            var translateVal = -1 *  this.current * ($(window).width() + 15) / size;
            if (this.support) {
                this.$list.css('transform', this.support3d ? 'translate3d(' + translateVal + 'px,0,0)' : 'translate(' + translateVal + 'px)');
            }
            else {                                                                        
                //this.$list.css('margin-left', -1 * this.current * 100 + '%');
                this.$list.css('margin-left', -1 * this.current * ($(window).width() + 15) + 'px');
            }

            var transitionendfn = $.proxy(function() {
                this.isAnimating = false;
            }, this);

            if (this.support) {
                this.$list.on(this.transEndEventName, $.proxy(transitionendfn, this));
            }
            else {
                transitionendfn.call();
            }

        },
        _toggleNavControls: function() {

            // if the current item is the first one in the list, the left arrow is not shown
            // if the current item is the last one in the list, the right arrow is not shown
            switch (this.current) {
                case 0 :
                    this.$navNext.show();
                    this.$navPrev.hide();
                    break;
                case this.itemsCount - 1 :
                    this.$navNext.hide();
                    this.$navPrev.show();
                    break;
                default :
                    this.$navNext.show();
                    this.$navPrev.show();
                    break;
            }
            // highlight navigation dot
            this.$navDots.eq(this.old).removeClass('cbp-fwcurrent').end().eq(this.current).addClass('cbp-fwcurrent');

        },
        _jump: function(position) {

            // do nothing if clicking on the current dot, or if the list is currently moving
            if (position === this.current || this.isAnimating) {
                return false;
            }
            this.isAnimating = true;
            // update old and current values
            this.old = this.current;
            this.current = position;
            // slide
            this._slide();

        },
        destroy: function() {

            if (this.itemsCount > 1) {
                this.$navPrev.parent().remove();
                this.$navDots.parent().remove();
            }
            this.$list.css('width', 'auto');
            if (this.support) {
                this.$list.css('transition', 'none');
            }
            this.$items.css('width', 'auto');

        }
    };

    var logError = function(message) {
        if (window.console) {
            window.console.error(message);
        }
    };

    $.fn.cbpFWSlider = function(options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'cbpFWSlider');
                if (!instance) {
                    logError("cannot call methods on cbpFWSlider prior to initialization; " +
                            "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for cbpFWSlider instance");
                    return;
                }
                instance[ options ].apply(instance, args);
            });
        }
        else {
            this.each(function() {
                var instance = $.data(this, 'cbpFWSlider');
                if (instance) {
                    instance._init();
                }
                else {
                    instance = $.data(this, 'cbpFWSlider', new $.CBPFWSlider(options, this));
                }
            });
        }
        return this;
    };

})(jQuery, window);