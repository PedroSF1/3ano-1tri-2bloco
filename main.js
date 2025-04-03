    const botoes = document.querySelectorAll(".botao");
    
    for(let i=0;i <botoes.length;i++){
        botoes[i].onclick = function(){

            for(let j=o;j<botoes.length;j++)
            botoes[i].classList.add("ativo");
    }
}