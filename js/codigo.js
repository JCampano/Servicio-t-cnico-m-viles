function Proveedor(sTipo, sNombre, sCIF) {
    this.sTipo = sTipo;
    this.sNombre = sNombre
    this.sCIF = sCIF;
    this.bActivo = true;
}

function Pieza_Repuesto(sTipo, fPrecio, sId) {
    this.sTipo = sTipo;
    this.fPrecio = fPrecio;
    this.sId = sId;
    this.bActivo = true;
}

function Reparacion(sModelo, sAveria, sEstado, fImportePresupuestado, sComentarios) {
    this.sModelo = sModelo;
    this.sAveria = sAveria;
    this.sEstado = sEstado;
    this.fImportePresupuestado = fImportePresupuestado;
    this.sComentarios = sComentarios;
    this.bActivo = true;
}

function Persona(sNombre, sApellidos, sDNI, sTelefono, sDireccion) {
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sDNI = sDNI;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
}

function Personal(sNombre, sApellidos, sDNI, sTelefono, sDireccion, sIBAN, sCargo) {
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
    this.sIBAN = sIBAN;
    this.sCargo = sCargo;
    this.bActivo = true;
}

Personal.prototype = Object.create(Persona.prototype);
Personal.prototype.constructor = Personal;

function Cliente(sNombre, sApellidos, sDNI, sTelefono, sDireccion) {
    Persona.call(this, sNombre, sApellidos, sDNI, sTelefono, sDireccion);
    this.bActivo = true;
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

function Apunte(fImporte, fVencimiento, bEstado, sAsunto, sNifEmpleado) {
    this.fImporte = fImporte;
    this.fVencimiento = fVencimiento;
    this.bEstado = bEstado;
    this.sAsunto = sAsunto;
    this.sNifEmpleado = sNifEmpleado;
}

function Pago(fImporte, fVencimiento, bEstado, sAsunto, sNifEmpleado, sNifProveedor) {
    Apunte.call(this, fImporte, fVencimiento, bEstado, sAsunto, sNifEmpleado);
    this.sNifProveedor = sNifProveedor;
}

Pago.prototype = Object.create(Apunte.prototype);
Pago.prototype.constructor = Pago;

function Cobro(fImporte, fVencimiento, bEstado, sAsunto, sNifEmpleado, sNifCliente) {
    Apunte.call(this, fImporte, fVencimiento, bEstado, sAsunto, sNifEmpleado);
    this.sNifCliente = sNifCliente;
}

Cobro.prototype = Object.create(Apunte.prototype);
Cobro.prototype.constructor = Cobro;


function Dispositivo(sMarca, sModelo, dFechaCompra, fEntrada, fSalida) {
    this.sMarca = sMarca;
    this.sModelo = sModelo;
    this.dFechaCompra = dFechaCompra;
    this.fEntrada = fEntrada;
    this.fSalida = fSalida;
    this.bActivo = true;
}


//metodos
class SAT {
    constructor() {
        this._personas = [];
        this._dispositivos = [];
        this._apuntes = []; //pagos y cobros
        this._proveedores = [];
        this._piezas = [];
        this._reparaciones = [];
    }

    //CLIENTES
    altaCliente(oCliente) {
        var esta = false;

        for (var i in this._personas) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                esta = true;
            } else {
                //el cliente existe pero esta inactivo
                //cad="El cliente ya existe, pero esta inactivo";
            }
        }
        if (!esta) {
            this._personas.push(oCliente);
        }
        return esta;
    }

    bajaCliente(nif) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (nif == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                bEncontrado = true;
                this._personas[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
                //cad="Dispositivo dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarCliente(oCliente) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                this._personas[i].sNombre = oCliente.sNombre;
                this._personas[i].sApellidos = oCliente.sApellidos;
                this._personas[i].sDireccion = oCliente.sDireccion;
                this._personas[i].sTelefono = oCliente.sTelefono;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }


    //DISPOSITIVOS
    altaDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == oDispositivos.sMarca && this._dispositivos[i].sModelo == oDispositivos.sModelo && this._dispositivos[i].bActivo == true) {
                bEncontrado = true;
            } else {
                //el dispositivo existe pero esta inactivo (eliminado)
                // cad="El dispositivo ya exite, pero esta inactivo";
            }
        }
        if (!bEncontrado) {
            this._dispositivos.push(oDispositivos);
        }

        return bEncontrado;
    }

    modificarDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == oDispositivos.sMarca && this._dispositivos[i].sModelo == oDispositivos.sModelo && this._dispositivos[i].bActivo == true) {
                this._dispositivos[i].rGarantia = oDispositivos.rGarantia;
                this._dispositivos[i].fechaEntrada = oDispositivos.fechaEntrada;
                this._dispositivos[i].fechaSalida = oDispositivos.fechaSalida;
                bEncontrado = true;

            } else {
                //el dispositivo existe pero esta inactivo (eliminado)
                // cad="El dispositivo ya exite, pero esta inactivo";
            }
        }
        return bEncontrado;
    }

    bajaDispositivos(marca, modelo) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {

            if (this._dispositivos[i].sMarca == marca && this._dispositivos[i].sModelo == modelo && this._dispositivos[i].bActivo == true) {
                bEncontrado = true;
                this._dispositivos[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
            }
        }
        return bEncontrado;
    }

    //PIEZAS
    altaPieza(oPieza) {
        var esta = false;

        for (var i in this._piezas) {
            if (oPieza.id == this._piezas[i].id && this._piezas[i].bActivo == true) {
                esta = true;
            } else {
                //la pieza existe pero esta inactiva (eliminada)
                //cad="La pieza ya exite, pero esta inactiva";
            }
        }
        if (!esta) {
            this._piezas.push(oPieza);
        }
        return esta;
    }

    bajaPieza(id) {
        var bEncontrado = false;
        for (var i in this._piezas) {
            if (this._piezas[i].sId == id && this._piezas[i].bActivo == true) {
                bEncontrado = true;
                this._piezas[i].bActivo = false;
            } else {
                //ya esta la pieza inactiva
                //cad="Pieza dada de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarPieza(oPieza) {
        var bEncontrado = false;
        for (var i in this._piezas) {
            if (this._piezas[i].sId == oPieza.sId && this._piezas[i].bActivo == true) {
                this._piezas[i].sTipo = oPieza.sTipo;
                this._piezas[i].fPrecio = oPieza.fPrecio;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    //PROVEEDORES
    altaProveedor(oProveedor) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo == true) {
                bEncontrado = true;
            } else {
                //el proveedor existe pero esta inactivo (eliminado)
                // cad="El proveedor ya exite, pero esta inactivo";
            }
        }
        if (!bEncontrado) {
            this._proveedores.push(oProveedor);
        }

        return bEncontrado;
    }

    bajaProveedor(nif) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == nif && this._proveedores[i].bActivo == true) {
                bEncontrado = true;
                this._proveedores[i].bActivo = false;
            } else {
                //ya esta el proveedor inactiva
                //cad="Proveedor dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarProveedor(oProveedor) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo == true) {
                this._proveedores[i].sNombre = oProveedor.sNombre;
                this._proveedores[i].sTipo = oProveedor.sTipo;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    //EMPLEADOS
    altaEmpleado(oEmpleado) {
        var esta = false;

        for (var i in this._personas) {
            if (oEmpleado.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                esta = true;
            } else {
                //el cliente existe pero esta inactivo
                //cad="El cliente ya existe, pero esta inactivo";
            }
        }
        if (!esta) {
            this._personas.push(oEmpleado);
        }
        return esta;
    }

    bajaEmpleado(nif) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (nif == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                bEncontrado = true;
                this._personas[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
                //cad="Dispositivo dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarEmpleado(oEmpleado) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (oEmpleado.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                this._personas[i].sNombre = oEmpleado.sNombre;
                this._personas[i].sApellidos = oEmpleado.sApellidos;
                this._personas[i].sDireccion = oEmpleado.sDireccion;
                this._personas[i].sTelefono = oEmpleado.sTelefono;
                this._personas[i].sIBAN = oEmpleado.sIBAN;
                this._personas[i].sCargo = oEmpleado.sCargo;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    altaReparacion(oReparacion)
    {
        var bEncontrado = false;
        for (var i in this._reparaciones) {
            if (this._reparaciones[i].sModelo.split(" ")[this._reparaciones[i].sModelo.split(" ").length-1] == oReparacion.sModelo.split(" ")[oReparacion.sModelo.split(" ").length-1] && this._reparaciones[i].bActivo == true) {
                bEncontrado = true;
            } else {
                // ya inactivo
                //cad=" dado de baja anteriormente";
            }
        }
		if (!bEncontrado) {
            this._reparaciones.push(oReparacion);
		}
        return bEncontrado;
    }

    modificarReparacion(oReparacion)
    {
        var bEncontrado = false;
        for (var i in this._reparaciones) {
            //alert(this._reparaciones[i].sModelo);
            //alert(oReparacion.sModelo.split(" ")[oReparacion.sModelo.split(" ").length-1]);
            if (this._reparaciones[i].sModelo.split(" ")[this._reparaciones[i].sModelo.split(" ").length-1] == oReparacion.sModelo.split(" ")[oReparacion.sModelo.split(" ").length-1] && this._reparaciones[i].bActivo == true) {
                this._reparaciones[i].sAveria = oReparacion.sAveria;
                this._reparaciones[i].sEstado = oReparacion.sEstado;
                this._reparaciones[i].fImportePresupuestado = oReparacion.fImportePresupuestado;
                this._reparaciones[i].sComentarios = oReparacion.sComentarios;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    bajaReparacion(oReparacion)
    {
         var bEncontrado = false;

        for (var i in this._reparaciones) {
            if (this._reparaciones[i].sModelo.split(" ")[this._reparaciones[i].sModelo.split(" ").length-1] == oReparacion.split(" ")[oReparacion.split(" ").length-1] && this._reparaciones[i].bActivo == true) {
                bEncontrado = true;
                this._reparaciones[i].bActivo=false;
            }
        }
        return bEncontrado;
    }

    cobro(oCobro)
    {
        this._apuntes.push(oCobro);
    }

    pago(oPago)
    {
        this._apuntes.push(oPago);
    }


}
