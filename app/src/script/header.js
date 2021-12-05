class Menu {
    constructor(obj) {
        this.menu = document.querySelector(obj.menu);
        this.btn = document.querySelector(obj.btn);
        this.header = document.querySelector(obj.header)
        this.headerHover = document.querySelector(obj.headerHover);
        this.content = document.querySelector(obj.content);

        this.btn.addEventListener('click', () => this.showOrHide(this.btn));
        this.headerHover.addEventListener('click', () => this.showOrHide(this.headerHover));

        this.width = this.header.clientWidth - this.menu.clientWidth;
        this.height = this.header.clientHeight;

        this.headerHover.style = `
            width: ${this.width}px;
            height: ${this.height}px;
            display: none;
            position: absolute;
            top: 0;
            right: 0;
        `
    }

    showOrHide(element) {
        if(element == this.btn) {
            this.menu.style.left = '0';
            this.content.style.display = 'none';
            this.headerHover.style.display = 'block';
        }else if(element == this.headerHover) {
            this.menu.style.left = '-100%';
            this.content.style.display = 'flex';
            this.headerHover.style.display = 'none';
        }
        
    }
}

const menu = new  Menu({
    menu: '.header__menu ',
    btn: '.header__menu-btn',
    headerHover: '.header__hover',
    content: '.header__content',
    header: '.header'
})