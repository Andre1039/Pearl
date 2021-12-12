const slider = document.querySelector('.main__card-slider '),
    slide = document.querySelectorAll('.main__card-slide'),
    btn = document.querySelector('.main__card-btn'),
    right = document.querySelector('.main__card-right');

let direction = 'X',
    width = right.clientWidth;
    height = right.clientHeight;
    moveSize = direction == 'X' ? width : height;
    activeSlide = 0;

    slider.style = `
        height: 100%;
        overflow: hidden;
        position: relative;
    `

for(let i = 0; i < slide.length; i++) {
    slide[i].style = `
        position: absolute;
        width: ${this.width}px;
        height: ${this.height}px;
    `

    if(i != this.activeSlide) {
        slide[i].style.transform = `translate${direction}(${moveSize}px)`;
    }

    if(i === slide.length - 1) {
        slide[i].style.transform = `translate${direction}(${-moveSize}px)`;
    }
}

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => move())
}

// function move () {
//     for(let i = 0; i < slide.length; i++) {
//         slide[i].style.transition = '0ms';
//         if(i != activeSlide) {
//         this.slide[i].style.transform = `translate${direction}(${rightOrLeft * -1}px)`;
//         }
//     }

//     slide[activeSlide].style.transform = `translate${direction}(${rightOrLeft}px)`;
//     slide[activeSlide].style.transition = '1000ms';

//     for(let i = 0; i  < btn.length; i++){
//         btn[i].classList.remove('active')
//     }
//     btn[i].classList.add('active');

// }

// function move (btn) {
//     let rightOrLeft = btn == next ? moveSize * -1 : moveSize;

//     for(let i = 0; i < slide.length; i++) {
//         slide[i].style.transition = '0ms';
//         if(i != activeSlide) {
//             this.slide[i].style.transform = `translate${direction}(${rightOrLeft * -1}px)`;
//         }
//     }
//     console.log(slide);

//     slide[activeSlide].style.transform = `translate${direction}(${rightOrLeft}px)`;
//     slide[activeSlide].style.transition = '1000ms';

//     if(btn == next) {
//         activeSlide++;
//         if(activeSlide >= slide.length){
//             activeSlide = 0;
//         }
//     }else if(btn == prev) {
//         activeSlide--;
//         if(activeSlide < 0) {
//             activeSlide = slide.length -1;
//         }
//     }
// }

console.log(btn);

// btn.forEach(element => {
//     element.addEventListener('click', () => {
//         for(let i = 0; i < btn.length; i++) {
//             btn[i].classList.remove('active');
//         }

//         element.classList.add('active');
//     })
// });