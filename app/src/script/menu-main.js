try{
    const slider = document.querySelectorAll('.main__card-slider'),
    slide = document.querySelectorAll('.main__card-slide'),
    btn = document.querySelectorAll('.main__card-btn'),
    left = document.querySelector('.main__card-left');

let direction = 'X',
    width = left.clientWidth,
    height = left.clientHeight,
    moveSize = direction == 'X' ? width : height,
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

    if(i != activeSlide) {
        slide[i].style.transform = `translate${direction}(${moveSize}px)`;
    }

    if(i == slide.length - 1){
        slide[i].style.transform =`translate${direction}(${-moveSize}px)`;
    }
}



for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        let atr = btn[i].getAttribute('data-atr');

        for(let i = 0; i < btn.length; i++){
            if(i < atr){
                slide[i].style.transform = `translate${direction}(${-moveSize}px)`;
            }else if(i > atr){
                slide[i].style.transform = `translate${direction}(${moveSize}px)`;
            }
        }

        slide[atr].style.transform = `translate${direction}(0px)`;
        slide[atr].style.transition = '1000ms';

        for(let i = 0; i  < btn.length; i++){
            btn[i].classList.remove('active')
        }
        btn[i].classList.add('active');

    })

    slider.forEach(element => {
        element.style = `
        height: 100%;
        overflow: hidden;
        position: relative;
    `
    })
}
}catch(error){
    console.log(error);
}