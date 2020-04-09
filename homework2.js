//------------------------ Exercitiul 1 -------------------
function conversion(currency, amount) {
    var d;
    switch (currency) {
        case "EUR": d = amount / 4.8; break;
        case "HUF": d = amount / 1.3; break;
        case "USD": d = amount / 4.4; break;
        default: alert("Incearca sa convertesti -> EUR, HUF, USD");
    }

    $("#valuta").html(currency);
    $("#valoare").html(amount);
    $("#rez1").html(d.toFixed(2));
}

conversion("USD", 749);

//------------------------ Exercitiul 2 -------------------
function dataType(data) {
    var type;
    type = typeof (data);

    $("#data").html(data);
    $("#rez2").html(type);
}
dataType([1, 2, 3, 4]);

//------------------------ Exercitiul 3 -------------------
function merges(sentence) {
    var words = [];
    var concat = "";
    words = sentence.split(" ");
    for (var i in words) {
        concat += words[i].charAt(0);
    }
    $("#rez3").append('<br>' + "-" + concat);

}
const sentence = "Universitatea Tehnica Cluj Napoca";
merges(sentence);

function fraze() {
    const fraze = [
        "Quisque faucibus ipsum id nibh egestas bibendum.",
        "Phasellus tincidunt sapien nec est tempus lacinia.",
        "Curabitur ac elit at turpis ultrices hendrerit at et tellus.",
        "Praesent a magna a ligula gravida sodales eu ut erat.",
        "Ut eleifend velit vitae ipsum mattis viverra."
    ]
    for (var i in fraze) {
        var sentence = fraze[i];
        merges(sentence);
    }
}
fraze();


//------------------------ Exercitiul 4 -------------------
class Shape {
    constructor(culoare, laturi = []) {
        this.shapeColor = culoare;
        this.shapeSides = laturi;
    }
    perimetru() {
        const sides = this.shapeSides;
        var s = 0;
        for (let i in sides) {
            s += sides[i];
        }
        return s;

    }

    semiperimetru() {
        return this.perimetru() / 2;
    }

    tipulPoligonului() {
        let tip = "";
        if (this.shapeSides.length == 3) {
            tip = "Triunghi";
        } else if (this.shapeSides.length == 4) {
            tip = "Patrulater";
        } else if (this.shapeSides.length == 5) {
            tip = "Pentagon";

        } else if (this.shapeSides.length == 6) {
            tip = "Hexagon";

        } else {
            tip = "WORK IN PROGRESS";
        }
        return tip;
    }

    getColor() {
        return this.shapeColor;
    }

}
myShape = new Shape("negru", [3, 4, 5, 8]);
$("#tipP1").append(myShape.tipulPoligonului());
$("#culoare1").append(myShape.getColor());
$("#perimetru1").append(myShape.perimetru());
$("#semiperimetru1").append(myShape.semiperimetru());

class Square extends Shape {
    constructor(culoare, laturi = []) {
        super(culoare, laturi);
    }

    canBeSquare() {
        const side = this.shapeSides;
        if (side.length == 4
            && side[0] == side[1]
            && side[2] == side[3]
            && side[0] == side[3]) {
            return true;
        }
        return false;
    }

    aria(cbs) {
        const side = this.shapeSides;
        const side1 = side[0];

        if (cbs == true) {
            return side1 ** 2;
        }
        return alert("Figura nu este patrat!");
    }

}

const patrat = new Square("rosu", [2, 2, 2, 2]);
const cbs = patrat.canBeSquare();

$("#tipP2").append(patrat.tipulPoligonului());
$("#culoare2").append(patrat.getColor());
$("#aria1").append(patrat.aria(cbs));
$("#perimetru2").append(patrat.perimetru());
$("#semiperimetru2").append(patrat.semiperimetru());

class EquilateralTriangle extends Shape {
    constructor(culoare, laturi = []) {
        super(culoare, laturi);
    }

    canBeTriangle() {
        const side = this.shapeSides;
        if (side.length == 3
            && side[0] == side[1]
            && side[0] == side[2]) {
            return true;
        }
        return false;
    }

    aria(cbt) {

        const side = this.shapeSides;
        const a = side[0];

        if (cbt == true) {
            var aria = ((a ** 2) * Math.sqrt(3)) / 4;
            return aria.toFixed(3);
        }
        return alert("Figura nu este triunghi!");
    }

}

const triunghi = new EquilateralTriangle("mov", [3, 3, 3]);
const cbt = triunghi.canBeTriangle();

$("#tipP3").append(triunghi.tipulPoligonului());
$("#culoare3").append(triunghi.getColor());
$("#aria2").append(triunghi.aria(cbt));
$("#perimetru3").append(triunghi.perimetru());
$("#semiperimetru3").append(triunghi.semiperimetru());