function calcular() {
  var nome = document.querySelector("#textoNome");
  var nota1 = document.querySelector("#textoNota1");
  var nota2 = document.querySelector("#textoNota2");
  var nota3 = document.querySelector("#textoNota3");
  var nota4 = document.querySelector("#textoNota4");

  var nomeValor = nome.value;
  var notaNumero1 = Number(nota1.value);
  var notaNumero2 = Number(nota2.value);
  var notaNumero3 = Number(nota3.value);
  var notaNumero4 = Number(nota4.value);

  var media = (notaNumero1 + notaNumero2 + notaNumero3 + notaNumero4) / 4;

  var paragrafo = document.querySelector("#paragrafoNota");
  var res = document.querySelector("#res");

  paragrafo.innerHTML = `${nomeValor} Sua média é <strong>${media}</strong>`;

  if (media >= 7) {
    res.innerHTML = "Parabéns! <br> Você está <strong>Aprovado!</strong>";
    res.style.color = "green";
  } else {
    if (media >= 5) {
      res.innerHTML = "Você está de <strong>Recuperação!</strong>";
      res.style.color = "gray";
    } else {
      res.innerHTML = "Infelizmente você <strong>não Passou!</strong>";
      res.style.color = "red";
    }
  }
}
