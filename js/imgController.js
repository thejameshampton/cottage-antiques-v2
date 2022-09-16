const p1 = document.getElementById('tour__picture-1');
const p2 = document.getElementById('tour__picture-2');
const p3 = document.getElementById('tour__picture-3');
const p4 = document.getElementById('tour__picture-4');
const p5 = document.getElementById('tour__picture-5');
const p6 = document.getElementById('tour__picture-6');
const mainImage = document.getElementById('tour__main-img');

const replaceImage = e => {
    if(e.target.src) {
        mainImage.src = e.target.src;
    } else {
        mainImage.src = e.target.querySelector('img').src;
    }
}

p1.onclick = replaceImage;
p2.onclick = replaceImage;
p3.onclick = replaceImage;
p4.onclick = replaceImage;
p5.onclick = replaceImage;
p6.onclick = replaceImage;