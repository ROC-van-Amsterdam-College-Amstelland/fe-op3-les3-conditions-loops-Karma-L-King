//javascript code
js
var tekst = "";
for (i = 0; i < 6; i++) {
    tekst += i + "<br>";
    console.log(i);
}
document.getElementById("tekst").innerHTML = tekst;