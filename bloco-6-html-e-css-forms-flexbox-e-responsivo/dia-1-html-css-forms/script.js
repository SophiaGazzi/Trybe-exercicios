let form = document.querySelector('.speaker-form');
let buttonSend = document.querySelector('#botão');

function send (event){

    event.presentDefaul();

    console.log(form.value);
    form.innerHTML = form.value;

}

buttonSend.addEventListener('click',send);


