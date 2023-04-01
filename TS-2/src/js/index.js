"use strict";
class Vehcile {
    constructor(_model, _year, _rent) {
        this._model = _model;
        this._year = _year;
        this._rent = _rent;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rent() {
        return this._rent;
    }
    set model(newmodel) {
        if (!newmodel) {
            throw new Error("Name cannot be empty");
        }
        this._model = newmodel;
    }
    set year(newyear) {
        if (!newyear) {
            throw new Error("Name cannot be empty");
        }
        this._year = newyear;
    }
    set rent(newrent) {
        if (!newrent) {
            throw new Error("Car is not Available");
        }
        this.rent = newrent;
    }
}
class Toyota extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
class Cultus extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
class Coure extends Vehcile {
    constructor(model, year, rent, vehcileName, colour) {
        super(model, year, rent);
        this.vehcileName = vehcileName;
        this.colour = colour;
    }
    rentalrate() {
        return this.rent * 10;
    }
}
var user = prompt("Welcome to Our Rental Car Service " + "Toyata," + " Cultus," + "Coure");
if (user == "Cultus") {
    const cultus = new Cultus(2021, 2023, +1600 * 5, "Cultus", "White");
    console.log(cultus);
}
if (user == "Coure") {
    const coure = new Coure(2022, 2023, +1000 * 5, "Coure", "Black");
    console.log(coure);
}
if (user == "Toyota") {
    const toyo = new Toyota(2022, 2023, +8100 * 5, "Toyota-Corolla", "Grey");
    console.log(toyo);
}
//# sourceMappingURL=index.js.map