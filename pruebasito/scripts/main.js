let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === './images/descarga.jfif') {
      miImage.setAttribute('src','./images/images.jfif');
    } else {
      miImage.setAttribute('src', './images/descarga.jfif');
    }

}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}


function estableceNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');

    if (!miNombre){
        //recursibidad
        estableceNombreUsuario();

    }else{
        localStorage.setItem('nombre', miNombre);

        miTitulo.textContent ='Mozilla es genila,' + miNombre;
    }

}





