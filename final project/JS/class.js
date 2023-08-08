$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("nav a").hover(
        function() {
            $(this).css({
                "color": "blue", // Change link color to blue on hover
                'transform': 'scale(1.2)',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                "color": "", // Reset to default link color
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease-in-out'
            });
        }
    );


    // Hover effect for CTA buttons
    $(".cta-button").hover(
        function() {
            $(this).css({
                "background-color": "#0e0e0e", // Red button background on hover
                "color": "#fff" // White button text color on hover
            });
        },
        function() {
            $(this).css({
                "background-color": "#fff", // Reset to white button background
                "color": "#ff0000" // Reset to red button text color
            });
        }
    );

    // Product item hover effect
    $(".product-item").hover(
        function() {
            $(this).css({
                "background-color": "#ddd", // Light gray background on hover
                "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)" ,// Add shadow on hover
                'transform': 'scale(1.2)',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                "background-color": "#f7f7f7", // Reset to light gray background
                "box-shadow": "none" ,// Reset shadow
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease-in-out'
            });
        }
    );
});