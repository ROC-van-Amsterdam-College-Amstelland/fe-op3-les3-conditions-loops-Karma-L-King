//javascript code
function check() {
    var tekst = "";
    for (i = 0; i < 41; i++) {
        if (i == 25) {
            tekst += i + ", cool getal<br>";
        } else if (i == 40) {
            tekst += i + ", ook een cool getal <br>";

        } else {
            tekst += i + "<br>"
        }

        console.log(i);
    }
    document.getElementById("tekst").innerHTML = tekst;

}