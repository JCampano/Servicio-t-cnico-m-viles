var oSAT = new SAT();
cargaDatosDePrueba();
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
	document.frmBajaDispositivo.modeloDispositivo.style.background = "white";
	
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
    //Mostrar valores del select múltiple

    var dispositivo = document.frmAltaReparacion.repararDispositivo;
    var option=document.createElement("option");
    for (var i in oSAT._dispositivos) {
        if (oSAT._dispositivos[i].bActivo==true)
            {
        option.text=oSAT._dispositivos[i].sMarca + " " + oSAT._dispositivos[i].sModelo;
        option.value=oSAT._dispositivos[i].sModelo;
        dispositivo.appendChild(option);
                }
    }
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

    var dispositivo = document.frmAltaReparacion.repararDispositivo;
    var option=document.createElement("option");
    for (var i in oSAT._reparaciones) {
        if (oSAT._reparaciones[i].bActivo==true)
            {
        option.text=oSAT._reparaciones[i].sMarca + " " + oSAT._reparaciones[i].sModelo;
        option.value=oSAT._dispositivos[i].sModelo;
        dispositivo.appendChild(option);
            }
    }
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

    var dispositivo = document.frmAltaReparacion.repararDispositivo;
    var option=document.createElement("option");
    for (var i in oSAT._reparaciones) {
        if (oSAT._reparaciones[i].bActivo==true)
            {
        option.text=oSAT._reparaciones[i].sMarca + " " + oSAT._reparaciones[i].sModelo;
        option.value=oSAT._dispositivos[i].sModelo;
        dispositivo.appendChild(option);
            }
    }
}




