function insert(numeros){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + numeros;
}

function clean(){
    document.getElementById('res').innerHTML = '';
}

function back(){
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('res').innerHTML
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('res').innerHTML = 'Digite uma operação válida'
    }
}