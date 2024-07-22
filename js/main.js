(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Date and time picker initialization
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Team carousel and related carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

})(jQuery);

// Vanilla JavaScript for animation effects
document.addEventListener("DOMContentLoaded", function () {
    // Animated text effect
    var text = document.getElementById('animated-text');
    if (text) {
        var letters = text.textContent.split('');
        text.textContent = '';
        for (let i = 0; i < letters.length; i++) {
            var span = document.createElement('span');
            span.textContent = letters[i];
            span.style.animation = `fadeIn 2.5s ease-in-out ${i * 0.1}s forwards`;
            text.appendChild(span);
        }
    }

    // Animated section and element effects
    var sections = document.querySelectorAll('.animated-section');
    var delay = 0;
    sections.forEach(function (section) {
        section.style.animationDelay = `${delay}s`;
        section.style.animation = "fadeIn 1.5s ease-in-out forwards";
        delay += 0.5; // Adjust delay as needed
    });

    var elements = document.querySelectorAll('.animated-element');
    elements.forEach(function (element) {
        element.style.animation = "fadeIn 1.5s ease-in-out forwards";
        element.style.animationDelay = `${delay}s`;
        delay += 0.5; // Adjust delay as needed
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('http://localhost:3000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert('Appointment booked successfully');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });
});
