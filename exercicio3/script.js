function checaCaps(event){
    const paragrafo = document.getElementById("mensagem")

    if(event.key === "Shift"){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}