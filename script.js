// /* ==================== TYPING EFFECT ==================== */
// function changeAboutMeText() {
//     const aboutMeTexts = ["Frontend Developer", "MERN Stack Developer" , "Tech Enthusiast", "Innovative Developer"];
//     const typingSpeed = 100;
//     const eraseSpeed = 50;
//     const pauseTime = 1500;
//     const aboutMeElement = document.querySelector('.about-me');
//     if (!aboutMeElement) return;

//     let textIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;

//     function type() {
//         const currentText = aboutMeTexts[textIndex];
//         if (!isDeleting && charIndex < currentText.length) {
//             aboutMeElement.textContent += currentText[charIndex];
//             charIndex++;
//             setTimeout(type, typingSpeed);
//         } else if (isDeleting && charIndex > 0) {
//             aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
//             charIndex--;
//             setTimeout(type, eraseSpeed);
//         } else {
//             isDeleting = !isDeleting;
//             if (!isDeleting) {
//                 textIndex = (textIndex + 1) % aboutMeTexts.length;
//             }
//             setTimeout(type, pauseTime);
//         }
//     }
//     type();
// }

// /* ==================== PAGE LOADER ==================== */
// window.addEventListener('load', () => {
//     const loader = document.getElementById('page-loader');
//     if (loader) {
//         setTimeout(() => loader.classList.add('loaded'), 300);
//     }
// });

// /* ==================== DARK MODE ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const body = document.body;
//     if (!darkModeToggle) return;

//     if (localStorage.getItem('portfolio-theme') === 'dark') {
//         body.classList.add('dark-mode');
//         darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
//     }

//     darkModeToggle.addEventListener('click', () => {
//         body.classList.toggle('dark-mode');
//         const isDark = body.classList.contains('dark-mode');
//         darkModeToggle.querySelector('i').classList.toggle('fa-sun', isDark);
//         darkModeToggle.querySelector('i').classList.toggle('fa-moon', !isDark);
//         try {
//             localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
//         } catch (e) { /* storage unavailable */ }
//     });
// });

// /* ==================== NAV TOGGLE (MOBILE) ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const navToggle = document.getElementById('nav-toggle');
//     const navMenu = document.getElementById('nav-menu');
//     if (!navToggle || !navMenu) return;

//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });

//     navMenu.querySelectorAll('.nav-link').forEach(link => {
//         link.addEventListener('click', () => navMenu.classList.remove('active'));
//     });
// });

// /* ==================== NAVBAR SHRINK ON SCROLL + SCROLL PROGRESS ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const navbar = document.getElementById('navbar');
//     const progressBar = document.getElementById('scroll-progress');
//     const backToTop = document.getElementById('back-to-top');

//     function onScroll() {
//         const scrollTop = window.scrollY || document.documentElement.scrollTop;
//         const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

//         if (navbar) navbar.classList.toggle('scrolled', scrollTop > 40);
//         if (progressBar) progressBar.style.width = pct + '%';
//         if (backToTop) backToTop.classList.toggle('show', scrollTop > 400);
//     }
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();

//     if (backToTop) {
//         backToTop.addEventListener('click', () => {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });
//     }
// });

// /* ==================== CURSOR GLOW ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const glow = document.getElementById('cursor-glow');
//     if (!glow || window.matchMedia('(hover: none)').matches) return;

//     document.addEventListener('mousemove', (e) => {
//         glow.style.left = e.clientX + 'px';
//         glow.style.top = e.clientY + 'px';
//         glow.classList.add('active');
//     });
//     document.addEventListener('mouseleave', () => glow.classList.remove('active'));
// });

// /* ==================== SCROLL REVEAL ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const revealTargets = document.querySelectorAll('.reveal-up, .reveal-pop');
//     if (!revealTargets.length) return;

//     const revealObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view');
//                 revealObserver.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.15 });

//     revealTargets.forEach(el => revealObserver.observe(el));
// });

// /* ==================== ANIMATED SKILL PROGRESS BARS ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const progressObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const progressBar = entry.target.querySelector('.progress-bar');
//                 if (progressBar) {
//                     const progress = progressBar.dataset.progress;
//                     progressBar.style.setProperty('--progress', `${progress}%`);
//                     progressBar.classList.add('animated');
//                 }
//                 progressObserver.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.3 });

//     document.querySelectorAll('#programming-languages .skill').forEach(skill => {
//         progressObserver.observe(skill);
//     });
// });

// /* ==================== PROJECT CARD TILT ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     if (window.matchMedia('(hover: none)').matches) return;
//     const cards = document.querySelectorAll('.project-thumbnail');

//     cards.forEach(card => {
//         card.addEventListener('mousemove', (e) => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
//             const rotateX = ((y - centerY) / centerY) * -4;
//             const rotateY = ((x - centerX) / centerX) * 4;
//             card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
//         });
//         card.addEventListener('mouseleave', () => {
//             card.style.transform = '';
//         });
//     });
// });

// /* ==================== BUTTON RIPPLE EFFECT ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.btn.know-more').forEach(btn => {
//         btn.addEventListener('click', function (e) {
//             const rect = this.getBoundingClientRect();
//             const ripple = document.createElement('span');
//             const size = Math.max(rect.width, rect.height);
//             ripple.className = 'ripple';
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
//             ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
//             this.appendChild(ripple);
//             setTimeout(() => ripple.remove(), 600);
//         });
//     });
// });

