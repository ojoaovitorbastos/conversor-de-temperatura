function converter() {
  var valor = document.getElementById("txttemp");
  var temp = Number(valor.value);
  var escolha = document.getElementById("esc-temp");
  var res = document.getElementById("res");

  if (temp == 0) {
    alert("[ERRO] Digite um valor!");
  } else {
    switch (escolha.value) {
      case "1":
        res.innerHTML = "Resultado:";
        res.innerHTML += ` ${temp}°C para Fahrenheit é igual à <strong>${
          temp * 1.8 + 32}°F</strong>`;
        break;

      case "2":
        res.innerHTML = "Resultado:";
        res.innerHTML += ` ${temp}°F para Celcius é igual à <strong>${(temp - 32) / 1.8}</strong>`;
        break;

      default:
        break;
    }
  }
}
