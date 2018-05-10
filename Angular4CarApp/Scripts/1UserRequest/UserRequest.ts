class UserRequest {
    static Run() {
        $("#ul1").click((event) => {
            var id = $(event.target).attr("id");

            var controller = new Controller1();
            controller.ul1Click(id);
        });

        $("#btn1").click(() => {
            var controller = new Controller1();
            controller.btn1Click();
        });

        $("#search").keyup(() => {
            var search = $("#search").val().toString();

            var controller = new Controller1();
            controller.searchChange(search);
        });

        $("#btn2").click(() => {
            var controller = new Controller1();
            controller.btn2Click();
        });

        $("#btn3").click(() => {
            var controller = new Controller1();
            controller.btn3Click();
        });

        $("#btn4").click(() => {
            var controller = new Controller1();
            controller.btn3Click();
        });

        $("#btn5").click(() => {
            var controller = new Controller1();
            controller.btn5Click();
        });
    }
}