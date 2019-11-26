//javascript code
function check() {

    var myNumber1 = parseInt(document.getElementById("myNumber1").value);
    var myNumber2 = parseInt(document.getElementById("myNumber2").value);
    var myOperator = document.getElementById("myOperator").value;

    if (myOperator == "+") {
        document.getElementById("tekst").innerHTML = myNumber1 + myNumber2;
    } else if (myOperator == "-") {
        document.getElementById("tekst").innerHTML = myNumber1 - myNumber2;
    } else if (myOperator == "*") {
        document.getElementById("tekst").innerHTML = myNumber1 * myNumber2;
    } else if (myOperator == "/") {
        document.getElementById("tekst").innerHTML = myNumber1 / myNumber2;
    }

}