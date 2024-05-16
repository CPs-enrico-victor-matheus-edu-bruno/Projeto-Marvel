//Criando slideshow automatico

//declarando as variaveis

let imagens = ['./img/capitao-america.webp', './img/capitao-e-pantera.jpg', './img/viuva.webp'];
let index = 0;
let time = 3000; //em (ms)

function slideshow(){
    document.getElementById('imgbanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;

    }
    setTimeout('slideshow()', time)
}
slideshow();

//menu hamburguer
