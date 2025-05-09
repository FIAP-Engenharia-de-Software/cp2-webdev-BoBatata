// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  // TODO: implementar função
  imc = peso / (altura * altura)


  if (isNaN(peso) == true || isNaN(altura) == true)
    return "Erro"
  else if (imc < 18.5)
    return "Abaixo do peso"
  else if (18.5 < imc < 24.9)
    return "Peso normal"
  else if (25 < imc < 29.9)
    return "Sobrepeso"
  else if (imc <= 30)
    return "Obesidade"
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };