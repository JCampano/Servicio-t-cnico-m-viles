var oSAT = new SAT();
//eventos botones menu
document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navBajaCliente").addEventListener("click", mostrarBajaCliente, false);
document.getElementById("navModificarCliente").addEventListener("click", mostrarModificarCliente, false);

document.getElementById("navAltaDispositivo").addEventListener("click", mostrarAltaDispositivo, false);
document.getElementById("navBajaDispositivo").addEventListener("click", mostrarBajaDispositivo, false);
document.getElementById("navModificarDispositivo").addEventListener("click", mostrarModificarDispositivo, false);

document.getElementById("navAltaReparación").addEventListener("click", mostrarNuevaReparacion, false);
document.getElementById("navModificarReparación").addEventListener("click", mostrarModificarReparacion, false);
document.getElementById("navEliminarReparacion").addEventListener("click", mostrarBajaReparacion, false);

document.getElementById("navAltaEmpleado").addEventListener("click", mostrarNuevoEmpleado, false);
document.getElementById("navBajaEmpleado").addEventListener("click", mostrarBajaEmpleado, false);
document.getElementById("navModificarEmpleado").addEventListener("click", mostrarModificarEmpleado, false);


document.getElementById("navPago").addEventListener("click", mostrarNuevoPago, false);
document.getElementById("navCobro").addEventListener("click", mostrarNuevoCobro, false);

