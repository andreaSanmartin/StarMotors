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
import { Repuestos } from './repuestos';

export interface SolicitudRepuestos { 
    empleadoDespachaRepuestos?: Empleado;
    empleadoSolicitaRepuestos?: Empleado;
    idGarantia?: number;
    idSolicitudRepuesto?: string;
    repuestosList?: Array<Repuestos>;
    srDetalle?: string;
    srEstado?: number;
}