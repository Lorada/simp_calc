function multiplyBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    num3 = document.getElementById("thirdNumber").value;
    var erg = (num3/num2) * num1;
    document.getElementById("result").innerHTML = parseFloat(erg).toFixed(2);
}