// ═══════════════════════════════════════
// Logo Manual Page — JavaScript
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════
    // Slideshow with Autoplay controls & hover/focus pause
    // ══════════════════════
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const slideCurrentNum = document.getElementById('slideCurrentNum');
    let current = 0;
    let autoplayTimer = null;
    let isPaused = false;

    function showSlide(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        if (slideCurrentNum) slideCurrentNum.textContent = current + 1;
    }

    function startAutoplay() {
        stopAutoplay();
        if (!isPaused) {
            autoplayTimer = setInterval(() => showSlide(current + 1), 4000);
        }
    }

    function stopAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { showSlide(current - 1); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { showSlide(current + 1); startAutoplay(); });

    // Play/Pause Toggle
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = playPauseBtn.querySelector('i');
            if (isPaused) {
                stopAutoplay();
                if (icon) icon.className = 'fa-solid fa-play';
                playPauseBtn.setAttribute('aria-label', 'Play slideshow');
            } else {
                isPaused = false;
                startAutoplay();
                if (icon) icon.className = 'fa-solid fa-pause';
                playPauseBtn.setAttribute('aria-label', 'Pause slideshow');
            }
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
            startAutoplay();
        });
    });

    // Keyboard support (only if focus is inside slideshow wrapper)
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');
    if (slideshowWrapper) {
        slideshowWrapper.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); showSlide(current - 1); startAutoplay(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); showSlide(current + 1); startAutoplay(); }
        });

        // Pause autoplay when hovering or focusing on slideshow
        slideshowWrapper.addEventListener('mouseenter', () => {
            stopAutoplay();
        });
        slideshowWrapper.addEventListener('mouseleave', () => {
            startAutoplay();
        });
        slideshowWrapper.addEventListener('focusin', () => {
            stopAutoplay();
        });
        slideshowWrapper.addEventListener('focusout', () => {
            startAutoplay();
        });
    }

    startAutoplay();


    // ══════════════════════
    // Gallery Lightbox & Keyboard Access
    // ══════════════════════
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCurrentNum = document.getElementById('lightboxCurrentNum');
    const lightboxTotalNum = document.getElementById('lightboxTotalNum');
    let lightboxIndex = 0;
    const galleryList = Array.from(galleryImages);

    if (lightboxTotalNum) lightboxTotalNum.textContent = galleryList.length;

    function openLightbox(index) {
        lightboxIndex = index;
        lightboxImg.src = galleryList[index].src;
        lightboxImg.alt = galleryList[index].alt;
        if (lightboxCurrentNum) lightboxCurrentNum.textContent = index + 1;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Accessibility: Shift focus to lightbox close button
        if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        // Accessibility: Return focus to the clicked gallery item
        if (galleryList[lightboxIndex]) {
            galleryList[lightboxIndex].parentElement.focus();
        }
    }

    function lightboxNavigate(direction) {
        lightboxIndex = (lightboxIndex + direction + galleryList.length) % galleryList.length;
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.9)';
        setTimeout(() => {
            lightboxImg.src = galleryList[lightboxIndex].src;
            lightboxImg.alt = galleryList[lightboxIndex].alt;
            if (lightboxCurrentNum) lightboxCurrentNum.textContent = lightboxIndex + 1;
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 200);
    }

    galleryImages.forEach((img, i) => {
        const parent = img.parentElement;
        // Keyboard accessibility hooks:
        parent.setAttribute('tabindex', '0');
        parent.setAttribute('role', 'button');
        parent.setAttribute('aria-label', `Zvětšit obrázek ${i + 1}: ${img.alt || 'Designový prvek'}`);

        parent.addEventListener('click', () => openLightbox(i));
        parent.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(i);
            }
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); lightboxNavigate(-1); });
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); lightboxNavigate(1); });

    // Click backdrop to close
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation and focus trap for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxNavigate(-1);
        if (e.key === 'ArrowRight') lightboxNavigate(1);

        // Focus trap: keep Tab within the lightbox
        if (e.key === 'Tab') {
            const focusable = lightbox.querySelectorAll('button');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    });


    // ══════════════════════
    // Intersection Observer for fade-in
    // ══════════════════════
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        observer.observe(section);
    });

});
