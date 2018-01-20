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
	this.bActivo = false;
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
		this._reparaciones = [];
    }

    //CLIENTES
    altaCliente(oCliente){

        
        var esta=false;

        for (var i in this._personas ) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i].bActivo==true && this._personas[i] instanceof Cliente) {
                esta=true;
            }
            else{
                //el cliente existe pero esta inactivo
                //cad="El cliente ya existe, pero esta inactivo";
            }
        }
        if (!esta) {
            this._personas.push(oCliente);
        }
        return esta;
    }


    //DISPOSITIVOS
    altaDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == oDispositivos.sMarca && this._dispositivos[i].sModelo == oDispositivos.sModelo && this._dispositivos[i].bActivo==true) {
                bEncontrado = true;
            }
            else{
                //el dispositivo existe pero esta inactivo (eliminado)
               // cad="El dispositivo ya exite, pero esta inactivo";
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
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == marca && this._dispositivos[i].sModelo == modelo && this._dispositivos[i].bActivo == false) {
                bEncontrado = true;
                this._dispositivos[i].bActivo=true;
            }
            else{
                //dispositivo ya inactivo
                //cad="Dispositivo dado de baja anteriormente";
            }
        }

        return bEncontrado;

    }

    //PIEZAS
    altaPieza(oPieza)
    {
        var esta=false;

        for (var i in this._piezas ) {
            if (oPieza.id == this._piezas[i].id && this._piezas[i].bActivo==true) {
                esta=true;
            }
            else{
                //la pieza existe pero esta inactiva (eliminada)
                //cad="La pieza ya exite, pero esta inactiva";
            }
        }
        if (!esta) {
            this._piezas.push(oPieza);
        }
        return esta;
    }

    bajaPieza(id)
    {
        var bEncontrado = false;
        for (var i in this._piezas) {
            if (this._piezas[i].sId == id && this._piezas[i].bActivo == true) {
                bEncontrado = true;
               this._piezas[i].bActivo=false;
            }
            else{
                //ya esta la pieza inactiva
                //cad="Pieza dada de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarPieza(oPieza)
    {
        var bEncontrado = false;
        for (var i in this._piezas) 
        {
             if (this._piezas[i].sId == oPieza.sId && this._piezas[i].bActivo == true) {
                this._piezas[i].sTipo=oPieza.sTipo;
                this._piezas[i].fPrecio=oPieza.fPrecio;
                bEncontrado=true;
             }
        }
        return bEncontrado;
    }

    //PROVEEDORES
    altaProveedor(oProveedor)
    {
         var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo==true) {
                bEncontrado = true;
            }
            else{
                //el proveedor existe pero esta inactivo (eliminado)
               // cad="El proveedor ya exite, pero esta inactivo";
            }
        }
        if (!bEncontrado) {
            this._proveedores.push(oProveedor);
        }

        return bEncontrado;
    }

    bajaProveedor(nif)
    {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == nif && this._proveedores[i].bActivo == true) {
                bEncontrado = true;
               this._proveedores[i].bActivo=false;
            }
            else{
                //ya esta el proveedor inactiva
                //cad="Proveedor dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

      modificarProveedor(oProveedor)
    {
        var bEncontrado = false;
        for (var i in this._proveedores) 
        {
             if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo == true) {
                this._proveedores[i].sNombre=oProveedor.sNombre;
                this._proveedores[i].sTipo=oProveedor.sTipo;
                bEncontrado=true;
             }
        }
        return bEncontrado;
    }
}
