function Proveedor(sTipo, sNombre, sCIF) {
    this.sTipo = sTipo;
    this.sNombre = sNombre
    this.sCIF = sCIF;
	this.bActivo = true;
}

Proveedor.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sTipo + "</td><td>" + this.sNombre + "</td><td>" + this.sCIF + "</td></tr>";
}

function Pieza_Repuesto(sTipo, fPrecio, sId) {
    this.sTipo = sTipo;
    this.fPrecio = fPrecio;
    this.sId = sId;
	this.bActivo = true;
}

Pieza_Repuesto.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sTipo + "</td><td>" + this.fPrecio + "</td><td>" + this.sId + "</td></tr>";
}

function Reparacion(sAveria, sEstado, fImportePresupuestado, sComentarios){
    this.sAveria = sAveria;
    this.sEstado = sEstado;
    this.fImportePresupuestado = fImportePresupuestado;
    this.sComentarios = sComentarios;
	this.bActivo = true;
}

Reparacion.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sAveria + "</td><td>" + this.sEstado + "</td><td>" + this.fImportePresupuestado + "</td><td>" + this.sComentarios + "</td></tr>";
}

function Persona(sNombre, sApellidos, sDNI, sTelefono, sDireccion){
    this.sNombre = sNombre; 	
    this.sApellidos = sApellidos;
    this.sDNI = sDNI;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
}

Persona.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td></tr>";
}

function Personal(sIBAN, bEncargado) {
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
    this.sIBAN = sIBAN;
    this.bEncargado = bEncargado;
	this.bActivo = true;
}

Personal.prototype = Object.create(Persona.prototype);
Personal.prototype.constructor = Personal;

Personal.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td><td>" + this.sIBAN + "</td><td>" + this.bEncargado + "</td></tr>";
}

function Cliente(sNombre, sApellidos, sDNI, sTelefono, sDireccion) {
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
	this.bActivo = true;
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sNombre + "</td><td>" + this.sApellidos + "</td><td>" + this.sDNI + "</td><td>" + this.sTelefono + "</td><td>" + this.sDireccion + "</td></tr>";
}

function Apunte(fImporte, fVencimiento, bEstado, sAsunto,sNifEmpleado){
    this.fImporte = fImporte;
    this.fVencimiento = fVencimiento;
    this.bEstado = bEstado;
    this.sAsunto = sAsunto;
	this.sNifEmpleado = sNifEmpleado;
}

Apunte.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.fImporte + "</td><td>" + this.fVencimiento + "</td><td>" + this.bEstado + "</td><td>" + this.sAsunto + "</td></tr>";
}

function Pago(fImporte, fVencimiento, bEstado, sAsunto,sNifEmpleado,sNifProveedor) {
    Apunte.call(this, fImporte, fVencimiento, bEstado, sAsunto,sNifEmpleado);
	this.sNifProveedor = sNifProveedor;
}

Pago.prototype = Object.create(Apunte.prototype);
Pago.prototype.constructor = Pago;

Pago.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.fImporte + "</td><td>" + this.fVencimiento + "</td><td>" + this.bEstado + "</td><td>" + this.sAsunto + "</td></tr>";
}

function Cobro(fImporte, fVencimiento, bEstado, sAsunto,sNifEmpleado,sNifCliente) {
    Apunte.call(this, fImporte, fVencimiento, bEstado, sAsunto,sNifEmpleado);
	this.sNifCliente = sNifCliente;
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
	this.bActivo = true;
}

Dispositivo.prototype.toHTMLRow = function () {
    return "<tr><td>" + this.sMarca + "</td><td>" + this.sModelo + "</td><td>" + this.dFechaCompra + "</td><td>" + this.fEntrega + "</td><td>" + this.fSalida + "</td></tr>";
}


//metodos
class SAT {
    constructor() {
        this._personas = [];
        this._dispositivos = [];
		this._apuntes = [];//pagos y cobros
		this._proveedores = [];
		this._piezas = [];
		this._dispositivos = [];
		this._reparaciones = [];
    }

    altaCliente(oCliente){

        
        var esta=false;

        for (var i in this._personas ) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i] instanceof Cliente) {
                esta=true;
            }
        }
        if (!esta) {
            this._personas.push(oCliente);
        }
        return esta;
    }

    altaDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i = 0; i < this._dispositivos.length && !bEncontrado; i++) {
            if (this._dispositivos[i].sModelo == oDispositivos.sModelo) {
                bEncontrado = true;
            }
        }
        if (!bEncontrado) {
            this._dispositivos.push(oDispositivos);
        }

        return bEncontrado;
    }

    bajaDispositivos(marca, modelo)
    {
        var bEncontrado = false;
        for (var i = 0; i < this._dispositivos.length && !bEncontrado; i++) {
            if (this._dispositivos[i].sMarca == marca && this._dispositivos[i].sModelo == modelo) {
                bEncontrado = true;
            }
        }
        if (bEncontrado) {
            this._dispositivos.pop(new Dispositivo(marca, modelo, "hola", new Date(1995,11,17), new Date(1995,11,18)));
        }

        return bEncontrado;

    }
}