function mostrarAltaCliente() {
	document.frmAltacliente.reset();
	document.frmAltacliente.nifCliente.style.background = "white";
	document.frmAltacliente.nombreCliente.style.background = "white";	
	document.frmAltacliente.apellidosCliente.style.background = "white";
	document.frmAltacliente.direccionCliente.style.background = "white";
	document.frmAltacliente.telefonoCliente.style.background = "white";
	
    document.getElementById('frmAltacliente').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarBajaCliente() {
	document.frmBajacliente.reset();
	document.frmBajacliente.nifCliente.style.background = "white";	
	
	document.getElementById('frmBajacliente').style.display = "block";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarModificarCliente(){
	document.frmModificarcliente.reset();
	document.frmModificarcliente.nifCliente.style.background = "white";
	document.frmModificarcliente.nombreCliente.style.background = "white";	
	document.frmModificarcliente.apellidosCliente.style.background = "white";
	document.frmModificarcliente.direccionCliente.style.background = "white";
	document.frmModificarcliente.telefonoCliente.style.background = "white";
	
	document.getElementById('frmModificarcliente').style.display = "block";
	document.getElementById('frmBajacliente').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";	
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}



function mostrarAltaDispositivo() {
	document.frmAltaDispositivo.reset();
	document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "white";
	document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";
	document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	document.frmAltaDispositivo.marcaDispositivo.style.background = "white";			
	
    document.getElementById('frmAltaDispositivo').style.display = "block";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarBajaDispositivo() {
	document.frmBajaDispositivo.reset();	
	document.frmBajaDispositivo.marcaDispositivo.style.background = "white";
	
	document.getElementById('frmBajaDispositivo').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarModificarDispositivo() {
	document.frmModificarDispositivo.reset();
	document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "white";
	document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "white";
	document.frmModificarDispositivo.modeloDispositivo.style.background = "white";
	document.frmModificarDispositivo.marcaDispositivo.style.background = "white";
	
	document.getElementById('frmModificarDispositivo').style.display = "block";
	document.getElementById('frmBajaDispositivo').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}



function mostrarNuevaReparacion() {
	document.frmAltaReparacion.reset();
	document.frmAltaReparacion.averiaReparacion.style.background = "white";	
	document.frmAltaReparacion.estadoReparacion.style.background = "white";	
	document.frmAltaReparacion.importeReparacion.style.background = "white";
	document.frmAltaReparacion.comentarioReparacion.style.background = "white";	
	
    document.getElementById('frmAltaReparacion').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarModificarReparacion() {
	document.frmModificarReparacion.reset();
	document.frmModificarReparacion.averiaReparacion.style.background = "white";	
	document.frmModificarReparacion.estadoReparacion.style.background = "white";	
	document.frmModificarReparacion.importeReparacion.style.background = "white";
	document.frmModificarReparacion.comentarioReparacion.style.background = "white";	
	
	document.getElementById('frmModificarReparacion').style.display = "block";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarBajaReparacion(){
	document.frmBajaReparacion.reset();
		
	document.getElementById('frmBajaReparacion').style.display = "block";
	document.getElementById('frmModificarReparacion').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}



function mostrarNuevoEmpleado() {
	document.frmAltaEmpleado.reset();	
    document.frmAltaEmpleado.nifEmpleado.style.background = "white";
	document.frmAltaEmpleado.nombreEmpleado.style.background = "white";
	document.frmAltaEmpleado.apellidosEmpleado.style.background = "white";
	document.frmAltaEmpleado.direccionEmpleado.style.background = "white";
	document.frmAltaEmpleado.telefonoEmpleado.style.background = "white";
	document.frmAltaEmpleado.emailEmpleado.style.background = "white";	
	document.frmAltaEmpleado.ibanEmpleado.style.background = "white";
	document.frmAltaEmpleado.cargoEmpleado.style.background = "white";		
	
    document.getElementById('frmAltaEmpleado').style.display = "block";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarBajaEmpleado() {
	document.frmBajaEmpleado.reset();	
    document.frmBajaEmpleado.nifEmpleado.style.background = "white";		
	
	document.getElementById('frmBajaEmpleado').style.display = "block";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarModificarEmpleado() {
	document.frmModificarEmpleado.reset();	
    document.frmModificarEmpleado.nifEmpleado.style.background = "white";
	document.frmModificarEmpleado.nombreEmpleado.style.background = "white";
	document.frmModificarEmpleado.apellidosEmpleado.style.background = "white";
	document.frmModificarEmpleado.direccionEmpleado.style.background = "white";
	document.frmModificarEmpleado.telefonoEmpleado.style.background = "white";
	document.frmModificarEmpleado.emailEmpleado.style.background = "white";	
	document.frmModificarEmpleado.ibanEmpleado.style.background = "white";
	document.frmModificarEmpleado.cargoEmpleado.style.background = "white";	
	
	document.getElementById('frmModificarEmpleado').style.display = "block";
	document.getElementById('frmBajaEmpleado').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
}


function mostrarNuevoPago() {
	document.frmPago.reset();
	document.frmPago.importePago.style.background = "white";	
	document.frmPago.fechaPago.style.background = "white";	
	document.frmPago.estadoPago.style.background = "white";	
	document.frmPago.asuntoPago.style.background = "white";	
	
    document.getElementById('frmPago').style.display = "block";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";	
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}

function mostrarNuevoCobro() {
	document.frmCobro.reset();
	document.frmCobro.importeCobro.style.background = "white";	
	document.frmCobro.fechaCobro.style.background = "white";	
	document.frmCobro.estadoCobro.style.background = "white";	
	document.frmCobro.asuntoCobro.style.background = "white";	
	
    document.getElementById('frmCobro').style.display = "block";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajacliente').style.display = "none";
	document.getElementById('frmModificarcliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
}



//eventos botones aceptar
document.getElementById("altaCliente").addEventListener("click", validarAltaCliente, false);
document.getElementById("bajaCliente").addEventListener("click", validarBajaCliente, false);
document.getElementById("modificarCliente").addEventListener("click", validarModificarCliente, false);

document.getElementById("altaDispositivo").addEventListener("click", validarAltaDispositivo, false);
document.getElementById("bajaDispositivo").addEventListener("click", validarBajaDispositivo, false);
document.getElementById("modificarDispositivo").addEventListener("click", validarModificarDispositivo, false);

document.getElementById("altaReparacion").addEventListener("click", validarAltaReparacion, false);
document.getElementById("bajaReparacion").addEventListener("click", validarBajaReparacion, false);
document.getElementById("modificarReparacion").addEventListener("click", validarModificarReparacion, false);

document.getElementById("altaEmpleado").addEventListener("click", validarAltaEmpleado, false);
document.getElementById("bajaEmpleado").addEventListener("click", validarBajaEmpleado, false);
document.getElementById("modificarEmpleado").addEventListener("click", validarModificarEmpleado, false);

document.getElementById("altaPago").addEventListener("click", validarAltaPago, false);
document.getElementById("altaCobro").addEventListener("click", validarAltaCobro, false);

function validarAltaCliente(){
	var nif = document.frmAltacliente.nifCliente.value.trim();
	var nombre = document.frmAltacliente.nombreCliente.value.trim();
	var apellidos = document.frmAltacliente.apellidosCliente.value.trim();
	var direccion = document.frmAltacliente.direccionCliente.value.trim();
	var telefono = document.frmAltacliente.telefonoCliente.value.trim();
	
	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmAltacliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmAltacliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltacliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmAltacliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmAltacliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmAltacliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmAltacliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmAltacliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltacliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmAltacliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmAltacliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmAltacliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmAltacliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmAltacliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltacliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{}
		//altaCliente
}

function validarModificarCliente(){
	var nif = document.frmModificarcliente.nifCliente.value.trim();
	var nombre = document.frmModificarcliente.nombreCliente.value.trim();
	var apellidos = document.frmModificarcliente.apellidosCliente.value.trim();
	var direccion = document.frmModificarcliente.direccionCliente.value.trim();
	var telefono = document.frmModificarcliente.telefonoCliente.value.trim();
	
	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarcliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmModificarcliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarcliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmModificarcliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmModificarcliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarcliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmModificarcliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmModificarcliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarcliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmModificarcliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmModificarcliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmModificarcliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmModificarcliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmModificarcliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarcliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{}
		//modificar
}

function validarBajaCliente(){
	var nif = document.frmBajacliente.nifCliente.value.trim();
	var errores = false;
	var expRegNif = /^\d{8}\w$/;
		
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajacliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmBajacliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajacliente.nifCliente.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//baja
}



function validarAltaDispositivo(){
	var marca = document.frmAltaDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmAltaDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmAltaDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmAltaDispositivo.fechaSalidaDispositivo.value.trim();
	
	
	var errores = false;
	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z\s]{3,20}$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/

	
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmAltaDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmAltaDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmAltaDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras\n";				
		document.frmAltaDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato DD/MM/AAAA\n";				
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato DD/MM/AAAA\n";				
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "white";			
	}
	
	if(!errores){
	 if(fechaEntrada>=fechaSalida){
		 errores = true;
		 sErrores += "La fecha de entrada no puede ser posterior a la fecha de salida";	
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error	
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error		
	 }
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//altaDispositivo		
	
}

function validarModificarDispositivo(){
	var marca = document.frmModificarDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmModificarDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmModificarDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmModificarDispositivo.fechaSalidaDispositivo.value.trim();
	
	
	var errores = false;
	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z\s]{3,20}$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/

	
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmModificarDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmModificarDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmModificarDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras\n";				
		document.frmModificarDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato DD/MM/AAAA\n";				
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato DD/MM/AAAA\n";				
		document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "white";			
	}
	
	if(!errores){
	 if(fechaEntrada>=fechaSalida){
		 errores = true;
		 sErrores += "La fecha de entrada no puede ser posterior a la fecha de salida";	
		document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error	
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error		
	 }
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//modificar		
	
}

function validarBajaDispositivo(){
	var marca = document.frmBajaDispositivo.marcaDispositivo.value.trim();
	var errores = false;	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmBajaDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmBajaDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmBajaDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//altaDispositivo		
	
}



function validarAltaReparacion(){
	//var dispositivo = document.frmAltaReparacion..value.trim();
	var averia = document.frmAltaReparacion.averiaReparacion.value.trim();
	var estado = document.frmAltaReparacion.estadoReparacion.value.trim();
	var importe = document.frmAltaReparacion.importeReparacion.value.trim();
	var comentarios = document.frmAltaReparacion.comentarioReparacion.value.trim();
	
	var errores = false;
	
	var expRegAveria = /^[a-zA-Z\s]{3,10}$/;
	var expRegEstado = /^[a-zA-Z\s]{3,10}$/;
	var expRegImporte = /^\d*[.]?\d{1,3}[€]$/;
	var expRegComentarios =  /^.{3,500}$/;
	
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegAveria.test(averia) == false){	
		errores = true;				
		document.frmAltaReparacion.averiaReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Averia debe contener entre 3 y 10 letras\n";				
		document.frmAltaReparacion.averiaReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.averiaReparacion.style.background = "white";	
	}
	
	//Estado
	if (expRegEstado.test(estado) == false){	
		errores = true;				
		document.frmAltaReparacion.estadoReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Estado debe contener entre 3 y 10 letras\n";				
		document.frmAltaReparacion.estadoReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.estadoReparacion.style.background = "white";	
	}
	
	//Importe
	if (expRegImporte.test(importe) == false){	
		errores = true;				
		document.frmAltaReparacion.importeReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Importe debe contener numeros y acabar con el caracter €\n';				
		document.frmAltaReparacion.importeReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.importeReparacion.style.background = "white";	
	}
	
	//Comentarios
	if (expRegComentarios.test(comentarios) == false){	
		errores = true;				
		document.frmAltaReparacion.comentarioReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Comentario debe contener entre 3 y 500 caracteres\n';				
		document.frmAltaReparacion.comentarioReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.comentarioReparacion.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{}
		//alta reparacion	
}

function validarModificarReparacion(){
	//var dispositivo = document.frmModificarReparacion..value.trim();
	var averia = document.frmModificarReparacion.averiaReparacion.value.trim();
	var estado = document.frmModificarReparacion.estadoReparacion.value.trim();
	var importe = document.frmModificarReparacion.importeReparacion.value.trim();
	var comentarios = document.frmModificarReparacion.comentarioReparacion.value.trim();
	
	var errores = false;
	
	var expRegAveria = /^[a-zA-Z\s]{3,10}$/;
	var expRegEstado = /^[a-zA-Z\s]{3,10}$/;
	var expRegImporte = /^\d*[.]?\d{1,3}[€]$/;
	var expRegComentarios =  /^.{3,500}$/;
	
	
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegAveria.test(averia) == false){	
		errores = true;				
		document.frmModificarReparacion.averiaReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Averia debe contener entre 3 y 10 letras\n";				
		document.frmModificarReparacion.averiaReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.averiaReparacion.style.background = "white";	
	}
	
	//Estado
	if (expRegEstado.test(estado) == false){	
		errores = true;				
		document.frmModificarReparacion.estadoReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Estado debe contener entre 3 y 10 letras\n";				
		document.frmModificarReparacion.estadoReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.estadoReparacion.style.background = "white";	
	}
	
	//Importe
	if (expRegImporte.test(importe) == false){	
		errores = true;				
		document.frmModificarReparacion.importeReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Importe debe contener numeros y acabar con el caracter €\n';				
		document.frmModificarReparacion.importeReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.importeReparacion.style.background = "white";	
	}
	
	//Comentarios
	if (expRegComentarios.test(comentarios) == false){	
		errores = true;				
		document.frmModificarReparacion.comentarioReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Comentario debe contener entre 3 y 500 caracteres\n';				
		document.frmModificarReparacion.comentarioReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.comentarioReparacion.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{}
		//modificar
}

function validarBajaReparacion(){
	//var dispositivo = document.frmBajaReparacion..value.trim();
	var averia = document.frmBajaReparacion.averiaReparacion.value.trim();	
	var errores = false;	
	var expRegAveria = /^[a-zA-Z\s]{3,10}$/;
			
	//validaciones
	var sErrores = "";

	//Marca
	if (expRegAveria.test(averia) == false){	
		errores = true;				
		document.frmAltaReparacion.averiaReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Averia debe contener entre 3 y 10 letras\n";				
		document.frmAltaReparacion.averiaReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.averiaReparacion.style.background = "white";	
	}
	
	
	if(errores)
		alert(sErrores);
	else{}
		//baja reparacion	
}


function validarAltaEmpleado(){	
	var nif = document.frmAltaEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmAltaEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmAltaEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmAltaEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmAltaEmpleado.telefonoEmpleado.value.trim();
	var email = document.frmAltaEmpleado.emailEmpleado.value.trim();	
	var iban = document.frmAltaEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmAltaEmpleado.cargoEmpleado.value.trim();	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	var expRegEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var expRegIban = "";
	var expRegCargo = /^[a-zA-Z\s]{3,20}$/;;

	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmAltaEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmAltaEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaEmpleado.nifEmpleado.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmAltaEmpleado.nombreEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmAltaEmpleado.nombreEmpleado.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.nombreEmpleado.style.background = "white";	
	}


	//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmAltaEmpleado.apellidosEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmAltaEmpleado.apellidosEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.apellidosEmpleado.style.background = "white";	
	}


	//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmAltaEmpleado.direccionEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmAltaEmpleado.direccionEmpleado.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmAltaEmpleado.direccionEmpleado.style.background = "white";	
	}


	//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmAltaEmpleado.telefonoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6\n";		
		document.frmAltaEmpleado.telefonoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.telefonoEmpleado.style.background = "white";	
	}


	//Email
	if (expRegEmail.test(email) == false){
		errores = true;				
		document.frmAltaEmpleado.emailEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Email debe tener una cadena de caracteres, el caracter @ y otra cadena de caracteres\n ";		
		document.frmAltaEmpleado.emailEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.emailEmpleado.style.background = "white";	
	}
	/*
	//iban
	if (expRegIban.test(iban) == false){
		errores = true;				
		document.frmAltaEmpleado.ibanEmpleado.focus();	//Este campo obtiene el foco
		sErrores += " ";		
		document.frmAltaEmpleado.ibanEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.ibanEmpleado.style.background = "white";	
	}*/


	//Cargo
	if (expRegCargo.test(cargo) == false){
		errores = true;				 
		document.frmAltaEmpleado.cargoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El Cargo Email debe tener entre 3 y 20 caracteres";		
		document.frmAltaEmpleado.cargoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.cargoEmpleado.style.background = "white";	
	}
		
	
	if(errores)
		alert(sErrores);
	else{}
		//altaEmpleado
}

function validarModificarEmpleado(){	
	var nif = document.frmModificarEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmModificarEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmModificarEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmModificarEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmModificarEmpleado.telefonoEmpleado.value.trim();
	var email = document.frmModificarEmpleado.emailEmpleado.value.trim();	
	var iban = document.frmModificarEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmModificarEmpleado.cargoEmpleado.value.trim();	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	var expRegEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	var expRegIban = "";
	var expRegCargo = /^[a-zA-Z\s]{3,20}$/;;

	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmModificarEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarEmpleado.nifEmpleado.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmModificarEmpleado.nombreEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmModificarEmpleado.nombreEmpleado.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.nombreEmpleado.style.background = "white";	
	}


	//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmModificarEmpleado.apellidosEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmModificarEmpleado.apellidosEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.apellidosEmpleado.style.background = "white";	
	}


	//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmModificarEmpleado.direccionEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmModificarEmpleado.direccionEmpleado.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmModificarEmpleado.direccionEmpleado.style.background = "white";	
	}


	//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmModificarEmpleado.telefonoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6\n";		
		document.frmModificarEmpleado.telefonoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.telefonoEmpleado.style.background = "white";	
	}


	//Email
	if (expRegEmail.test(email) == false){
		errores = true;				
		document.frmModificarEmpleado.emailEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Email debe tener una cadena de caracteres, el caracter @ y otra cadena de caracteres\n ";		
		document.frmModificarEmpleado.emailEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.emailEmpleado.style.background = "white";	
	}
	/*
	//iban
	if (expRegIban.test(iban) == false){
		errores = true;				
		document.frmModificarEmpleado.ibanEmpleado.focus();	//Este campo obtiene el foco
		sErrores += " ";		
		document.frmModificarEmpleado.ibanEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.ibanEmpleado.style.background = "white";	
	}*/


	//Cargo
	if (expRegCargo.test(cargo) == false){
		errores = true;				 
		document.frmModificarEmpleado.cargoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El Cargo Email debe tener entre 3 y 20 caracteres";		
		document.frmModificarEmpleado.cargoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.cargoEmpleado.style.background = "white";	
	}
		
	
	if(errores)
		alert(sErrores);
	else{}
		//modificar
}

