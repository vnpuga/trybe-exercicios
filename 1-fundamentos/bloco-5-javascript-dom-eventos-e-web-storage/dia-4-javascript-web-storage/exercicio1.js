window.onload = function(){  //p/q o código só seja executado após a pg ser carregada
  let select = document.querySelector('#colorSelect');
  select.addEventListener('change', function(){ //add evento de mudança, p/mudar a cor
    let selected = select.selectedOptions[0]; //selectedOptions traz HTML Collection ('array'), e como só selecionamos uma cor, ela sempre será posição 0.
    console.log(select.selectedOptions);
    document.body.style.backgroundColor = select.value; //essa string (texto) encontra-se no value da selectedOptions.
  });

  let inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener('change', function(){
    let p = document.querySelector('p');
    p.style.fontSize = '${inputFontSize.value}px'; //dessa forma atribuimos a variavel uma unidade de medida, que é pixel.
  })
}