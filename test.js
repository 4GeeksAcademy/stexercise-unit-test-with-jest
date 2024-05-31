test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const fromEuroToDollar = function(valueInEuro) {
        // Convertimos el valor a dólares
        let theDollar = valueInEuro * 1.07;
        // Retornamos el valor en dólares
        return theDollar;
    }
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
}); 
test("One dollar should be 157,20 yen", function() {
    // Importo la funcion desde app.js
    const fromDollarToYen = function(valueInDollar) {
        let theYen = (valueInDollar / 1.07) * 156.5;
        return theYen;
    }
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(2)).toBe(292.5233644859813); 
}); 
test("One yen should be 0.005 pounds", function() {
    // Importo la funcion desde app.js
    const fromYenToPound = function(valueInYen) {
        let thePound = (valueInYen / 156.5) * 0.87;
        return thePound;
    }
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100)).toBe(0.5559105431309904); 
}); 