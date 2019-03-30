mostrarImagen = ()=>{
    document.getElementById('modal').style.display = 'block';
}
ocultarImagen = ()=>{
    document.getElementById('modal').style.display = 'none';
}
window.onload = ()=>{
    let a = document.getElementById('Preview');
    let b = document.getElementById('close');
    a.addEventListener("click", mostrarImagen, false); 
    b.addEventListener("click", ocultarImagen, false); 
}

