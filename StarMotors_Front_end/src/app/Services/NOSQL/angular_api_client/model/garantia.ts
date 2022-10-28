/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Empleado } from './empleado';
import { Reclamo } from './reclamo';

export interface Garantia { 
    empleadoAtendioGarantia?: Empleado;
    fallosSistemasVehiculo?: Array<string>;
    garDescripcion?: string;
    garEstado?: number;
    garFecha?: string;
    idCliente?: number;
    idConcesionaria?: number;
    idGarantia?: number;
    idVehiculo?: number;
    reclamo?: Reclamo;
}