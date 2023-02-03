function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value > ano)) {
    alert("ERRO! Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var sexo = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Homem";
      sexo = "um";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "bebemenino.png");
      } else if (idade < 21) {
        // Homem Jovem
        img.setAttribute("src", "jovemmenino.png");
      } else if (idade < 50) {
        // Homem Adulto
        img.setAttribute("src", "homemadulto.png");
      } else {
        // Idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      sexo = "uma";

      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "bebemenina.png");
      } else if (idade < 21) {
        // Mulher Jovem
        img.setAttribute("src", "jovemmenina.png");
      } else if (idade < 50) {
        // Mulher Adulta
        img.setAttribute("src", "mulheradulta.png");
      } else {
        // Idosa
        img.setAttribute("src", "idosa.png");
      }
    }
    
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${sexo} ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
