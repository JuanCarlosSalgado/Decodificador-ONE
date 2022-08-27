const Primero = () => {
    const Datosc = document.getElementById("Info");
    let Dataa = Datosc.value.toLowerCase();

    Encriptar(Dataa.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    Visible();
    
}
const Segundo= () => {
    const Datosc = document.getElementById("Info");
    let Dataa = Datosc.value.toLowerCase();

    Desencriptar(Dataa);
    Visible();
}


const Visible = () => {
    var x = document.getElementById("Ocultar");
    x.style.display = "none";

    var y = document.getElementById("Datos");
    y.style.display = "grid";
    var z = document.getElementById("Datoss");
    z.style.display = "grid";
}

const Encriptar = (Dataa) =>{
    var a = Dataa.replace(/e/g,'enter');
    a = a.replace(/i/g,'imes');
    a = a.replace(/a/g,'ai');
    a = a.replace(/o/g,'ober');
    a = a.replace(/u/g,'ufat');
    document.getElementById("Datos").innerHTML = a;
}

const Desencriptar = (Dataa) =>{
    var a = Dataa.replace(/enter/g,'e');
    a = a.replace(/imes/g,'i');
    a = a.replace(/ai/g,'a');
    a = a.replace(/ober/g,'o');
    a = a.replace(/ufat/g,'u');
    document.getElementById("Datos").innerHTML = a;
}

const Copy = () =>{
    var y = document.getElementById("Datos").innerHTML;
    navigator.clipboard.writeText(y);
}