function validarBajaEmpleado(){	
	var nif = document.frmBajaEmpleado.nifEmpleado.value.trim();	
	var errores = false;	
	var expRegNif = /^\d{8}\w$/;	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmBajaEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaEmpleado.nifEmpleado.style.background = "white";	
	}
		
	if(errores)
		alert(sErrores);
	else{}
		//baja
}

function validarAltaPago(){
	var importe = document.frmPago.importePago.value.trim();
	var fechaEntrada = document.frmPago.fechaPago.value.trim();
	var estado = document.frmPago.estadoPago.value.trim();
	var asunto = document.frmPago.asuntoPago.value.trim();
			
	var errores = false;
	
	var expRegImporte = /^\d*[.]?\d{1,3}[€]$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/
	var expRegTexto = /^[a-zA-Z\s]{3,20}$/;
	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegImporte.test(importe) == false){		
		errores = true;					
		document.frmPago.importePago.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Importe debe contener numeros y acabar con el caracter €\n';				
		document.frmPago.importePago.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmPago.importePago.style.background = "white";	
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmPago.fechaPago.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato DD/MM/AAAA\n";				
		document.frmPago.fechaPago.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmPago.fechaPago.style.background = "white";	
	}
	
	//Estado
	if (expRegTexto.test(estado) == false){		
		errores = true;					
		document.frmPago.estadoPago.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Estado debe contener entre 3 y 20 letras\n';				
		document.frmPago.estadoPago.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmPago.estadoPago.style.background = "white";	
	}
		
	
	//asunto
	if (expRegTexto.test(asunto) == false){		
		errores = true;					
		document.frmPago.asuntoPago.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Asunto debe contener entre 3 y 20 letras\n';				
		document.frmPago.asuntoPago.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmPago.asuntoPago.style.background = "white";	
	}
		
	if(errores)
		alert(sErrores);
	else{}
		//altaPago
}

