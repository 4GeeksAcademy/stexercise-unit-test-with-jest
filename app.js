let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let theDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return theDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let theYen = (valueInDollar / 1.07) * 156.5;
    return theYen;
}
const fromYenToPound = function(valueInYen) {
    let thePound = (valueInYen / 156.5) * 0.87;
    return thePound;
}
module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound }
