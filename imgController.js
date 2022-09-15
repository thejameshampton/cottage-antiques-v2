const p1 = document.getElementById('p1').querySelector('img');
const p2 = document.getElementById('p2').querySelector('img');
const p3 = document.getElementById('p3').querySelector('img');
const p4 = document.getElementById('p4').querySelector('img');
const p5 = document.getElementById('p5').querySelector('img');
const p6 = document.getElementById('p6').querySelector('img');
const mainImage = document.getElementById('main-img');

const replaceImage = e => mainImage.src = e.target.src;

p1.onclick = replaceImage;
p2.onclick = replaceImage;
p3.onclick = replaceImage;
p4.onclick = replaceImage;
p5.onclick = replaceImage;
p6.onclick = replaceImage;