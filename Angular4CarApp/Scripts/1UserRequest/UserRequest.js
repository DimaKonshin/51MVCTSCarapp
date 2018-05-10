var UserRequest = /** @class */ (function () {
    function UserRequest() {
    }
    UserRequest.Run = function () {
        $("#ul1").click(function (event) {
            var id = $(event.target).attr("id");
            var controller = new Controller1();
            controller.ul1Click(id);
        });
        $("#btn1").click(function () {
            var controller = new Controller1();
            controller.btn1Click();
        });
        $("#search").keyup(function () {
            var search = $("#search").val().toString();
            var controller = new Controller1();
            controller.searchChange(search);
        });
        $("#btn2").click(function () {
            var controller = new Controller1();
            controller.btn2Click();
        });
        $("#btn3").click(function () {
            var controller = new Controller1();
            controller.btn3Click();
        });
        $("#btn4").click(function () {
            var controller = new Controller1();
            controller.btn3Click();
        });
        $("#btn5").click(function () {
            var controller = new Controller1();
            controller.btn5Click();
        });
    };
    return UserRequest;
}());
//# sourceMappingURL=UserRequest.js.map