function mostrarNuevoEmpleado() {
	document.frmAltaEmpleado.reset();	
    document.frmAltaEmpleado.nifEmpleado.style.background = "white";
	document.frmAltaEmpleado.nombreEmpleado.style.background = "white";
	document.frmAltaEmpleado.apellidosEmpleado.style.background = "white";
	document.frmAltaEmpleado.direccionEmpleado.style.background = "white";
	document.frmAltaEmpleado.telefonoEmpleado.style.background = "white";	
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
	else{
		cad="";	
		var oPieza = new Pieza_Repuesto(tipo,precio,id);
		if (oSAT.altaPieza(oPieza)){
			cad="La pieza ya ha sido registrado anteriormente";
		}
		else{
			cad="Pieza registrada correctamente";
			document.frmAltaPieza.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";			
		if (oSAT.bajaPieza(id)){
			cad="Pieza dada de baja";
			document.frmBajaPieza.reset();
		}
		else{
			cad="Pieza no registrada";
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";	
		var oPieza = new Pieza_Repuesto(tipo,precio,id);
		if (oSAT.modificarPieza(oPieza)){
			cad="La pieza ha sido modificada";
			document.frmModificarPieza.reset();
		}
		else{
			cad="Pieza no encontrada";			
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";	
		var oProveedor = new Proveedor(tipo,nombre,nif);
		if (oSAT.altaProveedor(oProveedor)){
			cad="El Proveedor ya ha sido registrado anteriormente";
		}
		else{
			cad="Proveedor registrado correctamente";
			document.frmAltaProveedor.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";	
		if (!oSAT.bajaProveedor(nif)){
			cad="El Proveedor ha sido dado de baja";
		}
		else{
			cad="Proveedor no registrado";
			document.frmBajaProveedor.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";	
		var oProveedor = new Proveedor(tipo,nombre,nif);
		if (!oSAT.modificarProveedor(oProveedor)){
			cad="Proveedor no registrado";
		}
		else{
			cad="Proveedor modificado correctamente";
			document.frmModificarProveedor.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
		cad="";	
		var oCliente = new Cliente(nombre,apellidos,nif, telefono, direccion);
		if (oSAT.altaCliente(oCliente)){
			cad="Cliente registrado anteriormente";
		}
		else{
			cad="Cliente registrado correctamente";
			document.frmAltaCliente.reset();
		}			
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
	else{
		cad="";	
		var oCliente = new Cliente(nombre,apellidos,nif, telefono, direccion);
		if (oSAT.modificarCliente(oCliente)){
			cad="El Cliente modificado correctamente";
			document.frmModificarCliente.reset();
		}
		else{
			cad="Cliente no registrado";
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		cad="";	
		if (oSAT.bajaCliente(nif)){
			cad="El Cliente ha sido dado de baja";
		}
		else{
			cad="Cliente no registrado";
			document.frmBajaCliente.reset();
		}			
		alert(cad); //aqui hay que hacer appenchild para mostrar el mensaje 
	}		
}


function validarAltaDispositivo(){
	var marca = document.frmAltaDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmAltaDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmAltaDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmAltaDispositivo.fechaSalidaDispositivo.value.trim();
	
	
	var errores = false;
	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
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
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmAltaDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato AAAA-MM-DD\n";				
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
        var rGarantia = document.frmAltaDispositivo.rbtGarantia.checked;
       
        var oDispositivos = new Dispositivo(marca, modelo, rGarantia, new Date(fechaEntrada), new Date(fechaSalida));
        var bEncontrado = oSAT.altaDispositivos(oDispositivos);
        if (bEncontrado) {
            sMensaje = "Ese dispositivo ya existe.";
        } else {
            sMensaje = "Dispositivo registrado.";
			document.frmAltaDispositivo.reset();
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}
}

function validarModificarDispositivo(){
	var marca = document.frmModificarDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmModificarDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmModificarDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmModificarDispositivo.fechaSalidaDispositivo.value.trim();
	
	
	var errores = false;
	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/;

	
	
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
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmModificarDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato AAAA-MM-DD\n";				
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
	else{
		var sMensaje = "";        
        var rGarantia = document.frmModificarDispositivo.rbtGarantia.checked;
       
        var oDispositivos = new Dispositivo(marca, modelo, rGarantia, new Date(fechaEntrada), new Date(fechaSalida));
        var bEncontrado = oSAT.modificarDispositivos(oDispositivos);
        if (bEncontrado) {
            sMensaje = "Dispositivo modificado correctamente";
			document.frmModificarDispositivo.reset();
        } else {
            sMensaje = "Dispositivo no registrado.";			
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}			
}

function validarBajaDispositivo(){
	var marca = document.frmBajaDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmBajaDispositivo.modeloDispositivo.value.trim();
	var errores = false;	
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
	
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
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmBajaDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmBajaDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmBajaDispositivo.modeloDispositivo.style.background = "white";
	}
	
	if(errores)
		alert(sErrores);
	else{
		var sMensaje = "";        
              
        var bEncontrado = oSAT.bajaDispositivos(marca,modelo);
        if (bEncontrado) {
            sMensaje = "Dispositivo dado de baja";
			document.frmBajaDispositivo.reset();
        } else {
            sMensaje = "Dispositivo no registrado.";			
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}	
}


function validarAltaReparacion(){
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
	else{
		var sMensaje = "";        
        var sModelo = document.frmAltaReparacion.repararDispositivo.value.trim();
        var oReparacion = new Reparacion(sModelo, averia, estado, importe, comentarios);
        var bEncontrado = oSAT.altaReparacion(oReparacion);
        if (!bEncontrado) {
            sMensaje = "Alta reparacion ok";
			document.frmAltaReparacion.reset();
        } else {
            sMensaje = "reparacion ya registrada";			
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
}

function validarModificarReparacion(){
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
	else{
		var sMensaje = "";        
        var sModelo = document.frmModificarReparacion.repararDispositivo.value.trim();
       
        var oReparacion = new Reparacion(sModelo, averia, estado, importe, comentarios);
        var bEncontrado = oSAT.modificarReparacion(oReparacion);
        if (bEncontrado) {
            sMensaje = "Reparacion modificada correctamente";
			document.frmModificarReparacion.reset();
        } else {
            sMensaje = "reparacion no encontrada";			
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
}

function validarBajaReparacion(){
	
	if(document.frmBajaReparacion.repararDispositivo.value.trim() != "Seleccione"){			      
        var dispositivo = document.frmBajaReparacion.repararDispositivo.value.trim();
       
        var bEncontrado = oSAT.bajaReparacion(dispositivo);             
		document.frmBajaReparacion.reset();        
        alert("Reparacion eliminada correctamente");//aqui hay que hacer appenchild para mostrar el mensaje 
	}
	else{
	 alert("Debe seleccionar un dispositivo");
	}
}


function validarAltaEmpleado(){	
	var nif = document.frmAltaEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmAltaEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmAltaEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmAltaEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmAltaEmpleado.telefonoEmpleado.value.trim();	
	var iban = document.frmAltaEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmAltaEmpleado.cargoEmpleado.value.trim();	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
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
	else{
		var sMensaje = "";           
       
	    var oEmpleado = new Personal(nombre,apellidos,nif,direccion,telefono,iban,cargo)
        var bEncontrado = oSAT.altaEmpleado(oEmpleado);
        if (bEncontrado) {
            sMensaje = "Empleado registrado anteriormente";			
        } else {
            sMensaje = "Alta Empleado ok";		
			document.frmAltaEmpleado.reset();
        }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
}

function validarModificarEmpleado(){	
	var nif = document.frmModificarEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmModificarEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmModificarEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmModificarEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmModificarEmpleado.telefonoEmpleado.value.trim();	
	var iban = document.frmModificarEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmModificarEmpleado.cargoEmpleado.value.trim();	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
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
	else{
		var sMensaje = "";           
       
	    var oEmpleado = new Personal(nombre,apellidos,nif,telefono,direccion,iban,cargo)
        var bEncontrado = oSAT.modificarEmpleado(oEmpleado);
        if (bEncontrado) {
            sMensaje = "Empleado modificado";
			document.frmModificarEmpleado.reset();			
        } else {
            sMensaje = "Empleado no registrado";		
	    }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
	else{
		var sMensaje = "";                  
	    
        var bEncontrado = oSAT.bajaEmpleado(nif);
        if (bEncontrado) {
            sMensaje = "Empleado eliminado";
			document.frmBajaEmpleado.reset();			
        } else {
            sMensaje = "Empleado no registrado";		
	    }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
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
	else{
		var sMensaje = "";           
       
	    var oPago = new Pago(importe,fechaEntrada,estado,asunto)
        var bEncontrado = oSAT.pago(oPago);
        if (bEncontrado) {
            sMensaje = "Pago realizado anteriormente";						
        } else {
            sMensaje = "Pago realizado correctamente";	
			document.frmPago.reset();			
	    }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
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
	else{
		var sMensaje = "";           
       
	    var oCobro = new Cobro(importe,fechaEntrada,estado,asunto)
        var bEncontrado = oSAT.cobro(oCobro);
        if (bEncontrado) {
            sMensaje = "Cobro realizado anteriormente";						
        } else {
            sMensaje = "Cobro realizado correctamente";	
			document.frmCobro.reset();			
	    }		
        alert(sMensaje);//aqui hay que hacer appenchild para mostrar el mensaje 
	}		
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


//DATOS DE PRUEBA
function cargaDatosDePrueba(){
	//clientes
		var oCliente = new Cliente("Pepe","Pepe","11111111a", "999999999", "aaa");
		var cliente = oSAT.altaCliente(oCliente);

		oCliente = new Cliente("Paco","Paco","22222222a", "999999999", "aaa");
		cliente = oSAT.altaCliente(oCliente);

		oCliente = new Cliente("Jose","Jose","33333333a", "999999999", "aaa");
		cliente = oSAT.altaCliente(oCliente);	
	
	//dispositivos
		var rGarantia = document.frmAltaDispositivo.rbtGarantia.checked;       
        var oDispositivos = new Dispositivo("Sony", "Z", rGarantia, new Date("2011-03-12"), new Date("2012-01-04"));
        var dispositivo = oSAT.altaDispositivos(oDispositivos);
		
		
}

//quitar el div añadido por free icons
var a =document.getElementsByTagName("div");
var quitar = a.length - 1;
a[quitar].style.display = "none";
