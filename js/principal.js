var oSAT = new SAT();
//eventos botones menu
document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navBajaCliente").addEventListener("click", mostrarBajaCliente, false);
document.getElementById("navModificarCliente").addEventListener("click", mostrarModificarCliente, false);

document.getElementById("navAltaProveedor").addEventListener("click", mostrarAltaProveedor, false);
document.getElementById("navBajaProveedor").addEventListener("click", mostrarBajaProveedor, false);
document.getElementById("navModificarProveedor").addEventListener("click", mostrarModificarProveedor, false);

document.getElementById("navAltaPieza").addEventListener("click", mostrarAltaPieza, false);
document.getElementById("navBajaPieza").addEventListener("click", mostrarBajaPieza, false);
document.getElementById("navModificarPieza").addEventListener("click", mostrarModificarPieza, false);

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

function mostrarAltaProveedor(){
	document.frmAltaProveedor.reset();
	document.frmAltaProveedor.nifProveedor.style.background = "white";
	document.frmAltaProveedor.nombreProveedor.style.background = "white";	
	document.frmAltaProveedor.tipoProveedor.style.background = "white";
	
	
	document.getElementById('frmAltaProveedor').style.display = "block";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";	
	document.getElementById('frmModificarPieza').style.display = "none";
}

function mostrarModificarProveedor(){
	document.frmModificarProveedor.reset();
	document.frmModificarProveedor.nifProveedor.style.background = "white";
	document.frmModificarProveedor.nombreProveedor.style.background = "white";	
	document.frmModificarProveedor.tipoProveedor.style.background = "white";
	
	document.getElementById('frmModificarProveedor').style.display = "block";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";	
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaProveedor(){
	document.frmBajaProveedor.reset();
	document.frmBajaProveedor.nifProveedor.style.background = "white";
	
	document.getElementById('frmBajaProveedor').style.display = "block";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";	
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}



function mostrarAltaPieza(){
	document.frmAltaPieza.reset();
	document.frmAltaPieza.idPieza.style.background = "white";
	document.frmAltaPieza.tipoPieza.style.background = "white";	
	document.frmAltaPieza.precioPieza.style.background = "white";
	
	
	document.getElementById('frmAltaPieza').style.display = "block";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";	
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarModificarPieza(){
	document.frmModificarPieza.reset();
	document.frmModificarPieza.idPieza.style.background = "white";
	document.frmModificarPieza.tipoPieza.style.background = "white";	
	document.frmModificarPieza.precioPieza.style.background = "white";
	
	document.getElementById('frmModificarPieza').style.display = "block";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";	
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaPieza(){
	document.frmBajaPieza.reset();
	document.frmBajaPieza.idPieza.style.background = "white";
	
	
	document.getElementById('frmBajaPieza').style.display = "block";
	document.getElementById('frmAltaPieza').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";	
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}



function mostrarAltaCliente() {
	document.frmAltaCliente.reset();
	document.frmAltaCliente.nifCliente.style.background = "white";
	document.frmAltaCliente.nombreCliente.style.background = "white";	
	document.frmAltaCliente.apellidosCliente.style.background = "white";
	document.frmAltaCliente.direccionCliente.style.background = "white";
	document.frmAltaCliente.telefonoCliente.style.background = "white";
	
    document.getElementById('frmAltaCliente').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaCliente() {
	document.frmBajaCliente.reset();
	document.frmBajaCliente.nifCliente.style.background = "white";	
	
	document.getElementById('frmBajaCliente').style.display = "block";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarModificarCliente(){
	document.frmModificarCliente.reset();
	document.frmModificarCliente.nifCliente.style.background = "white";
	document.frmModificarCliente.nombreCliente.style.background = "white";	
	document.frmModificarCliente.apellidosCliente.style.background = "white";
	document.frmModificarCliente.direccionCliente.style.background = "white";
	document.frmModificarCliente.telefonoCliente.style.background = "white";
	
	document.getElementById('frmModificarCliente').style.display = "block";
	document.getElementById('frmBajaCliente').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
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
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}



function mostrarAltaDispositivo() {
	document.frmAltaDispositivo.reset();
	document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "white";
	document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";
	document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	document.frmAltaDispositivo.marcaDispositivo.style.background = "white";			
	
    document.getElementById('frmAltaDispositivo').style.display = "block";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaDispositivo() {
	document.frmBajaDispositivo.reset();	
	document.frmBajaDispositivo.marcaDispositivo.style.background = "white";
	
	document.getElementById('frmBajaDispositivo').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaReparacion(){
	document.frmBajaReparacion.reset();
		
	document.getElementById('frmBajaReparacion').style.display = "block";
	document.getElementById('frmModificarReparacion').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
}

function mostrarBajaEmpleado() {
	document.frmBajaEmpleado.reset();	
    document.frmBajaEmpleado.nifEmpleado.style.background = "white";		
	
	document.getElementById('frmBajaEmpleado').style.display = "block";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";	
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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
    document.getElementById('frmAltaCliente').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
	document.getElementById('frmBajaCliente').style.display = "none";
	document.getElementById('frmModificarCliente').style.display = "none";
	document.getElementById('frmBajaDispositivo').style.display = "none";
	document.getElementById('frmModificarDispositivo').style.display = "none";
	document.getElementById('frmModificarReparacion').style.display = "none";
	document.getElementById('frmBajaReparacion').style.display = "none";
	document.getElementById('frmBajaEmpleado').style.display = "none";
	document.getElementById('frmModificarEmpleado').style.display = "none";
	document.getElementById('frmAltaPieza').style.display = "none";
	document.getElementById('frmBajaPieza').style.display = "none";
	document.getElementById('frmModificarPieza').style.display = "none";
	document.getElementById('frmBajaProveedor').style.display = "none";
	document.getElementById('frmModificarProveedor').style.display = "none";
	document.getElementById('frmAltaProveedor').style.display = "none";
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

document.getElementById("altaPieza").addEventListener("click", validarAltaPieza, false);
document.getElementById("bajaPieza").addEventListener("click", validarBajaPieza, false);
document.getElementById("modificarPieza").addEventListener("click", validarModificarPieza, false);

document.getElementById("altaProveedor").addEventListener("click", validarAltaProveedor, false);
document.getElementById("bajaProveedor").addEventListener("click", validarBajaProveedor, false);
document.getElementById("modificarProveedor").addEventListener("click", validarModificarProveedor, false);

document.getElementById("altaPago").addEventListener("click", validarAltaPago, false);
document.getElementById("altaCobro").addEventListener("click", validarAltaCobro, false);


function validarAltaPieza(){
	var id = document.frmAltaPieza.idPieza.value.trim();
	var tipo = document.frmAltaPieza.tipoPieza.value.trim();
	var precio = document.frmAltaPieza.precioPieza.value.trim();
	
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmAltaPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmAltaPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.idPieza.style.background = "white";	
	}
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmAltaPieza.tipoPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El Tipo de pieza debe ser una cadena entre 3 y 20 caracteres \n";			
		document.frmAltaPieza.tipoPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.tipoPieza.style.background = "white";	
	}
	
	//Precio
	if (expRegPrecio.test(precio) == false){	
		errores = true;				
		document.frmAltaPieza.precioPieza.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Precio debe contener numeros y acabar con el caracter €\n';				
		document.frmAltaPieza.precioPieza.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaPieza.precioPieza.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//alta
}
function validarBajaPieza(){
	var id = document.frmBajaPieza.idPieza.value.trim();
		
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmBajaPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmBajaPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaPieza.idPieza.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{}
		//baja
}
function validarModificarPieza(){
	var id = document.frmModificarPieza.idPieza.value.trim();
	var tipo = document.frmModificarPieza.tipoPieza.value.trim();
	var precio = document.frmModificarPieza.precioPieza.value.trim();
	
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmModificarPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmModificarPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarPieza.idPieza.style.background = "white";	
	}
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmModificarPieza.tipoPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El Tipo de pieza debe ser una cadena entre 3 y 20 caracteres \n";			
		document.frmModificarPieza.tipoPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarPieza.tipoPieza.style.background = "white";	
	}
	
	//Precio
	if (expRegPrecio.test(precio) == false){	
		errores = true;				
		document.frmModificarPieza.precioPieza.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Precio debe contener numeros y acabar con el caracter €\n';				
		document.frmModificarPieza.precioPieza.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarPieza.precioPieza.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//modif
}



function validarAltaProveedor(){	
	var nif = document.frmAltaProveedor.nifProveedor.value.trim();
	var nombre = document.frmAltaProveedor.nombreProveedor.value.trim();
	var tipo = document.frmAltaProveedor.tipoProveedor.value.trim();		
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	var expRegNombre = /^[[a-zA-Z\s]{3,20}$/;
	var expRegTipo = /^[[a-zA-Z\s]{3,15}$/;
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmAltaProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmAltaProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.nifProveedor.style.background = "white";	
	}

	//nombre
	if (expRegNombre.test(nombre) == false){		
		errores = true;					
		document.frmAltaProveedor.nombreProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El nombre debe contener entre 3 y 20 caracteres\n";			
		document.frmAltaProveedor.nombreProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.nombreProveedor.style.background = "white";	
	}	
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmAltaProveedor.tipoProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El campo tipo debe contener entre 3 y 15 caracteres\n";			
		document.frmAltaProveedor.tipoProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.tipoProveedor.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{}
		//alta
}
function validarBajaProveedor(){
	var nif = document.frmBajaProveedor.nifProveedor.value.trim();	
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmBajaProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaProveedor.nifProveedor.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{}
		//baja
}
function validarModificarProveedor(){
	var nif = document.frmModificarProveedor.nifProveedor.value.trim();
	var nombre = document.frmModificarProveedor.nombreProveedor.value.trim();
	var tipo = document.frmModificarProveedor.tipoProveedor.value.trim();		
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	var expRegNombre = /^[[a-zA-Z\s]{3,20}$/;
	var expRegTipo = /^[[a-zA-Z\s]{3,15}$/;
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmModificarProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.nifProveedor.style.background = "white";	
	}

	//nombre
	if (expRegNombre.test(nombre) == false){		
		errores = true;					
		document.frmModificarProveedor.nombreProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El nombre debe contener entre 3 y 20 caracteres\n";			
		document.frmModificarProveedor.nombreProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.nombreProveedor.style.background = "white";	
	}	
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmModificarProveedor.tipoProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El campo tipo debe contener entre 3 y 15 caracteres\n";			
		document.frmModificarProveedor.tipoProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.tipoProveedor.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{}
		//modif
}



function validarAltaCliente(){
	var nif = document.frmAltaCliente.nifCliente.value.trim();
	var nombre = document.frmAltaCliente.nombreCliente.value.trim();
	var apellidos = document.frmAltaCliente.apellidosCliente.value.trim();
	var direccion = document.frmAltaCliente.direccionCliente.value.trim();
	var telefono = document.frmAltaCliente.telefonoCliente.value.trim();
	
	
	
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
		document.frmAltaCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmAltaCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaCliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmAltaCliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmAltaCliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmAltaCliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmAltaCliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmAltaCliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmAltaCliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmAltaCliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmAltaCliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmAltaCliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{

		//altaCliente
		cad="";
		//var sNIFCliente = document.frmAltaCliente.nifCliente.value.trim();
		//var sNombreCliente = document.frmAltaCliente.nombreCliente.value.trim();
		//var sApellidosCliente = document.frmAltaCliente.apellidosCliente.value.trim();
		//var sDireccionCliente = document.frmAltaCliente.direccionCliente.value.trim();
		//var sTelefonoCliente = document.frmAltaCliente.telefonoCliente.value.trim();

	
		var oCliente = new Cliente(nombre,apellidos,nif, telefono, direccion);
		
		if (oSAT.altaCliente(oCliente)){
			cad="El Cliente ya ha sido registrado anteriormente";
		}
		else{
			cad="Cliente registrado correctamente";
		}


		document.frmAltaCliente.style.display = "none";
		document.frmAltaCliente.reset();	

		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}
	
}

function validarModificarCliente(){
	var nif = document.frmModificarCliente.nifCliente.value.trim();
	var nombre = document.frmModificarCliente.nombreCliente.value.trim();
	var apellidos = document.frmModificarCliente.apellidosCliente.value.trim();
	var direccion = document.frmModificarCliente.direccionCliente.value.trim();
	var telefono = document.frmModificarCliente.telefonoCliente.value.trim();
	
	
	
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
		document.frmModificarCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmModificarCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarCliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmModificarCliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmModificarCliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmModificarCliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmModificarCliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmModificarCliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmModificarCliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmModificarCliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmModificarCliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmModificarCliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{}
		//modificar
}

function validarBajaCliente(){
	var nif = document.frmBajaCliente.nifCliente.value.trim();
	var errores = false;
	var expRegNif = /^\d{8}\w$/;
		
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmBajaCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaCliente.nifCliente.style.background = "white";	
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
	else{
		var sMensaje = "";
        var oFormularios = document.frmAltaDispositivo;
        var sMarca = oFormularios.marcaDispositivo.value.trim();
        var sModelo = oFormularios.modeloDispositivo.value.trim();
        var rGarantia = oFormularios.rbtGarantia.checked;
        var dFechaEntrada = oFormularios.fechaEntradaDispositivo.value.trim();
        var dFechaSalida = oFormularios.fechaSalidaDispositivo.value.trim();

        var oDispositivos = new Dispositivo(sMarca, sModelo, rGarantia, new Date(dFechaEntrada), new Date(dFechaSalida));
        var bEncontrado = oSAT.altaDispositivos(oDispositivos);
        if (bEncontrado) {
            sMensaje = "Ese dispositivo ya existe.";
        } else {
            sMensaje = "Dispositivo registrado.";
        }

        oFormularios.style.display = "none";
        oFormularios.reset();
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}
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
document.frmAltaCliente.volver.addEventListener("click", volverAltaCliente, false);
document.frmBajaCliente.volver.addEventListener("click", volverBajaCliente, false);
document.frmModificarCliente.volver.addEventListener("click", volverModificarCliente, false);


document.frmAltaDispositivo.volver.addEventListener("click", volverAltaDispositivo, false);
document.frmBajaDispositivo.volver.addEventListener("click", volverBajaDispositivo, false);
document.frmModificarDispositivo.volver.addEventListener("click", volverModificarDispositivo, false);


document.frmAltaReparacion.volver.addEventListener("click", volverAltaReparacion, false);
document.frmBajaReparacion.volver.addEventListener("click", volverBajaReparacion, false);
document.frmModificarReparacion.volver.addEventListener("click", volverModificarReparacion, false);

document.frmAltaProveedor.volver.addEventListener("click", volverAltaProveedor, false);
document.frmBajaProveedor.volver.addEventListener("click", volverBajaProveedor, false);
document.frmModificarProveedor.volver.addEventListener("click", volverModificarProveedor, false);

document.frmAltaPieza.volver.addEventListener("click", volverAltaPieza, false);
document.frmBajaPieza.volver.addEventListener("click", volverBajaPieza, false);
document.frmModificarPieza.volver.addEventListener("click", volverModificarPieza, false);


document.frmAltaEmpleado.volver.addEventListener("click", volverAltaEmpleado, false);
document.frmBajaEmpleado.volver.addEventListener("click", volverBajaEmpleado, false);
document.frmModificarEmpleado.volver.addEventListener("click", volverModificarEmpleado, false);


document.frmPago.volver.addEventListener("click", volverPago, false);
document.frmCobro.volver.addEventListener("click", volverCobro, false);

function volverAltaCliente(){
	document.frmAltaCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaCliente(){
	document.frmBajaCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarCliente(){
	document.frmModificarCliente.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaProveedor(){
	document.frmAltaProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaProveedor(){
	document.frmBajaProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarProveedor(){
	document.frmModificarProveedor.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaPieza(){
	document.frmAltaPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaPieza(){
	document.frmBajaPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarPieza(){
	document.frmModificarPieza.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaDispositivo(){
	document.frmAltaDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaDispositivo(){
	document.frmBajaDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarDispositivo(){
	document.frmModificarDispositivo.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaReparacion(){
	document.frmAltaReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaReparacion(){
	document.frmBajaReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarReparacion(){
	document.frmModificarReparacion.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}



function volverAltaEmpleado(){
	document.frmAltaEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverBajaEmpleado(){
	document.frmBajaEmpleado.style.display = "none";
	document.getElementById('jumbo').style.display = "block";
}

function volverModificarEmpleado(){
	document.frmModificarEmpleado.style.display = "none";
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