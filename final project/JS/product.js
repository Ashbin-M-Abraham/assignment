$(document).ready(function() {
    // Navigation bar hover effect
    $("nav a").hover(
        function() {
            $(this).css({
                "color": "blue",
                "font-size": "18px" // You can adjust the size as needed
            });
        },
        function() {
            $(this).css({
                "color": "", // Reset to default color
                "font-size": "" // Reset to default font size
            });
        }
    );

    // Product item hover effect
    $(".product-item").hover(
        function() {
            $(this).css({
                "background-color": "darkgray",
                "font-size": "16px", // You can adjust the size as needed
                'transform': 'scale(1.1)',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).css({
                "background-color": "", // Reset to default background color
                "font-size": "", // Reset to default font size
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease-in-out'
            });
        }
    );
});