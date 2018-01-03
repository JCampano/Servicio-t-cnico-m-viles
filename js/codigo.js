class SAT {
    constructor() {

    }
}

function Proveedor(sTipo, sNombre, sCIF) {
    this.sTipo = sTipo;
    this.sNombre = sNombre
    this.sCIF = sCIF;
}

Proveedor.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sTipo + "</td><td>" + this.sNombre + "</td><td>" + this.sCIF + "</td></tr>";
}

function Pieza_Repuesto (sTipo, fPrecio, sId)
{
    this.sTipo = sTipo;
    this.fPrecio = fPrecio;
    this.sId = sId;
}

Pieza_Repuesto.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sTipo + "</td><td>" + this.fPrecio + "</td><td>" + this.sId + "</td></tr>";
}

function Reparacion (sAveria, sEstado, fImportePresupuestado, sComentarios)
{
    this.sAveria = sAveria;
    this.sEstado = sEstado;
    this.fImportePresupuestado = fImportePresupuestado;
    this.sComentarios = sComentarios;
}

Reparacion.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sAveria + "</td><td>" + this.sEstado + "</td><td>" + this.fImportePresupuestado + "</td><td>" + this.sComentarios + "</td></tr>";
}

function Persona(sNombre, sApellidos, sDNI, sTelefono, sDireccion) {
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sDNI = sDNI;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
}

Persona.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td></tr>";
}

function Personal (sIBAN, bEncargado)
{
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
    this.sIBAN = sIBAN;
    this.bEncargado = bEncargado;
}

Personal.prototype = Object.create(Persona.prototype);
Personal.prototype.constructor = Personal;

Personal.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td><td>" + this.sIBAN + "</td><td>" + this.bEncargado + "</td></tr>";
}

function Cliente ()
{
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td></tr>";
}

function Apunte(fImporte, fVencimiento, bEstado, sAsunto) {
    this.fImporte = fImporte;
    this.fVencimiento = fVencimiento;
    this.bEstado = bEstado;
    this.sAsunto = sAsunto;
}

Apunte.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.fImporte + "</td><td>" + this.fVencimiento + "</td><td>" + this.bEstado + "</td><td>" + this.sAsunto + "</td></tr>";
}

function Pago ()
{
    Apunte.call(this, fImporte, fVencimiento, bEstado, sAsunto);
}

Pago.prototype = Object.create(Apunte.prototype);
Pago.prototype.constructor = Pago;

Pago.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.fImporte + "</td><td>" + this.fVencimiento + "</td><td>" + this.bEstado + "</td><td>" + this.sAsunto + "</td></tr>";
}

function Cobro ()
{
    Cobro.call(this, fImporte, fVencimiento, bEstado, sAsunto);
}

Cobro.prototype = Object.create(Apunte.prototype);
Cobro.prototype.constructor = Cobro;

Cobro.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.fImporte + "</td><td>" + this.fVencimiento + "</td><td>" + this.bEstado + "</td><td>" + this.sAsunto + "</td></tr>";
}

function Dispositivo(sMarca, sModelo, dFechaCompra, fEntrega, fSalida) {
    this.sMarca = sMarca;
    this.sModelo = sModelo;
    this.dFechaCompra = dFechaCompra;
    this.fEntrega = fEntrega;
    this.fSalida = fSalida;
}

Dispositivo.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sMarca + "</td><td>" + this.sModelo + "</td><td>" + this.dFechaCompra + "</td><td>" + this.fEntrega + "</td><td>" + this.fSalida + "</td></tr>";
}
}