function validarAltaCobro(){
	var importe = document.frmCobro.importeCobro.value.trim();
	var fecha = document.frmCobro.fechaCobro.value.trim();
	var estado = document.frmCobro.estadoCobro.value.trim();
	var asunto = document.frmCobro.asuntoCobro.value.trim();
			
	var errores = false;
	
	var expRegImporte = /^\d*[.]?\d{1,3}[€]$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/
	var expRegTexto = /^[a-zA-Z\s]{3,20}$/;
	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegImporte.test(importe) == false){		
		errores = true;					
		document.frmCobro.importeCobro.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Importe debe contener numeros y acabar con el caracter €\n';				
		document.frmCobro.importeCobro.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmCobro.importeCobro.style.background = "white";	
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fecha) == false){	
		errores = true;				
		document.frmCobro.fechaCobro.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato DD/MM/AAAA\n";				
		document.frmCobro.fechaCobro.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmCobro.fechaCobro.style.background = "white";	
	}
	
	//Estado
	if (expRegTexto.test(estado) == false){		
		errores = true;					
		document.frmCobro.estadoCobro.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Estado debe contener entre 3 y 20 letras\n';				
		document.frmCobro.estadoCobro.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmCobro.estadoCobro.style.background = "white";	
	}
		
	
	//asunto
	if (expRegTexto.test(asunto) == false){		
		errores = true;					
		document.frmCobro.asuntoCobro.focus();	//Este campo obtiene el foco			
		sErrores += 'El campo Asunto debe contener entre 3 y 20 letras\n';				
		document.frmCobro.asuntoCobro.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmCobro.asuntoCobro.style.background = "white";	
	}
		
	if(errores)
		alert(sErrores);
	else{}
		//altaCobro
}

// eventos botones volver
document.frmAltacliente.volver.addEventListener("click", volverCliente, false);
document.frmAltaDispositivo.volver.addEventListener("click", volverDispositivo, false);
document.frmAltaReparacion.volver.addEventListener("click", volverReparacion, false);
document.frmAltaEmpleado.volver.addEventListener("click", volverEmpleado, false);
document.frmPago.volver.addEventListener("click", volverPago, false);
document.frmCobro.volver.addEventListener("click", volverCobro, false);

function volverCliente(){
	document.frmAltacliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverDispositivo(){
	document.frmAltaDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}
function volverReparacion(){
	document.frmAltaReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}
function volverEmpleado(){
	document.frmAltaEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}
function volverPago(){
	document.frmPago.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}
function volverCobro(){
	document.frmCobro.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}





//quitar el div añadido por free icons
var a =document.getElementsByTagName("div");
var quitar = a.length - 1;
a[quitar].style.display = "none";




