class Active {
    constructor(obj) {
        this.function = document.querySelectorAll(obj.function);

        console.log('what');

        this.function.forEach(element => {
            console.log(element);
            element.addEventListener('mouseover', () => this.addRemoveActiveClass('add'));
            element.addEventListener('mouseleft', () => this.addRemoveActiveClass('remove'));
        });
    }

    addRemoveActiveClass(move) {

        console.log('what');

        if(move == 'add'){
            this.function.style.display = 'flex'
        } else if(move == 'remove'){
            this.function.style.display = 'none'
        }
    }
}

const addRemove = new Active ({
    function: '.main__card-img'
})