var quebrada = 0;
function lampada(tipo){
    if(tipo == 1 && quebrada != 3){
        document.getElementById("luz").src="img/quebrada.png";
        quebrada = 2;
    }
    else if(tipo == 2 && quebrada == 0){
        document.getElementById("luz").src="img/acesa.png";
    }
    else if(tipo == 3 && quebrada == 0){
        document.getElementById("luz").src="img/apagada.png";
    }
    if(tipo == 3 && quebrada == 2){
        quebrada = 3;
        alert("Cara o que você fez! 😬");
    }
}






