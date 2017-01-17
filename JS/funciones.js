var Array = [];
var PosicionActual = 0;

function Persona() {
    this.Nombre = "";
    this.Correo = "";
    this.Telefono = "";
    this.Salario = "";
}

function Agregar() {

    Sujeto = new Persona();

    Sujeto.Nombre = document.getElementById("nombre").value;
    Sujeto.Correo = document.getElementById("correo").value;
    Sujeto.Telefono = document.getElementById("telefono").value;
    Sujeto.Salario = document.getElementById("salario").value;
if (Sujeto.Salario != "" ){
    Array.push(Sujeto);
    Limpiar();
    Imprimir();
}
    else {
    confirm("Debe ingresar el salario");
    }   
}

function Imprimir() {
    var tabla = "";
    for (i = 0; i < Array.length; i++) {
        aux = Array[i];

        tabla += "<tr><td>" + aux.Nombre + "</td><td>" + aux.Correo + "</td><td>" + aux.Telefono + "</td><td>" + aux.Salario +
            "</td> <th colspan=2> <button onclick='Eliminar(" + i + ")' class='btn btn-danger' >Eliminar</button> &nbsp;&nbsp; <button class='btn btn-primary' onclick='Editar(" + i + ")' >Editar</button> </th></tr>";
    }

    document.getElementById('lista').innerHTML = tabla;
    Salarios();
}

function Salarios() {
    var suma = 0;
    var promedio = 0;
    var contador = 0;
    
  if (Array.length > 0 ){
        
    for (i = 0; i < Array.length; i++) {
        aux = Array[i];

        suma += parseInt(aux.Salario);
        contador++;
    }

    promedio = suma / contador;

    document.getElementById('totalSalarios').innerHTML = suma;
    document.getElementById('promedioSalarios').innerHTML = promedio;
      }
    else {
        suma =0; promedio = 0;
        document.getElementById('totalSalarios').innerHTML = suma;
    document.getElementById('promedioSalarios').innerHTML = promedio;
    }
}

function Eliminar(posicion) {
    Array.splice(posicion, 1);
    Imprimir();
}

function Editar(posicion) {
    document.getElementById("nombre").value = Array[posicion].Nombre;
    document.getElementById("correo").value = Array[posicion].Correo;
    document.getElementById("telefono").value = Array[posicion].Telefono;
    document.getElementById("salario").value = Array[posicion].Salario;
    PosicionActual = posicion;
}

function Actualizar() {
    Nombre = document.getElementById("nombre").value;
    Correo = document.getElementById("correo").value;
    Telefono = document.getElementById("telefono").value;
    Salario = document.getElementById("salario").value;

    if (Salario != ""){
    
    Array[PosicionActual].Nombre = Nombre;
    Array[PosicionActual].Correo = Correo;
    Array[PosicionActual].Telefono = Telefono;
    Array[PosicionActual].Salario = Salario;
    Imprimir();
    Limpiar();
    } 
    else {
        confirm("Debe ingresar el salario");
    }
    
}

function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("salario").value = "";
}