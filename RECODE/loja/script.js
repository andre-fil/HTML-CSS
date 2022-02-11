function mostrarcat(categoria){
    //window.alert(categoria);
    let elemento = document.getElementsByClassName('boxProduto');
    //console.log(elemento);
    for(var i=0;i<elemento.length;i++){
        //console.log(elemento[i].id);
        if(elemento[i].id != categoria){
            elemento[i].style = 'display:none'
        }else{
            elemento[i].style = 'display:inline-block'
        }
    }
};