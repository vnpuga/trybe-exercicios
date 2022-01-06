function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let option = document.createElement('option');
      option.innerText = stateOptions[index];
      option.value = stateOptions[index];
      states.appendChild(option);
    }
  }
  createStateOptions();

// biblioteca Pikaday
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

// botão
  const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}
clearButton.addEventListener('click', clearFields);
  

  // biblioteca Just-Validate
const validate = new window.JustValidate('#cv-form');
validate
.addField('#name', [
  {
  rule: 'minLength',
  value: 3,
  errorMessage: 'Esse campo requer um mínimo de 3 caracteres',
  },
  {
  rule: 'maxLength',
  value: 30,
  },
]);
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Email é obrigatório',
  },
  {
    rule: 'email',
    errorMessage: 'Email é inválido',
  },
]);
.addField('#cpf-number', [
  {
    rule: 'maxLength',
    valeu: 11,
  }
]);