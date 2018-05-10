//class UserRequest {
//    static Run() {
//        $("#ul1").click((event) => {
//            var id = $(event.target).attr("id");
//            var controller = new Controller1();
//            controller.ul1Click(id);
//        });
//    }
//}
//abstract class Controller {
//    
//}
//class Controller1 extends Controller {
//    ul1Click(carid: string): void {
//        var car: Car = ListOfCar.GetCar(carid);
//        Views.text1(car.name);
//        Views.text2(car);
//        Views.text3(car.phone);
//        Views.img1(car.images);
//    }
//}
//class Car {
//    carid: string;
//    name: string;
//    model: string;
//    year: string;
//    owner: string;
//    phone: string;
//    images: string;
//    constructor(carid: string, name: string, model: string, year: string, owner: string, phone: string, images: string) {
//        this.carid = carid;
//        this.name = name;
//        this.model = model;
//        this.year = year;
//        this.owner = owner;
//        this.phone = phone;
//        this.images = images;
//    }
//}
//class ListOfCar {
//    private static list: Array<Car> = new Array<Car>();
//    currentCar: number = 0;
//    static Add(car: Car): void {
//        this.list.push(car);
//    }
//    static GetCar(carid: string): Car {
//        var index: number;
//        for (var i = 0; i < this.list.length; i++) {
//            if (this.list[i].carid == carid) {
//                index = i;
//                break;
//            }
//        }
//        return this.list[index];
//    }
//    static GetListOfCar(): Array<Car> {
//        return ListOfCar.list;
//    }
//}
//interface IObserverView {
//    Update(): void;
//}
//class Views implements IObserverView {
//    Update(): void {
//    }
//    static HideAll() {
//    }
//    static ul1() {
//        $("#ul1").text("");
//        for (var item of ListOfCar.GetListOfCar()) {
//            var str = "<li class='list-group-item list-group-item-action r1' id='" + item.carid + "'>" + item.name + "</li>";
//            $("#ul1").append(str);
//        }
//    }
//    static test(carid: string) {
//        $("#test").text(carid);
//    }
//    static text1(nameOfCar: string) {
//        $("#text1").text(nameOfCar);
//    }
//    static text2(car: Car) {
//        $("#text2").text("");
//        var str = "<li>Model - <strong>" + car.model + "</strong></li>";
//        str += "<li>Year - <strong>" + car.year + "</strong></li>";
//        str += "<li>Owner - <strong>" + car.owner + "</strong></li>";
//        $("#text2").append(str);
//    }
//    static text3(phone: string) {
//        $("#text3").text("");
//        $("#text3").append(phone);
//    }
//    static img1(path: string) {
//        $("#img1").attr("src", path);
//    }
//}
//class Program {
//    static Main(): void {
//        Views.HideAll();
//        UserRequest.Run();
//        var car1: Car = new Car("vin-1", "Mersedes", "E320", "1995", "Dima", "+7 924 123 45 67", "images/mers.png");
//        var car2: Car = new Car("vin-2", "BMW", "M3", "1995", "Lena", "+7 928 123 45 60", "images/bmw.jpg");
//        var car3: Car = new Car("vin-3", "Audi", "A4", "1995", "Max", "+7 925 123 40 62", "images/audi.jpg");
//        ListOfCar.Add(car1);
//        ListOfCar.Add(car2);
//        ListOfCar.Add(car3);
//        Views.ul1();
//        var controller = new Controller1();
//        controller.ul1Click(car1.carid);
//    }
//}
//# sourceMappingURL=unitapp.js.map