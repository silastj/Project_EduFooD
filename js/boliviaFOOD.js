function ocultarDados(id){
    $('#'+ id).hide()
}

function pratoEscolhido(){
    var prato = document.getElementById('pratoEscolhido').value
    
    switch(prato){
        case 'MAJAU':
            alert("majau escolhido!" + prato)
            break
        case 'SALTENHAS':
            alert('Saletnhas escolhidas!' + prato)
            break
        default:
            return false;
    }
}