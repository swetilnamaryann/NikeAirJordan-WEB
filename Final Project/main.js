$(document).ready(function() {
    // Header and Footer
    const headerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="shop.html">Shop</a>
        </nav>
    `;
    const footerHTML = `
        <p>&copy; 2024 Retro Product Store. All rights reserved.</p>
    `;

    // Use .html() for injecting the header and footer content
    $('#global-header').html(headerHTML);
    $('#global-footer').html(footerHTML);

    // Slider functionality
    const $slides = $('.slides');
    const slideCount = $('.slide').length;
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        const offset = -currentIndex * 100; // 100% per slide
        $slides.css('transform', `translateX(${offset}%)`);
    }

    // Set interval for slide change
    setInterval(moveToNextSlide, 4000); // Change slide every 4 seconds

    // Button functionality
    $('.add-to-cart').on('click', function() {
        alert('Added to cart!');
    });

    $('.buy-now').on('click', function() {
        alert('Proceeding to checkout!');
    });
});
