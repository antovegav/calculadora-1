function sumar(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var suma=0;
    suma = valor1+valor2;
    document.getElementById("resultadoSuma").value=suma;
    }

function restar(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var restar=0;
    restar = valor1-valor2;
    document.getElementById("resultadoResta").value=restar;
}

function multiplicar(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var multiplicar=0;
    multiplicar = valor1*valor2;
    document.getElementById("resultadoMultiplicar").value=multiplicar;
}

function dividir(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var dividir=0;
    dividir = valor1/valor2;
    document.getElementById("resultadoDividir").value=dividir;
    }