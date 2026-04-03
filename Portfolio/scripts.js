/*typed js */
new Typed('#typed-text', {
    strings: ['Full Stack Developer', 'Java Backend Engineer', 'Python Developer', 'Spring Boot Enthusiast', 'Problem Solver', 'MCA Graduate'],
    loop: true, typeSpeed: 55, backSpeed: 28, backDelay: 1800
});

/*cursorr*/
const cur = document.getElementById('cursor');
const curR = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
(function animCursor() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    curR.style.left = rx + 'px'; curR.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
})();

/*scroll progress */
const sp = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    sp.style.width = (window.scrollY / h * 100) + '%';
});

/* scroll reveal*/
const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => revObs.observe(el));

/* counter animation */
const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting && !e.target.classList.contains('counted')) {
            e.target.classList.add('counted');
            const target = +e.target.dataset.count;
            let current = 0;
            const step = target / 50;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { e.target.textContent = target + '+'; clearInterval(timer); }
                else e.target.textContent = Math.floor(current);
            }, 30);
        }
    });
}, { threshold: 0.6 });
document.querySelectorAll('.astat-num[data-count]').forEach(el => countObs.observe(el));

/* active nav on click*/
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id'); });
    navAs.forEach(a => { a.classList.remove('active'); if (a.getAttribute('href') === '#' + current) a.classList.add('active'); });
});

/* mobile menu*/
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
});

/*back to top */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => { btt.classList.toggle('show', window.scrollY > 400); });
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* contact form*/
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const txt = document.getElementById('btnText');
    btn.classList.add('loading');
    txt.textContent = 'Sending...';
    setTimeout(() => {
        btn.classList.remove('loading');
        txt.textContent = 'Send Message';
        this.reset();
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }, 1500);
});

/*cv download */
document.getElementById('cv-btn').addEventListener('click', e => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-msg').textContent = 'Connecting to LinkedIn 🔗';
    toast.querySelector('.toast-sub').textContent = 'Connect with me for the latest CV!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
});

/* close nav on click*/
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});
 
