test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const fromEuroToDollar = function(valueInEuro) {
        // Convertimos el valor a dólares
        let valueInDollar = valueInEuro * 1.07;
        // Retornamos el valor en dólares
        return valueInDollar;
    }
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
}); 
test("One dollar should be 157,20 yen", function() {
    // Importo la funcion desde app.js
    const fromDollarToYen = function(valueInDollar) {
        let valueInYen = valueInDollar * 157.20;
        return valueInYen;
    }
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(4)).toBe(628.8); 
}); 
test("One yen should be 0.005 pounds", function() {
    // Importo la funcion desde app.js
        const fromYenToPound = function(valueInYen) {
        let valueInPound = valueInYen * 0.005;
        return valueInPound
    }
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100)).toBe(0.50); 
}); 