$(document).ready(function() {

    // Hover effect for navigation links
    $("nav a").hover(
        function() {
            $(this).css({
                "color": "blue" ,// Change link color to blue on hover
                'transform': 'scale(1.2)',
            'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                "color": "",// Reset to default link color
                'transform': 'scale(1)',
            'transition': 'all 0.3s ease-in-out'
            });
        }
    );

    // Button hover effect
    $(".cta-button, .contact-form button").hover(
        function() {
            $(this).css({
                "background-color": "#333", // Dark gray background on hover
            });
        },
        function() {
            $(this).css({
                "background-color": "#000", // Reset to black background
            });
        }
    );

    // Icon link hover effect
    $(".icon-link").hover(
        function() {
            $(this).css({
                "color": "#ff0000", // Red color on hover
            });
        },
        function() {
            $(this).css({
                "color": "#333", // Reset to default color
            });
        }
    );

    // Input box hover effect
    $(".contact-form input, .contact-form textarea").hover(
        function() {
            $(this).css({
                "border-color": "#ff0000", // Red border on hover
            });
        },
        function() {
            $(this).css({
                "border-color": "#ccc", // Reset to default border color
            });
        }
    );
});
