const texto = document.querySelector('#original')
const n1 = document.querySelector('#n1')
const modificado = document.querySelector('#modificado')
const efeito = document.querySelector('#efeito')
n1.innerHTML = 0

texto.addEventListener('keyup',  function alteraLetra(){
n1.innerHTML = 0 + texto.value.length

if(efeito.value == 'uppercase'){
modificado.innerHTML= original.value.toUpperCase();
}
else{
modificado.innerHTML= original.value.toLowerCase();
}

})

efeito.addEventListener('change', function(){   
if(efeito.value == 'lowercase'){
modificado.innerHTML= original.value.toLowerCase();
} 
else{
modificado.innerHTML= original.value.toUpperCase();
}
              
})


