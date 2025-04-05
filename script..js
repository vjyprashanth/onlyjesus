let slideIndex = 0;
        let slider = document.getElementById('slider');
        let slides = document.querySelector('.slides');
        let totalSlides = document.querySelectorAll('.slide').length;
        let autoSlide;

        function moveSlide(step) {
            slideIndex = (slideIndex + step + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function startAutoSlide() {
            autoSlide = setInterval(() => moveSlide(1), 3000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        startAutoSlide();