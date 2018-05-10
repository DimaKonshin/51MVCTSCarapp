interface IObserverView {
    Update(): void;
}

class Views implements IObserverView {
    Update(): void {
        
    }

    static HideAll() {
        Views.text3Hide();
        Views.window2Hide();
        Views.window2_1Hide();
    }

    static ul1(list: Array<Car> ) {
        $("#ul1").text("");

        for (var item of list) {
            var str = "<li class='list-group-item list-group-item-action r1' id='" + item.carid + "'>" + item.name + " - " + item.model + "</li>";

            $("#ul1").append(str);
        }
    }

    static ul2(list: Array<Log>) {
        $("#ul2").text("");

        for (var item of list) {

                var nameOfClass = item.type == "success" ? " list-group-item-success" : " list-group-item-warning" ;

                var str = "<li class='list-group-item list-group-item-action" + nameOfClass + "'>" + item.text + " - " + item.type + " - " + item.date.toLocaleString() + "</li>";

                $("#ul2").append(str);
        }
    }

    static text1(nameOfCar: string) {
        $("#text1").text(nameOfCar);
        $(".forIdtext1").text(nameOfCar);
    }

    static text2(car: Car) {
        $("#text2").text("");
        $(".forIdtext2").text("");

        var str = "<li>Model - <strong>" + car.model + "</strong></li>";
        str += "<li>Year - <strong>" + car.year + "</strong></li>";
        str += "<li>Owner - <strong>" + car.owner + "</strong></li>";

        $("#text2").append(str);
        $(".forIdtext2").append(str);
    }

    static text3(phone: string) {
        $("#text3").text("");

        $("#text3").append(phone);
    }

    static text3Hide()
    {
        if ($("#text3").is(":visible"))
        {
            $("#text3").hide();
        }
    }

    static text3Show()
    {
        if ($("#text3").is(":hidden"))
        {
            $("#text3").show();
        }
    }

    static text3ShowOrHide(){
        if ($("#text3").is(":hidden")) {
            Views.text3Show();
            Views.btn1text("Hide phone")
        }
        else {
            Views.text3Hide();
            Views.btn1text("Show phone")
        }
    }

    static img1(path:string) {
        $("#img1").attr("src", path);
    }

    static ul1LiSelected(carid: string) {
        $("#ul1 li").removeClass("active");
        $("#" + carid).addClass("active");
    }

    static btn1text(text: string) {
        $("#btn1").text(text);
    }

    static window2Show() {
        if ($("#window2").is(":hidden")) {
            $("#window2").show();
        }
    }

    static window2Hide() {
        if ($("#window2").is(":visible")) {
            $("#window2").hide();
        }
    }

    static window2_1Show() {
        if ($("#window2_1").is(":hidden")) {
            $("#window2_1").show();
        }
    }

    static window2_1Hide() {
        if ($("#window2_1").is(":visible")) {
            $("#window2_1").hide();
        }
    }
}