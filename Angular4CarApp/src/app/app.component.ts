import { Component } from '@angular/core';
import { Car, ListOfCar } from "./Car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  car: Car;

  constructor() {
    ListOfCar.Add(new Car("vin-1", "Mersedes", "E320", "1995", "Dima", "+7 924 123 45 67", "images/mers.png"));
    ListOfCar.Add(new Car("vin-2", "BMW", "M3", "1995", "Lena", "+7 928 123 45 60", "images/bmw.jpg"));
    ListOfCar.Add(new Car("vin-3", "Audi", "A4", "1995", "Max", "+7 925 123 40 62", "images/audi.jpg"));
    this.chooseCar("vin-1");
  }

  getListOfCar() {
    return ListOfCar.GetListOfCar();
  }

  chooseCar(carid) {
      this.car = ListOfCar.GetCarByCarId(carid); 
  }

  CheckIfThisCurrentCar(carid) {
    return this.car.carid == carid ? true : false;
  }
}
