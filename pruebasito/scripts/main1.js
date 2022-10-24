const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Holaa mundo!';
//textContent, representa el contendio del texto de etiqueta o variable

let nombreDeLaVariable;

function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }
  
document.querySelector('h1').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}

//otra forma de hacerlo sería

let miHTML = document.querySelector('p');
miHTML.onclick = function(){
    alert("deja de tocarme")
}