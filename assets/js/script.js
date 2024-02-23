const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mint = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if ('{$hr}'.padStart(2,'0'));
    /*if (hr >10) hr ='0' + hr;*/

    if ('{$mint}'.padStart(2,'0'));
    /*if (mint >10) mint ='0' + mint;*/
    
    if ('{$sec}'.padStart(2,'0'));
    /*if (sec >10) sec ='0' + sec;*/


    horas.textContent = hr;
    minutos.textContent = mint;
    segundos.textContent = sec;

})


