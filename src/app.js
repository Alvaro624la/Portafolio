import './modulos/bootstrap';

import {UPBTN} from './modulos/variables'

UPBTN.addEventListener('click', subir);
function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
}