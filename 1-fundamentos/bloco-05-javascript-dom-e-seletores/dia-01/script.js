 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function changeParagraph() {
     let paragraph = document.getElementsByTagName('p')[0];
     paragraph.innerHTML = 'Me vejo ganhando R$3.500 e gerenciando meu empreendimento de estética';
 }
 changeParagraph();
 
 let cordobackground = document.getElementsByClassName('main-content')

 function yellowCenter() {
    let changeColor = document.getElementsByClassName('main-content')[0];
    changeColor.style.background = "rgb(76,164,109";
}
yellowCenter();

function redToWhite() {
    let redChange = document.getElementsByClassName('center-content')[0];
    redChange.style.background = 'white';
}
redToWhite();

function correctText() {
    let correct = document.getElementsByClassName('title')[0]; 
    correct.innerHTML = 'Exercício 5.1 - JavaScript'
}
correctText();

function upperParagraph() {
    let upper = document.getElementsByTagName('p')[2];
    upper.style.textTransform = 'uppercase';
}
upperParagraph();

function allP() {
    let show = document.querySelectorAll('p');
    for(i = 0; i < show.length; i += 1) {
   console.log(show[i].innerHTML);
    }
}
allP();