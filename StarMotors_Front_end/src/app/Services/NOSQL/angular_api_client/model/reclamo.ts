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
import { InformeProformaReparacion } from './informeProformaReparacion';
import { InformeRechazo } from './informeRechazo';

export interface Reclamo { 
    empleado?: Empleado;
    informeProformaReparacion?: InformeProformaReparacion;
    informeRechazo?: InformeRechazo;
    razonesReclamo?: Array<string>;
    recDanio?: string;
    recDescripcion?: string;
    recEstado?: number;
    recFecha?: string;
}