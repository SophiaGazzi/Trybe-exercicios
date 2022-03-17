function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let paiUl = document.getElementById('days');
function daysList() {

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        day = dayItem;
        day.className = 'days';
        day = paiUl.appendChild(day);


        if (day === 24 || day === 25 || day === 31) {
            day.className = 'holiday';
            dayItem.innerHTML = day;
        }
        if (day === 4 || day === 11 || day === 18 || day === 25) {
            day.className = 'friday ';
            dayItem.innerHTML = day;
        }
    }
}
daysList();

//2
function holidays(feriados) {
    let botaoPai = document.querySelector('.buttons-container');
    let botaoNew = document.createElement('button');
    let newButtonID = 'btn-holiday';

    botaoNew.innerHTML = feriados;
    botaoNew.id = newButtonID;
    botaoPai.appendChild(botaoNew);

}
holidays('Feriados');

//3
let holidayButton = document.querySelector('#btn-holiday');
let daysHoliday = document.querySelectorAll('.holiday');
let backgroundColor = "rgb(238,238,238)";
let reverseColor = 'white';

holidayButton.addEventListener("click", buttonChangeColor);
function buttonChangeColor() {

    for (let index = 0; index < daysHoliday.length; index += 1) {
        if (daysHoliday[index].style.backgroundColor === reverseColor) {
            daysHoliday[index].style.backgroundColor = backgroundColor;
        }

        if (daysHoliday[index].style.backgroundColor === backgroundColor) {
            daysHoliday[index].style.backgroundColor = reverseColor;
        }
        else {
            daysHoliday[index].style.backgroundColor = reverseColor;
        }


    }
}

//4
function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

//5 

function displayFriday(arrayFriday) {
    let buttonFriday = document.querySelector('#btn-friday');
    let textFriday = 'Sextou o/';
    let fridayDay = document.getElementsByClassName('friday');

    buttonFriday.addEventListener('click', function () {

        for (let index = 0; index < fridays.length; index += 1) {

            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;
            } else {
                fridays[index].innerHTML = fridaysArray[index];
            }
        }
    }
    )
  }



