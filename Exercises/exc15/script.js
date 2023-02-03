function updateClock() {
  var msg = window.document.getElementById("msg");
  var msg2 = window.document.getElementById("msg2");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var sec = data.getSeconds();
  hora = (hora < 10 ? "0" : "") + hora;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;
  msg.innerHTML = `${hora}h : ${min}m : ${sec}s`;

  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "manha.png";
    msg2.innerHTML = `<h3>Bom Dia Flor do Dia!</h3>`;
    document.body.style.background = "#687379";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "tarde.png";
    msg2.innerHTML = `<h3>Boa Tarde</h3>`;
    document.body.style.background = "#ffb500";
  } else {
    // Boa noite
    img.src = "noite.png";
    msg2.innerHTML = `<h3>Boa Noite</h3>`;
    document.body.style.background = "#062631";
  }
}
setInterval(updateClock, 1000);