// /* ==================== ACTIVE NAV LINK ON SCROLL ==================== */
// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-link');
//     if (!sections.length || !navLinks.length) return;

//     const navObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             const id = entry.target.getAttribute('id');
//             const link = document.querySelector(`.nav-link[href="#${id}"]`);
//             if (!link) return;
//             if (entry.isIntersecting) {
//                 navLinks.forEach(l => l.classList.remove('active-link'));
//                 link.classList.add('active-link');
//             }
//         });
//     }, { rootMargin: '-45% 0px -45% 0px' });

//     sections.forEach(sec => navObserver.observe(sec));
// });

// changeAboutMeText();
/* ==================== TYPING EFFECT ==================== */
function changeAboutMeText() {
    const aboutMeTexts = ["Frontend Developer", "MERN Stack Developer" , "Tech Enthusiast", "Innovative Developer"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');
    if (!aboutMeElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}

/* ==================== PAGE LOADER ==================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => loader.classList.add('loaded'), 300);
    }
});

/* ==================== DARK MODE ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    if (!darkModeToggle) return;

    if (localStorage.getItem('portfolio-theme') === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        darkModeToggle.querySelector('i').classList.toggle('fa-sun', isDark);
        darkModeToggle.querySelector('i').classList.toggle('fa-moon', !isDark);
        try {
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
        } catch (e) { /* storage unavailable */ }
    });
});

/* ==================== NAV TOGGLE (MOBILE) ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
});

/* ==================== NAVBAR SHRINK ON SCROLL + SCROLL PROGRESS ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    function onScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (navbar) navbar.classList.toggle('scrolled', scrollTop > 40);
        if (progressBar) progressBar.style.width = pct + '%';
        if (backToTop) backToTop.classList.toggle('show', scrollTop > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

/* ==================== CURSOR GLOW ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const glow = document.getElementById('cursor-glow');
    if (!glow || window.matchMedia('(hover: none)').matches) return;

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('active'));
});

/* ==================== SCROLL REVEAL ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const revealTargets = document.querySelectorAll('.reveal-up, .reveal-pop');
    if (!revealTargets.length) return;

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => revealObserver.observe(el));
});

/* ==================== ANIMATED SKILL PROGRESS BARS ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.dataset.progress;
                    progressBar.style.setProperty('--progress', `${progress}%`);
                    progressBar.classList.add('animated');
                }
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('#programming-languages .skill').forEach(skill => {
        progressObserver.observe(skill);
    });
});

/* ==================== PROJECT CARD TILT ==================== */
document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(hover: none)').matches) return;
    const cards = document.querySelectorAll('.project-thumbnail');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

/* ==================== BUTTON RIPPLE EFFECT ==================== */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn.know-more').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

/* ==================== ACTIVE NAV LINK ON SCROLL ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active-link'));
                link.classList.add('active-link');
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(sec => navObserver.observe(sec));
});

/* ==================== PROJECT DETAILS DIALOG ==================== */
document.addEventListener('DOMContentLoaded', function () {
    const dialogs = document.querySelectorAll('dialog.project-dialog');
    if (!dialogs.length) return;

    // A Live Demo / GitHub button only shows once it has a URL
    document.querySelectorAll('.project-dialog .project-link').forEach(link => {
        if (!link.getAttribute('href')) link.hidden = true;
    });
    // ...and if a project has neither, drop the empty row
    document.querySelectorAll('.project-dialog .dialog-links').forEach(row => {
        if (!row.querySelector('.project-link:not([hidden])')) row.hidden = true;
    });

    function setHash(value) {
        try {
            history.replaceState(null, '', value || (location.pathname + location.search));
        } catch (e) { /* ignore */ }
    }

    function openProject(id) {
        const dlg = document.getElementById('project-' + id);
        if (!dlg || dlg.open) return;
        if (typeof dlg.showModal === 'function') dlg.showModal();
        else dlg.setAttribute('open', '');
        document.body.classList.add('dialog-open');
        const scroller = dlg.querySelector('.dialog-scroll');
        if (scroller) scroller.scrollTop = 0;
        setHash('#project-' + id);
    }

    dialogs.forEach(dlg => {
        const closeBtn = dlg.querySelector('.dialog-close');
        if (closeBtn) closeBtn.addEventListener('click', () => dlg.close());

        // click on the dimmed backdrop closes it
        dlg.addEventListener('click', e => {
            if (e.target === dlg) dlg.close();
        });

        // fires for the X button, Escape and backdrop clicks alike
        dlg.addEventListener('close', () => {
            document.body.classList.remove('dialog-open');
            if (location.hash === '#' + dlg.id) setHash('');
        });
    });

    document.querySelectorAll('[data-project]').forEach(btn => {
        btn.addEventListener('click', () => openProject(btn.dataset.project));
    });

    // a link like yoursite.com/#project-edtech opens that project directly
    if (location.hash.startsWith('#project-')) {
        openProject(location.hash.slice('#project-'.length));
    }
});

changeAboutMeText();
