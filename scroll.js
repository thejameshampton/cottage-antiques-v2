const hn = document.getElementById('home-nav');
const an = document.getElementById('about-nav');
const tn = document.getElementById('tour-nav');
const cn = document.getElementById('contact-nav');
const hf = document.getElementById('home-footer');
const af = document.getElementById('about-footer');
const tf = document.getElementById('tour-footer');
const cf = document.getElementById('contact-footer');
const h = document.getElementById('carousel');
const a = document.getElementById('about-main');
const t = document.getElementById('tour-main');
const c = document.getElementById('contact-main');

const hScroll = () => {
    h.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
};

const aScroll = () => {
    a.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const tScroll = () => {
    t.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
};

const cScroll = () => {
    c.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
};

hn.addEventListener('click', hScroll);
hf.addEventListener('click', hScroll);
an.addEventListener('click', aScroll);
af.addEventListener('click', aScroll);
tn.addEventListener('click', tScroll);
tf.addEventListener('click', tScroll);
cn.addEventListener('click', cScroll);
cf.addEventListener('click', cScroll);