// const switchButton = document.getElementById('switch');

// switchButton.addEventListener('click',()=>{
//     document.body.classList.toggle('dark');
//     switchButton.classList.toggle('active');
// })


// function load(){
//     const darkmode = localStorage.getItem('switch');

//     if(!darkmode){
//         store('false');
//     }else if(darkmode == 'true'){
//         body.classList.add('dark');
//     }

// }

// function store(value){
//     localStorage.setItem('dark', value);
// }

const bdark = document.getElementById('bdark')
// const bdark = document.querySelector('bdark');
const body = document.querySelector('body');


load();

loa();


 
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    bdark.classList.toggle('active');
    store(body.classList.contains('darkmode'));
    store(bdark.classList.contains('active'));
});

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
        
    }

}
/* */










 
// bdark.addEventListener('click', e =>{
//     bdark.classList.toggle('active');
//     store(bdark.classList.contains('active'));
// });

function loa(){
    const dark = localStorage.getItem('active');

    if(!dark){
        store('false');
    }else if(dark == 'true'){
        bdark.classList.add('active');
        
    }

}


function store(value){
    localStorage.setItem('darkmode', value);
    localStorage.setItem('active', value);
}




// function store(value){
//     localStorage.setItem('active', value);
// }







