function comprar()
{
    var nome = prompt("digite seu nome:");
    if(nome != null && nome != ""){
        var escolha = confirm("Olá "+ nome +", quer confirmar a viagem?");
        if(escolha == true){
            alert("Parabéns "+nome+"! Clicou, Comprou! te desejamos uma Ótima Viagem! ^^");
        }else{
            alert("poxa "+nome+"! que pena que você não quis comprar, continue vendo nossas ofertas. ^^")
        }
    }
    else if(nome != null || nome == ""){
        nome = "sem nome";
        var escolha = confirm("Olá "+ nome +", quer confirmar a viagem?");
        if(escolha == true){
            alert("poxa "+nome+"! Clicou, Não Comprou! é impossivel comprar sem o nome, tente novamente! ^^");
        }else{
            alert("poxa "+nome+"! ainda bem que você cancelou pois, é impossível comprar sem o nome, tente novamente. ^^")
        }
    }

    
    
}

function enviar()
{
    alert("anotamos sua sugestão para trabalhar em novos pacotes , agradecemos por nos ajudar com sugestões , você também faz parte disso! ")
}