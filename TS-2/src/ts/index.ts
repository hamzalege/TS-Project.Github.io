abstract class Vehcile {
    constructor(
      private _model: number,
      private _year: number,
      private _rent: number
    ) {}
  
    get model() {
      return this._model;
    }
  
    get year() {
      return this._year;
    }
    get rent() {
      return this._rent;
    }
  
    set model(newmodel: number) {
      if (!newmodel) {
        throw new Error("Name cannot be empty");
      }
      this._model = newmodel;
    }
    set year(newyear: number) {
      if (!newyear) {
        throw new Error("Name cannot be empty");
      }
      this._year = newyear;
    }
    set rent(newrent: number) {
      if (!newrent) {
        throw new Error("Car is not Available");
      }
      this.rent = newrent;
    }
  
    
  
    abstract rentalrate(): number;
  }
  
  class Toyota extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
       }
       
  }
  
  class Cultus extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
       }
       
  }
  class Coure extends Vehcile{
    constructor(
        model: number,
        year: number,
        rent: number,
        private vehcileName: string,
        private colour: string

      ) {
        super(model, year, rent);
      }
      

       rentalrate(){
        return this.rent*10;
       }
       
  }
 
  
  
 var user = prompt("Welcome to Our Rental Car Service " + "Toyata," +" Cultus,"+ "Coure")


 if(user=="Cultus"){
const cultus = new Cultus(2021, 2023, + 1600 * 5, "Cultus","White");
  console.log(cultus);
  
 }
 if(user=="Coure"){
  const coure = new Coure(2022, 2023, + 1000 * 5, "Coure","Black");
  console.log(coure);
  
 }
 if(user=="Toyota"){
  const toyo = new Toyota(2022, 2023, + 8100 * 5, "Toyota-Corolla","Grey");
  console.log(toyo);
  
 }
 