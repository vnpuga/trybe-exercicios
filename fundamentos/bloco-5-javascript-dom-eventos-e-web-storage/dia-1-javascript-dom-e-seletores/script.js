let colorHeader = document.getElementById('header-container');
colorHeader.style.backgroundColor = 'blue';

let colorUrgente = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < colorUrgente.length; index += 1) {
    colorUrgente[index].style.backgroundColor = 'rgb(115, 88, 139)';
}

let colorNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < colorNaoUrgente.length; index += 1) {
    colorNaoUrgente[index].style.backgroundColor = 'rgb(103, 112, 18)';
}

let backColorUrgente = document.getElementsByClassName('emergency-tasks')[0];
backColorUrgente.style.backgroundColor = 'rgb(133, 133, 67)';

let backColorNaoUrgente = document.getElementsByClassName('no-emergency-tasks')[0];
backColorNaoUrgente.style.backgroundColor = 'rgb(172, 124, 168)';

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';

