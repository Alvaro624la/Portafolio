import './modulos/bootstrap';

import {UPBTN} from './modulos/variables'

UPBTN.addEventListener('click', subir);
function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
}

// Ver posicion del scroll para aparecer UPBTN (posicion 1000 aparecer)
window.addEventListener('scroll', scroll);
function scroll(){
    console.log(scrollY);
    if(scrollY <= 999){
        UPBTN.classList.add('scroll-up-out');
        // UPBTN.style.display = 'none';
    } else {
        UPBTN.classList.remove('scroll-up-out');
        // UPBTN.style.display = 'block';
    }
}
