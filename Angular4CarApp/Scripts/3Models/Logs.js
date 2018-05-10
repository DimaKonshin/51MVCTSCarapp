var Log = /** @class */ (function () {
    function Log(text, type, date) {
        this.text = text;
        this.type = type;
        this.date = date;
    }
    return Log;
}());
var Logs = /** @class */ (function () {
    function Logs() {
    }
    Logs.Add = function (log) {
        this.list.push(log);
    };
    Logs.GetListOfLogs = function () {
        return Logs.list;
    };
    Logs.list = new Array();
    return Logs;
}());
//# sourceMappingURL=Logs.js.map