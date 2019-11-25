document.getElementById("enviar1").addEventListener("click", calcWT);
document.getElementById("enviar2").addEventListener("click", calcWY);

function calcWT(){
    let diaInicio, dias, diaFinal;

    diaInicio = document.getElementById("diaInicio1").value;
    dias = document.getElementById("dias1").value;
    console.log(dias);
    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    document.getElementById("diaFinal1").value = calcWorkingDate(diaInicio, dias);
}

function calcWY(){
    let diaInicio, diaFinal;

    diaInicio = document.getElementById("diaInicio2").value;
    diaFinal = document.getElementById("diaFinal2").value;

    diaInicio = diaInicio.split("-");
    diaInicio = new Date(diaInicio[0], diaInicio[1]-1, diaInicio[2]);

    diaFinal = diaFinal.split("-");
    diaFinal = new Date(diaFinal[0], diaFinal[1]-1, diaFinal[2]);

    document.getElementById("dias2").value = getWorkingDays(diaInicio, diaFinal);
}