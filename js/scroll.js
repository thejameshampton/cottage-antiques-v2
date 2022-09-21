//Grabbing the nav bar buttons
const hn = document.getElementById('navbar__home');
const an = document.getElementById('navbar__about');
const tn = document.getElementById('navbar__tour');
const cn = document.getElementById('navbar__contact');

//Grabbing the footer buttons
const hf = document.getElementById('footer__home');
const af = document.getElementById('footer__about');
const tf = document.getElementById('footer__tour');
const cf = document.getElementById('footer__contact');

//Grabbing the area of the page to scroll to
const h = document.getElementById('carousel');
const a = document.getElementById('about');
const t = document.getElementById('tour');
const c = document.getElementById('contact');

//Creates functions to scroll the the correct part
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

//Adds the correct event listeners
hn.addEventListener('click', hScroll);
hf.addEventListener('click', hScroll);
an.addEventListener('click', aScroll);
af.addEventListener('click', aScroll);
tn.addEventListener('click', tScroll);
tf.addEventListener('click', tScroll);
cn.addEventListener('click', cScroll);
cf.addEventListener('click', cScroll);