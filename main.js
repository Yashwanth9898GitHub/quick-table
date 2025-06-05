var TablePrint = /** @class */ (function () {
    function TablePrint() {
    }
    TablePrint.prototype.printTable = function (tableNumber) {
        var result = '';
        for (var count = 1; count <= 10; count++) {
            result += "".concat(tableNumber, " * ").concat(count, " = ").concat(tableNumber * count, "<br>");
        }
        return result;
    };
    return TablePrint;
}());
function generateTable() {
    var input = document.getElementById('inputNumber');
    var output = document.getElementById('output');
    var value = parseInt(input.value);
    if (!isNaN(value) && input.value.trim().length <= 16) {
        var table = new TablePrint();
        output.innerHTML = table.printTable(value);
    }
    else {
        output.innerHTML = "Please enter a valid number (1-16 digits).";
    }
}
// Make it globally accessible for button onclick
window.generateTable = generateTable;
