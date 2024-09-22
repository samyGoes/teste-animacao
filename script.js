const caixa = document.querySelector(".container-caixa");
const foto = document.querySelector(".container-foto");
const botao = document.querySelector(".botao");
let style = document.querySelector("style");
let aberta = null;

botao.addEventListener("click", function()
{
    if(aberta == null || aberta == 0) 
    { 
        style.sheet.insertRule(` .container-caixa::after { rotate: -180deg; } `, style.sheet.cssRules.length);
        style.sheet.insertRule(` .container-caixa::before { rotate: 180deg; } `, style.sheet.cssRules.length);
        aberta = 1;
        botao.style.top = "5px";
        
        setTimeout(() => { foto.style.top = "-7rem"; }, 1000);     
    }
    else 
    {       
        setTimeout(() => {
            style.sheet.insertRule(` .container-caixa::after { rotate: 0deg; } `, style.sheet.cssRules.length);
            style.sheet.insertRule(` .container-caixa::before { rotate: 0deg; } `, style.sheet.cssRules.length);
        }, 2500);
        
        foto.style.top = "0";    
        aberta = 0;
        botao.style.top= "2px";  
    }
});
// tocando aúdio 
// const audio = new Audio('meu_audio.mp3');
// audio.play();
