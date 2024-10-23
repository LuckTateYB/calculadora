const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");


botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const botonApretado = btn.textContent;

        if (pantalla.textContent === "0" && btn.id === "Oper") {
            return; // No se actualiza la pantalla si es un operador con "0" en pantalla
        }
        
        if(btn.id === "C"){
            pantalla.textContent = "0";
            return;
        }

        if(btn.id === "borrar"){
            if (pantalla.textContent.length === 1 || 
                pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(btn.id === "igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent = "Error!"
            }
            return;
        }

        if (pantalla.textContent === "0" || 
            pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
})
