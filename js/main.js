// // let hideText_btn = document.getElementById('hideText_btn');

// let hideText = document.getElementById('hideText');

// hideText_btn.addEventListener('click', toogleText);

// function toogleText() {
//     hideText.classList.toggle('ver');

//     if(hideText.classList.contains('ver')){
//         hideText_btn.innerHTML = 'Leer menos';
//     }
    
//     else {
//         hideText_btn.innerHTML = 'Leer más';
//     }
    
// }
let pie1 = document.getElementById('pie1')
let pie2 = document.getElementById('pie2')
let pie3 = document.getElementById('pie3')
let pie4 = document.getElementById('pie4')
let pie5 = document.getElementById('pie5')


let capa = document.getElementById('capa');



function toggle__pie(numero__pie){
    capa.classList.toggle('active--capa')

    //cambiar direccion de flecha
    let pie__actual = document.querySelectorAll(`#pie${numero__pie} .arrow`)[0];
    pie__actual.classList.toggle('active--i')



    let text__actual = document.querySelectorAll(`#pie${numero__pie} .text__pie`)[0];
    if(pie__actual.classList.contains('active--i')){
        text__actual.innerHTML = ('Leer menos')
        // contenido__actual.classList.add('active--c')
    }
    else{
        text__actual.innerHTML = ('Leer mas')
        // contenido__actual.classList.remove('active--c')

    }

    
    // let contenido__actual = document.getElementById(`contenido#pie1`);
    let contenido__actual = document.querySelectorAll(`.card${numero__pie}`)[0];

    contenido__actual.classList.toggle('active--c')


    let oculto = document.querySelectorAll(`.card${numero__pie} .oculto`)[0];
    oculto.classList.toggle('mostrar')
    
  

}




// pie1.addEventListener('click', ()=>{
//     toggle__pie('#pie1')
// })
pie1.addEventListener('click', function(){toggle__pie("1")})
pie2.addEventListener('click', function(){toggle__pie("2")})
pie3.addEventListener('click', function(){toggle__pie("3")})
pie4.addEventListener('click', function(){toggle__pie("4")})
pie5.addEventListener('click', function(){toggle__pie("5")})












    






