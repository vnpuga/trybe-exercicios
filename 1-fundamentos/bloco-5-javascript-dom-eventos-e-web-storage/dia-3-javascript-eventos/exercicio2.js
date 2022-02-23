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

// // Escreva seu código abaixo.

//exercicio1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  let fatherElement = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let createDay = document.createElement('li');

    if (day === 24 || day === 31) {
      createDay.classname = 'day holiday';
      createDay.innerHTML = day;
      fatherElement.appendChild(createDay);
    } else if (day === 4 || day === 11 || day === 18){
      createDay.classname = 'day friday';
      createDay.innerHTML = day;
      fatherElement.appendChild(createDay);
    } else if (day === 25){
      createDay.className = 'day holiday friday';
      createDay.innerHTML = day;
      fatherElement.appendChild(createDay);
    } else {
      createDay.className = 'day';
      createDay.innerHTML = day;
      fatherElement.appendChild(createDay);
    }
    } 
}
calendarDays();

//exercicio2
function botaoFeriado (nomeDoBotao){
  let getButtonsContainer = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.id = 'btn-holiday';
  createButton.innerHTML = nomeDoBotao;
  getButtonsContainer.appendChild(createButton);
}
botaoFeriado('feriados');

//exercicio3 //gabarito
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();

//exercicio4
function fridayButton (string) {
  let getButtonsContainer = document.querySelector('.buttons-container');
  let createFridayButton = document.createElement('button');
  createFridayButton.id = 'btn-friday';
  createFridayButton.innerHTML = string;
  getButtonsContainer.appendChild(createFridayButton);
}
fridayButton('Sexta-feira');  

//exercicio5 //gabarito e não está funcionando direito
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  let fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

//exercicio6 gabarito
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

//exercicio7
function tasks(string){
  let myTask = document.querySelector('.my-tasks');  let createTask = document.createElement('span');
  createTask.innerHTML = string;
  myTask.appendChild(createTask);
}
tasks('estudar');

//exercicio8
function legenda(cor){
  let myTask = document.querySelector('.my-tasks');
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = cor;
  myTask.appendChild(newDiv);
}
legenda('blue');

//exercicio9
function eventDiv(){
  let divTask = document.querySelector('.task'); //div recuperada
  divTask.addEventListener('click', selected); //add evento de click
}
function selected(event){
  if(event.target.className !== 'task selected'){ 
    event.target.className = 'task selected'
  } else if (event.target.className === 'task selected'){
    event.target.className = 'task';
  }
}
eventDiv();

//exercicio10 //abaixo meu codigo, que só colocou a cor azul, mas não fez retorno
function corLegenda(){
  let days = document.querySelector('#days'); //elemento recuperado
  days.addEventListener('click', cor); //add evento de click
}
function cor(event){
  if(event.target.style.backgroundColor !== 'blue'){
    event.target.style.backgroundColor = 'blue';
  }else if (event.target.backgroundColor === 'blue'){
    event.target.style.backgroundColor = 'rgb(119,119,119)'
  }
}
corLegenda()