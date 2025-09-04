function HacerCalculo () {
    let num1 = parseFloat(document.getElementById("n1").value);
    let operacion = document.getElementById("operacion").value;
    let num2 = parseFloat(document.getElementById("n2").value);
    const resultado = document.getElementById("resultado");

    switch (operacion){
        case "suma":
            resultado.innerHTML = num1 + num2;
             break;
             case "resta":
                resultado.innerHTML = num1 - num2;
                break;
            case "division":
                resultado.innerHTML = num1 / num2;
                break;
            case "multiplicacion":
                resultado.innerHTML = num1 * num2;
                break;
            case "steven":
                resultado.innerHTML = "Console.WriteLine(Hello world);";
                break;
                
        }
}