function checkCode() {

    let formInput = document.forms["codeForm"]["yourCode"].value;

    if (formInput == "robotto.wave();") {
        document.querySelector(".robotto-still").setAttribute("src", "images/heiluu.png");
    } else {
        alert("Syntax error! Robotto is confused. Try again!")
    }
}