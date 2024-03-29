function idade(resposta) {  /*JS PARA O POPUP*/
    /*COMPARA AS RESPOSTAS DO USUÁRIO*/
    if(resposta === 'sim'){
        document.getElementById('popup').style.display = 'none';
    }
    else if(resposta === 'nao'){
        window.location.href = 'https://www.google.com.br';
    }
}