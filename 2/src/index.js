_cir = document.querySelectorAll('.circles');
_prog = document.querySelector('.progress')

let current = 1;

_cir.forEach((x)=>{
    
    x.addEventListener('click', (x)=>{
        toggle_cir(x);
    })
})

toggle_cir = (x) => {
    if (x==0 || x==5){
        return;
    }
    

    if (x == 1 || x == 2 || x == 3 || x == 4) {
         _temp = x
    } else (
        _temp = +x.target.innerText
    )

    _prev = document.querySelector("#prev");
    _next = document.querySelector("#next");
    if (_temp == 1) {
        _prev.disabled = true;
        _prev.classList.toggle('disabled');
    }
    else if (_temp == 4) {
        _next.disabled = true;
        _next.classList.toggle('disabled');
    }
    else if (_temp == 2 || _temp == 3) {

        _prev.disabled = false;
        _next.disabled = false;
        _prev.classList.remove('disabled');
        _next.classList.remove('disabled');
    }


    current = _temp;

    off_all();

    if (_temp == 1) {
        console.log('1')
        document.querySelector('.circles:nth-child(2)').classList.toggle('active');
        document.querySelector('.progress').style.width = '0%';
    }
    else if (_temp == 2) {
        document.querySelector('.circles:nth-child(2)').classList.toggle('active');
        document.querySelector('.circles:nth-child(3)').classList.toggle('active');
        document.querySelector('.progress').style.width = '30%';
    }
    else if (_temp == 3) {
        document.querySelector('.circles:nth-child(2)').classList.toggle('active');
        document.querySelector('.circles:nth-child(3)').classList.toggle('active');
        document.querySelector('.circles:nth-child(4)').classList.toggle('active');
        document.querySelector('.progress').style.width = '65%';
        
    }
    else if (_temp == 4) {
        document.querySelector('.circles:nth-child(2)').classList.toggle('active');
        document.querySelector('.circles:nth-child(3)').classList.toggle('active');
        document.querySelector('.circles:nth-child(4)').classList.toggle('active');
        document.querySelector('.circles:nth-child(5)').classList.toggle('active');
        document.querySelector('.progress').style.width = '100%';
    }

}


off_all = () => {
    _cir.forEach((x)=>{
        x.classList.remove('active')
    })
}


goPrev = () => {
    toggle_cir(current - 1);
}

goNext = () => {
    toggle_cir(current + 1);
}


toggle_cir(1);