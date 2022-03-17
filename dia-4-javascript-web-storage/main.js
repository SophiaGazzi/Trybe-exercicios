window.onload = function (){

    let select = document.querySelector('select');
    select.addEventListener("change", function(){
     let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('BGColor', selected.value);
    })

    let selectCorLetra = document.querySelector('#corLetra');
    selectCorLetra.addEventListener("change", function(){
        let selectedLetra = selectCorLetra.selectedOptions[0];
        document.body.style.color = selectedLetra.value;
        localStorage.setItem('FontColor', selectedLetra.value);
    })

    let fontSize = document.querySelector('input[name="fontSize"]');
    fontSize.addEventListener('change',function(){
        let paragrafo = document.querySelector('p');
        paragrafo.style.fontSize = `${fontSize.value}px`;
        localStorage.setItem('fontSize',`${fontSize.value}px`);
    })

    let saveBGColor = localStorage.getItem('BGColor');
    let saveCorLetra = localStorage.getItem('FontColor');
    let saveFontSize = localStorage.getItem('fontSize');

    document.body.style.backgroundColor = saveBGColor;
    document.body.style.color = saveCorLetra;
    document.body.style.fontSize = saveFontSize;
};