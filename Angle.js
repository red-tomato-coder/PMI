/*Для мінімізації площі трикутника АОВ, пряма АВ має бути перпендикулярна стороні ОМ та проходити через точку М.

Для мінімізації периметру трикутника АОВ, пряма АВ має бути паралельна стороні ОМ та проходити через точку М.

В і два випадки абсциса точки А, що лежить на осі абсцис, буде рівна координаті X точки М.*/
function Angle(){
    let angle = Number(prompt("Кут"))
    let mx = Number(prompt("x координата M"));
    let my = Number(prompt("y координата M"));
    let rad = angle * Math.PI / 180;
    let x = mx / Math.cos(rad) + my * Math.tan(rad);
    return x;
}