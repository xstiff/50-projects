all_el = document.querySelectorAll('.image');


all_el.forEach((x)=> {
    x.addEventListener('click', (y)=>{
        // console.log(y.target.id) // l1 l2 l3 l4
        //y.target.id 
        toggle(y.target.id)
    })
})


toggle = (num) => {
    _el = document.querySelector(`#${num}`);
    _el_text = _el.children[0]; // The <p> marker


    all_el.forEach((x)=> {
        x.classList.remove('active');
        x.children[0].classList.remove('active');
    });
    _el.classList.add('active')
    _el_text.classList.add('active')

}


document.onload = toggle('l1');