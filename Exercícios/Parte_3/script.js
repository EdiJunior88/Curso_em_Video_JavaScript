function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if(fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[ERRO] Verifique os dadoos e tente novamente')
  }
  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked) {
      gênero = 'Homem'

      if(idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/bebe_m.png')
      }
      else if(idade < 21) {
        //Jovem
        img.setAttribute('src', 'img/jovem_m.png')
      }
      else if(idade < 50) {
        //Adulto
        img.setAttribute('src', 'img/adulto_m.png')
      }
      else {
        //Idoso
        img.setAttribute('src', 'img/idoso_m.png')
      }
    }
    else if(fsex[1].checked) {
      gênero = 'Mulher'

      if(idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/bebe_f.png')
      }
      else if(idade < 21) {
        //Jovem
        img.setAttribute('src', 'img/jovem_f.png')
      }
      else if(idade < 50) {
        //Adulto
        img.setAttribute('src', 'img/adulto_f.png')
      }
      else {
        //Idoso
        img.setAttribute('src', 'img/idoso_f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}