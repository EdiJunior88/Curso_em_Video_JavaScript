
function contador() {
  var contInicio = parseInt(document.getElementById('inicio').value)
  var contFim = parseInt(document.getElementById('fim').value)
  var contPasso = parseInt(document.getElementById('passo').value)


  /* var contResultado = contInicio + contPasso
  document.getElementById('resultado').innerText = contResultado */

/*   while(contInicio < contFim) {
    document.getElementById('resultado').innerText += contInicio
    contInicio += 2
  } */

  for(var x = contInicio; x < contFim; x = contPasso) {
    var contResultado = contInicio + contPasso
    document.getElementById('resultado').innerText += contResultado
  }

}