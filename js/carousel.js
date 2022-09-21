const s1 = document.getElementById('carousel__slide-1');
const s2 = document.getElementById('carousel__slide-2');
const s3 = document.getElementById('carousel__slide-3');
const s4 = document.getElementById('carousel__slide-4');
const s5 = document.getElementById('carousel__slide-5');
const s6 = document.getElementById('carousel__slide-6');
const s7 = document.getElementById('carousel__slide-7');
const s8 = document.getElementById('carousel__slide-8');
const s9 = document.getElementById('carousel__slide-9');
const s10 = document.getElementById('carousel__slide-10');

const r1 = document.getElementById('rd1')
const r2 = document.getElementById('rd2');
const r3 = document.getElementById('rd3');
const r4 = document.getElementById('rd4');
const r5 = document.getElementById('rd5');
const r6 = document.getElementById('rd6');
const r7 = document.getElementById('rd7');
const r8 = document.getElementById('rd8');
const r9 = document.getElementById('rd9');
const r10 = document.getElementById('rd10');

const left = document.getElementById('carousel__controls__left');
const right = document.getElementById('carousel__controls__right');
const sect = document.getElementById('carousel__controls');

const sArray = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
const rArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

let indexPreviouslyChecked = 0;
let timeOut;

s1.style.opacity = 1;

const animateRight = indexChecked => {
    sArray[indexChecked].style.opacity = 1; 
    sArray[indexPreviouslyChecked].style.opacity = 0;
    indexPreviouslyChecked = indexChecked;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
        goRight();
    }, 5000);
}

const animateLeft = indexChecked => {
    sArray[indexChecked].style.opacity = 1; 
    sArray[indexPreviouslyChecked].style.opacity = 0;
    indexPreviouslyChecked = indexChecked;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
        goRight();
    }, 5000);
}

timeOut = setTimeout(() => {
    goRight();
}, 5000)

const goLeft = () => {
    let indexChecked = indexPreviouslyChecked !== 0 ? indexPreviouslyChecked - 1 : sArray.length - 1;
    rArray[indexChecked].checked = true;
    animateLeft(indexChecked);
}

const goRight = () => {
    let indexChecked = indexPreviouslyChecked !== sArray.length - 1 ? indexPreviouslyChecked + 1 : 0;
    rArray[indexChecked].checked = true;
    animateRight(indexChecked);
}

const handleImageChange = () => {
    let indexChecked;
    for(let i = 0; i < rArray.length; i++) {
        if(rArray[i].checked) {
            indexChecked = i;
        }
    }
    let leftDifference;
    let rightDifference;
    if(indexChecked > indexPreviouslyChecked) {
        leftDifference = indexChecked - indexPreviouslyChecked;
        rightDifference = indexPreviouslyChecked + sArray.length - indexChecked;
    } else {
        leftDifference = indexChecked + sArray.length - indexPreviouslyChecked;
        rightDifference = indexPreviouslyChecked - indexChecked;
    }

    if(indexChecked !== indexPreviouslyChecked && leftDifference < rightDifference) {
        animateRight(indexChecked);
    } else if(indexChecked !== indexPreviouslyChecked) {
        animateLeft(indexChecked);
    }
}


right.onclick = goRight;
left.onclick = goLeft;
sect.onchange = handleImageChange;