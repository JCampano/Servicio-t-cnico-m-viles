var oSAT = new SAT();

document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navAltaDispositivo").addEventListener("click", mostrarAltaDispositivo, false);
document.getElementById("navReparacion").addEventListener("click", mostrarNuevaReparacion, false);
document.getElementById("navAltaEmpleado").addEventListener("click", mostrarNuevoEmpleado, false);
document.getElementById("navPago").addEventListener("click", mostrarNuevoPago, false);
document.getElementById("navCobro").addEventListener("click", mostrarNuevoCobro, false);


function mostrarAltaCliente() {
    document.getElementById('frmAltacliente').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}

function mostrarAltaDispositivo() {
    document.getElementById('frmAltaDispositivo').style.display = "block";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}

function mostrarNuevaReparacion() {
    document.getElementById('frmAltaReparacion').style.display = "block";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}

function mostrarNuevoEmpleado() {
    document.getElementById('frmAltaEmpleado').style.display = "block";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}

function mostrarNuevoPago() {
    document.getElementById('frmPago').style.display = "block";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('frmCobro').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}

function mostrarNuevoCobro() {
    document.getElementById('frmCobro').style.display = "block";
    document.getElementById('frmPago').style.display = "none";
    document.getElementById('frmAltaEmpleado').style.display = "none";
    document.getElementById('frmAltaReparacion').style.display = "none";
    document.getElementById('frmAltaDispositivo').style.display = "none";
    document.getElementById('frmAltacliente').style.display = "none";
    document.getElementById('jumbo').style.display = "none";
}
