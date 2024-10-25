const div = document.querySelector(".textoAnimado")
    texto = "Con un enfoque serio y comprometido, trabajaremos juntos para proteger tus derechos y encontrar soluciones efectivas. Confía en nosotros para representarte con profesionalismo y diligencia en cada paso del proceso legal"

    function efectoTextTyping(elemento, texto, i = 0){
        elemento.textContent += texto[i];

        if (i == texto.length-1) return;
        setTimeout(() =>        efectoTextTyping(div,texto,i + 1), 26);
        
        
    }
    efectoTextTyping(div, texto)