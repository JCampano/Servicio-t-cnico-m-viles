var oSAT = new SAT();
//eventos botones menu
document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navAltaDispositivo").addEventListener("click", mostrarAltaDispositivo, false);
document.getElementById("navReparacion").addEventListener("click", mostrarNuevaReparacion, false);
document.getElementById("navAltaEmpleado").addEventListener("click", mostrarNuevoEmpleado, false);
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
}

//eventos botones aceptar
document.getElementById("altaCliente").addEventListener("click", validarAltaCliente, false);
document.getElementById("altadispositivo").addEventListener("click", validarAltaDispositivo, false);
document.getElementById("altaReparacion").addEventListener("click", validarAltaReparacion, false);
document.getElementById("altaEmpleado").addEventListener("click", validarAltaEmpleado, false);
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











