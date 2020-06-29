var mapThemeSilver = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];

function initMap() {
    var coords = {lat: 50.596174, lng: 36.583376};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: coords,
        styles: mapThemeSilver,
    });

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: 'Rosses Land',
        icon: 'i/bitmapped/logo-small.png',
    });
};

$(function() {
    $('.js-tab').on('click', function(event) {
        event.preventDefault();

        var $target = $(event.target);
        var $currentTarget = $(event.currentTarget);
        var id = $target.attr('href');

        if (id && !$target.parent('.tab__nav-item').hasClass('tab__nav-item_active')) {
            $currentTarget.find('.tab__nav-item').removeClass('tab__nav-item_active');
            $currentTarget.find('.tab__content-block').removeClass('tab__content-block_active');

            $target.parent('.tab__nav-item').addClass('tab__nav-item_active');
            $(id).addClass('tab__content-block_active');
        }
    });
});

$(function() {
    $('.js-accordeon').on('click', function(event) {
        event.preventDefault();

        var $currentTarget = $(event.currentTarget);

        if ($currentTarget.hasClass('accordeon_active')) {
            $currentTarget.removeClass('accordeon_active');
            $currentTarget.find('.accordeon__body').slideUp();
        } else {
            $currentTarget.addClass('accordeon_active');
            $currentTarget.find('.accordeon__body').slideDown();
        }
    });
});

$(function() {
    $('.js-count-top').on('click', function(event) {
        var $formCountField = $('.form-count').find('.form-count__field')
        var value = parseInt($formCountField.val());
        var newValue = value + 1;

        $formCountField.val(newValue);
    });

    $('.js-count-bottom').on('click', function(event) {
        var $formCountField = $('.form-count').find('.form-count__field')
        var value = parseInt($formCountField.val());

        if (value === 1) return false;

        var newValue = value - 1;

        $formCountField.val(newValue);
    });
});

$(function() {
    var mainSlider = new Swiper('.js-slider-main', {
        navigation: {
            nextEl: '.slider_theme_main .slider__button_next',
            prevEl: '.slider_theme_main .slider__button_prev',
            disabledClass: 'slider__button_disabled'
    
        pagination: {
            el: '.slider_theme_main .slider__pagination',
            clickable: true,
            bulletClass: 'slider__pagination-item',
            bulletActiveClass: 'slider__pagination-item_active',
            renderBullet: function (index, className) {
                var number = index + 1;

                if (number < 10) {
                    number = '0' + number;
                }

                return '<span class="' + className + '">' + number + '</span>';
            },
        },
    });
});

$(function() {
    $('.js-slider-more').on('click', function () {
       $('html, body')
           .animate({
               scrollTop: $(window).height() - $('.js-header').outerHeight()
           }, 600);
    });

});



$(function() {
    $('.js-nav-toggle').on('click', function () {
       if ($(this).hasClass('nav-toggle_active')) {
           $(this).removeClass('nav-toggle_active');
           $('.js-main-nav').removeClass('main-nav_show');
       }else {
           $(this).addClass('nav-toggle_active');
           $('.js-main-nav').addClass('main-nav_show');
       }
    });
});
