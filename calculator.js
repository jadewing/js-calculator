var num1 = "",
    num2 = "",
    operand = null,
    solved = false;

function clear() {
    num1 = "";
    num2 = "";
    operand = null;
    solved = false;
    $("#res").html(0);
}
$(".numpad").click(function () {
    var $input = $(this).html()

    if (solved) {
        clear();
    }
    if (!operand) {
        num1 += $input;
        $("#res").html(num1);
    } else {
        num2 += $input;
        $("#res").html(num2);
    }

});
$(".operator").click(function () {
    var input = $(this).html();

    // conditional allows users to keep computing numbers off last result
    if (solved) {
        num2 = "";
        operand = null;
        solved = false;
    }
    operand = input;

});
$("#equals").click(function () {
    //   alert(num1+num2+operand);
    if (num1 && num2 && operand) {
        num1 *= 1;
        num2 *= 1;

        switch (operand) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        $("#res").html(result);
        num1 = result; //user can keep hitting 'enter' to continue calculations.

        solved = true;
    }

});
$("#clear").bind("click", clear);