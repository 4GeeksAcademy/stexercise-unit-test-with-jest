let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 157.20;
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.005;
    return valueInPound;
}






module.exports = { fromEuroToDollar }
module.exports = { fromDollarToYen }
module.exports = { fromYenToPound }