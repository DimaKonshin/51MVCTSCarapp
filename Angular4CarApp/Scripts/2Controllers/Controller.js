var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());
var Controller1 = /** @class */ (function (_super) {
    __extends(Controller1, _super);
    function Controller1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controller1.prototype.ul1Click = function (carid) {
        Controller1.car = ListOfCar.GetCarByCarId(carid);
        Views.text3Hide();
        Views.btn1text("Show phone");
        Views.text1(Controller1.car.name);
        Views.text2(Controller1.car);
        Views.text3(Controller1.car.phone);
        Views.img1(Controller1.car.images);
        Views.ul1LiSelected(Controller1.car.carid);
    };
    Controller1.prototype.btn1Click = function () {
        Views.text3ShowOrHide();
    };
    Controller1.prototype.searchChange = function (search) {
        var list = ListOfCar.Search(search);
        Views.ul1(list);
    };
    Controller1.prototype.btn2Click = function () {
        Views.window2Show();
        Views.window2_1Show();
    };
    Controller1.prototype.btn3Click = function () {
        Views.window2Hide();
        Views.window2_1Hide();
        var log = new Log("cancel " + Controller1.car.name + " - " + Controller1.car.model, "exit", new Date());
        Logs.Add(log);
        var list = Logs.GetListOfLogs();
        Views.ul2(list);
    };
    Controller1.prototype.btn5Click = function () {
        Views.window2Hide();
        Views.window2_1Hide();
        var log = new Log("buy " + Controller1.car.name + " - " + Controller1.car.model, "success", new Date());
        Logs.Add(log);
        var list = Logs.GetListOfLogs();
        Views.ul2(list);
    };
    return Controller1;
}(Controller));
//# sourceMappingURL=Controller.js.map