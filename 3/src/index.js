const menu_btn = document.querySelector('.burger');

const cont = document.querySelector('.content');

const cir = document.querySelector('.circle');

const ex = document.querySelector('.x-close');

const list_els = document.querySelectorAll('.list-el');


menu_btn.addEventListener('click',
() => {
    // x.target
    toggle();
}
);
ex.addEventListener('click',
() => {
    // x.target
    toggle();
}
);


toggle = () => {
    cont.classList.toggle('open');
    cir.classList.toggle('open');
    list_els.forEach((x)=>{
        x.classList.toggle('open');
    })

};