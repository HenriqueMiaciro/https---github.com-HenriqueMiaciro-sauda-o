let saudação = document.getElementById("saudação")
let horaatual = new Date().getHours()

if (horaatual >= 0 && horaatual < 12) {
  saudação.innerHTML = "Bom dia"
} else if (horaatual >= 12 && horaatual < 18) {
  saudação.innerHTML = "Boa tarde"
} else if (horaatual >= 18 && horaatual < 24) {
  saudação.innerHTML = "Boa noite"
}
