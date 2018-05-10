var Views = /** @class */ (function () {
    function Views() {
    }
    Views.prototype.Update = function () {
    };
    Views.HideAll = function () {
        Views.text3Hide();
        Views.window2Hide();
        Views.window2_1Hide();
    };
    Views.ul1 = function (list) {
        $("#ul1").text("");
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            var str = "<li class='list-group-item list-group-item-action r1' id='" + item.carid + "'>" + item.name + " - " + item.model + "</li>";
            $("#ul1").append(str);
        }
    };
    Views.ul2 = function (list) {
        $("#ul2").text("");
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var item = list_2[_i];
            var nameOfClass = item.type == "success" ? " list-group-item-success" : " list-group-item-warning";
            var str = "<li class='list-group-item list-group-item-action" + nameOfClass + "'>" + item.text + " - " + item.type + " - " + item.date.toLocaleString() + "</li>";
            $("#ul2").append(str);
        }
    };
    Views.text1 = function (nameOfCar) {
        $("#text1").text(nameOfCar);
        $(".forIdtext1").text(nameOfCar);
    };
    Views.text2 = function (car) {
        $("#text2").text("");
        $(".forIdtext2").text("");
        var str = "<li>Model - <strong>" + car.model + "</strong></li>";
        str += "<li>Year - <strong>" + car.year + "</strong></li>";
        str += "<li>Owner - <strong>" + car.owner + "</strong></li>";
        $("#text2").append(str);
        $(".forIdtext2").append(str);
    };
    Views.text3 = function (phone) {
        $("#text3").text("");
        $("#text3").append(phone);
    };
    Views.text3Hide = function () {
        if ($("#text3").is(":visible")) {
            $("#text3").hide();
        }
    };
    Views.text3Show = function () {
        if ($("#text3").is(":hidden")) {
            $("#text3").show();
        }
    };
    Views.text3ShowOrHide = function () {
        if ($("#text3").is(":hidden")) {
            Views.text3Show();
            Views.btn1text("Hide phone");
        }
        else {
            Views.text3Hide();
            Views.btn1text("Show phone");
        }
    };
    Views.img1 = function (path) {
        $("#img1").attr("src", path);
    };
    Views.ul1LiSelected = function (carid) {
        $("#ul1 li").removeClass("active");
        $("#" + carid).addClass("active");
    };
    Views.btn1text = function (text) {
        $("#btn1").text(text);
    };
    Views.window2Show = function () {
        if ($("#window2").is(":hidden")) {
            $("#window2").show();
        }
    };
    Views.window2Hide = function () {
        if ($("#window2").is(":visible")) {
            $("#window2").hide();
        }
    };
    Views.window2_1Show = function () {
        if ($("#window2_1").is(":hidden")) {
            $("#window2_1").show();
        }
    };
    Views.window2_1Hide = function () {
        if ($("#window2_1").is(":visible")) {
            $("#window2_1").hide();
        }
    };
    return Views;
}());
//# sourceMappingURL=Views.js.map