document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const slideCurrentNum = document.getElementById('slideCurrentNum');
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let currentSlide = 0;
    let autoplayTimer = null;
    let isPaused = reducedMotion.matches;

    function language() {
        return document.documentElement.lang === 'en' ? 'en' : 'cs';
    }

    function showSlide(index) {
        if (!slides.length) return;
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentSlide;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentSlide;
            dot.classList.toggle('active', isActive);
            if (isActive) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
        });

        if (slideCurrentNum) slideCurrentNum.textContent = String(currentSlide + 1);
    }

    function stopAutoplay() {
        if (autoplayTimer !== null) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function startAutoplay() {
        stopAutoplay();
        if (!isPaused && !document.hidden && slides.length > 1) {
            autoplayTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
        }
    }

    function updateSlideshowLabels() {
        const isEnglish = language() === 'en';
        if (prevBtn) prevBtn.setAttribute('aria-label', isEnglish ? 'Previous slide' : 'Předchozí snímek');
        if (nextBtn) nextBtn.setAttribute('aria-label', isEnglish ? 'Next slide' : 'Další snímek');
        if (playPauseBtn) {
            playPauseBtn.setAttribute('aria-label', isPaused
                ? (isEnglish ? 'Play slideshow' : 'Spustit prezentaci')
                : (isEnglish ? 'Pause slideshow' : 'Pozastavit prezentaci'));
        }
        dots.forEach((dot, index) => {
            dot.setAttribute('aria-label', isEnglish ? `Go to slide ${index + 1}` : `Přejít na snímek ${index + 1}`);
        });
    }

    function updatePlayPauseUI() {
        const icon = playPauseBtn?.querySelector('i');
        if (icon) icon.className = isPaused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
        updateSlideshowLabels();
    }

    prevBtn?.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startAutoplay();
    });

    nextBtn?.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startAutoplay();
    });

    playPauseBtn?.addEventListener('click', () => {
        isPaused = !isPaused;
        updatePlayPauseUI();
        if (isPaused) stopAutoplay();
        else startAutoplay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoplay();
        });
    });

    if (slideshowWrapper) {
        slideshowWrapper.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showSlide(currentSlide - 1);
                startAutoplay();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                showSlide(currentSlide + 1);
                startAutoplay();
            }
        });

        slideshowWrapper.addEventListener('mouseenter', stopAutoplay);
        slideshowWrapper.addEventListener('mouseleave', startAutoplay);
        slideshowWrapper.addEventListener('focusin', stopAutoplay);
        slideshowWrapper.addEventListener('focusout', event => {
            if (!slideshowWrapper.contains(event.relatedTarget)) startAutoplay();
        });
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
    });

    document.addEventListener('languagechange', updateSlideshowLabels);
    reducedMotion.addEventListener?.('change', event => {
        if (event.matches) {
            isPaused = true;
            stopAutoplay();
            updatePlayPauseUI();
        }
    });

    showSlide(0);
    updatePlayPauseUI();
    startAutoplay();

    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCurrentNum = document.getElementById('lightboxCurrentNum');
    const lightboxTotalNum = document.getElementById('lightboxTotalNum');

    let lightboxIndex = 0;
    let lightboxTrigger = null;

    if (lightboxTotalNum) lightboxTotalNum.textContent = String(galleryItems.length);

    function updateGalleryLabels() {
        const isEnglish = language() === 'en';
        const galleryLabels = isEnglish
            ? ['horizontal logo', 'stacked logo', 'monogram']
            : ['horizontální logo', 'vertikální logo', 'monogram'];
        galleryItems.forEach((item, index) => {
            item.setAttribute('aria-label', isEnglish
                ? `Enlarge ${galleryLabels[index] || `logo variant ${index + 1}`}`
                : `Zvětšit ${galleryLabels[index] || `variantu loga ${index + 1}`}`);
        });
        lightbox?.setAttribute('aria-label', isEnglish ? 'Image viewer' : 'Prohlížeč obrázků');
        lightboxClose?.setAttribute('aria-label', isEnglish ? 'Close image viewer' : 'Zavřít prohlížeč obrázků');
        lightboxPrev?.setAttribute('aria-label', isEnglish ? 'Previous image' : 'Předchozí obrázek');
        lightboxNext?.setAttribute('aria-label', isEnglish ? 'Next image' : 'Další obrázek');
    }

    document.addEventListener('languagechange', updateGalleryLabels);
    updateGalleryLabels();

    function updateLightboxImage() {
        const sourceImage = galleryItems[lightboxIndex]?.querySelector('img');
        if (!sourceImage || !lightboxImg) return;
        lightboxImg.src = sourceImage.currentSrc || sourceImage.src;
        lightboxImg.alt = sourceImage.alt;
        if (lightboxCurrentNum) lightboxCurrentNum.textContent = String(lightboxIndex + 1);
    }

    function openLightbox(index, trigger) {
        if (!lightbox || !lightboxImg || !galleryItems.length) return;
        lightboxIndex = index;
        lightboxTrigger = trigger;
        updateLightboxImage();
        lightbox.inert = false;
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.classList.add('active');
        document.body.classList.add('lightbox-open');
        lightboxClose?.focus();
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.inert = true;
        document.body.classList.remove('lightbox-open');
        lightboxTrigger?.focus();
    }

    function navigateLightbox(direction) {
        if (!galleryItems.length) return;
        lightboxIndex = (lightboxIndex + direction + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index, item));
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', event => {
        event.stopPropagation();
        navigateLightbox(-1);
    });
    lightboxNext?.addEventListener('click', event => {
        event.stopPropagation();
        navigateLightbox(1);
    });

    lightbox?.addEventListener('click', event => {
        if (event.target === lightbox || event.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', event => {
        if (!lightbox?.classList.contains('active')) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            navigateLightbox(-1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            navigateLightbox(1);
        } else if (event.key === 'Tab') {
            const focusable = Array.from(lightbox.querySelectorAll('button:not([disabled])'));
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        }
    });
});
