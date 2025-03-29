document.addEventListener("DOMContentLoaded", function() {
    let scrollContainer = document.querySelector(".horizontal-scroll");
    let parallaxBg = document.querySelector(".parallax-bg");

    // Enable horizontal scrolling with mouse wheel
    window.addEventListener("wheel", function(e) {
        if (e.deltaY !== 0) {
            scrollContainer.scrollLeft += e.deltaY * 3.75;  // Move horizontally
            e.preventDefault();
        }
    });

    // Apply parallax effect when scrolling
    scrollContainer.addEventListener("scroll", function() {
        let scrollPosition = scrollContainer.scrollLeft;
        
        if (parallaxBg) {
            parallaxBg.style.transform = `translateX(${scrollPosition * 0.5}px)`;
            console.log("Parallax applied at:", scrollPosition);
        }
    });
});
