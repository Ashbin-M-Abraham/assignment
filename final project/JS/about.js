$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Hover effect for navigation links
    $("nav a").hover(
        function() {
            $(this).css({
                "color": "blue", // Change link color to blue on hover
                "transform": "scale(1.1)", // Enlarge the image on hover
                "transition": "transform 0.3s ease-in-out" // Smooth transition
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1.1)", // Enlarge the image on hover
                "transition": "transform 0.3s ease-in-out", // Smooth transition
                "color": "" // Reset to default link color
            });
        }
    );

    // Hover effect for headings
    $(".about-content h2").hover(
        function() {
            $(this).css({
                "color": "#e74c3c" // Change heading color on hover
            });
        },
        function() {
            $(this).css({
                "color": "#c0392b" // Reset to default heading color
            });
        }
    );

    // Hover effect for images
    $(".about-image img").hover(
        function() {
            $(this).css({
                "transform": "scale(1.1)", // Enlarge the image on hover
                "transition": "transform 0.3s ease-in-out" // Smooth transition
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)" // Reset image size
            });
        }
    );
});