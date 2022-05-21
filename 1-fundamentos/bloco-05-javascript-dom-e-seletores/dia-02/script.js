//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const firstH1 = document.createElement('h1');
firstH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(firstH1);

//2 Adicione a tag main com a classe main-content como filho da tag body;
let mainClass = document.createElement('main');
mainClass.className = 'main-content';
document.body.appendChild(mainClass);

//3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let tagSection = document.createElement('section');
tagSection.className = 'center-content';
mainClass.appendChild(tagSection)

//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let firstP = document.createElement('p');
firstP.innerText = 'Eu serei rico e viajarei o mundo como empresário';
tagSection.appendChild(firstP);

//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let tagSection2 = document.createElement('section');
tagSection2.className = 'left-content';
mainClass.appendChild(tagSection2);

//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let tagSection3 = document.createElement('section');
tagSection3.className = 'right-content';
mainClass.appendChild(tagSection3);

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
tagSection2.appendChild(image);

//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let unorderedList = document.createElement('ul');
tagSection3.appendChild(unorderedList);
let array1 = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let unk in array1) {
    let numberPrint = document.createElement('li');
    numberPrint.innerText = array1[unk]; 
    
unorderedList.appendChild(numberPrint);
}

//9 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i += 1) {
    let threeTags = document.createElement('h3');
    mainClass.appendChild(threeTags);
}

//10 Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//11 Adicione a classe title na tag h1 criada;
firstH1.className = 'title';

//12 Adicione a classe description nas 3 tags h3 criadas;
let h3Element = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
    h3Element[i].className = 'description';
}

//13 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
mainClass.removeChild(tagSection2);

//14 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
let margin1 = document.getElementsByClassName('right-content')[0];
margin1.style.marginRight = 'auto';

//15 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
let changeBackgroundDad = document.getElementsByClassName('center-content')[0];
changeBackgroundDad.style.background = 'green';

//16 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();
