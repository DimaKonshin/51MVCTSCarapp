abstract class Controller {
    
}

class Controller1 extends Controller {

    static car: Car;

    ul1Click(carid: string): void {
        Controller1.car = ListOfCar.GetCarByCarId(carid);

        Views.text3Hide();
        Views.btn1text("Show phone");
        Views.text1(Controller1.car.name);
        Views.text2(Controller1.car);
        Views.text3(Controller1.car.phone);
        Views.img1(Controller1.car.images);
        Views.ul1LiSelected(Controller1.car.carid);
    }

    btn1Click(): void {
        Views.text3ShowOrHide();
    }

    searchChange(search: string): void {
        var list: Array<Car> = ListOfCar.Search(search);
        Views.ul1(list);
    }

    btn2Click(): void {
        Views.window2Show();
        Views.window2_1Show();  
    }

    btn3Click(): void {
        Views.window2Hide();
        Views.window2_1Hide();

        var log: Log = new Log("cancel " + Controller1.car.name + " - " + Controller1.car.model, "exit", new Date());
        Logs.Add(log);

        var list: Array<Log> = Logs.GetListOfLogs();

        Views.ul2(list);
    }

    btn5Click(): void {
        Views.window2Hide();
        Views.window2_1Hide();

        var log: Log = new Log("buy " + Controller1.car.name + " - " + Controller1.car.model, "success", new Date());
        Logs.Add(log);

        var list: Array<Log> = Logs.GetListOfLogs();

        Views.ul2(list);
    }
}