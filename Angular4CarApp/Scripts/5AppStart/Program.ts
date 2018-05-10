class Program {
    static Main(): void {
        Views.HideAll();
        UserRequest.Run();

        var car1: Car = new Car("vin-1","Mersedes", "E320", "1995", "Dima", "+7 924 123 45 67", "images/mers.png");
        var car2: Car = new Car("vin-2","BMW", "M3", "1995", "Lena", "+7 928 123 45 60", "images/bmw.jpg");
        var car3: Car = new Car("vin-3","Audi", "A4", "1995", "Max", "+7 925 123 40 62", "images/audi.jpg");

        ListOfCar.Add(car1);
        ListOfCar.Add(car2);
        ListOfCar.Add(car3);

        Views.ul1(ListOfCar.GetListOfCar());

        var controller = new Controller1();
        controller.ul1Click(car1.carid);
    }
}