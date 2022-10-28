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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Garantia } from '../model/garantia';
import { Repuestos } from '../model/repuestos';
import { SolicitudRepuestos } from '../model/solicitudRepuestos';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TallerControllerService {

    protected basePath = '//starmotorsapinosql.herokuapp.com/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * listInformeReparacionByStatus
     * 
     * @param estado estado
     * @param idConcesionaria idConcesionaria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listInformeReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Garantia>>;
    public listInformeReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Garantia>>>;
    public listInformeReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Garantia>>>;
    public listInformeReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (estado === null || estado === undefined) {
            throw new Error('Required parameter estado was null or undefined when calling listInformeReparacionByStatusUsingGET.');
        }

        if (idConcesionaria === null || idConcesionaria === undefined) {
            throw new Error('Required parameter idConcesionaria was null or undefined when calling listInformeReparacionByStatusUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', <any>estado);
        }
        if (idConcesionaria !== undefined && idConcesionaria !== null) {
            queryParameters = queryParameters.set('idConcesionaria', <any>idConcesionaria);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Garantia>>('get',`${this.basePath}/taller/infReparacion/list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listSolicitudRepuestosByStatus
     * 
     * @param estado estado
     * @param idConcesionaria idConcesionaria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listSolicitudRepuestosByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Garantia>>;
    public listSolicitudRepuestosByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Garantia>>>;
    public listSolicitudRepuestosByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Garantia>>>;
    public listSolicitudRepuestosByStatusUsingGET(estado: number, idConcesionaria: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (estado === null || estado === undefined) {
            throw new Error('Required parameter estado was null or undefined when calling listSolicitudRepuestosByStatusUsingGET.');
        }

        if (idConcesionaria === null || idConcesionaria === undefined) {
            throw new Error('Required parameter idConcesionaria was null or undefined when calling listSolicitudRepuestosByStatusUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', <any>estado);
        }
        if (idConcesionaria !== undefined && idConcesionaria !== null) {
            queryParameters = queryParameters.set('idConcesionaria', <any>idConcesionaria);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Garantia>>('get',`${this.basePath}/taller/solicitudRepuestos/list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postInformeReparacion
     * 
     * @param descripcion descripcion
     * @param fecha fecha
     * @param idEmpleadoCreaAPIRestSQL idEmpleadoCreaAPIRestSQL
     * @param idGarantia idGarantia
     * @param manoObraList manoObraList
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInformeReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, manoObraList: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postInformeReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, manoObraList: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postInformeReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, manoObraList: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postInformeReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, manoObraList: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (descripcion === null || descripcion === undefined) {
            throw new Error('Required parameter descripcion was null or undefined when calling postInformeReparacionUsingPOST.');
        }

        if (fecha === null || fecha === undefined) {
            throw new Error('Required parameter fecha was null or undefined when calling postInformeReparacionUsingPOST.');
        }

        if (idEmpleadoCreaAPIRestSQL === null || idEmpleadoCreaAPIRestSQL === undefined) {
            throw new Error('Required parameter idEmpleadoCreaAPIRestSQL was null or undefined when calling postInformeReparacionUsingPOST.');
        }

        if (idGarantia === null || idGarantia === undefined) {
            throw new Error('Required parameter idGarantia was null or undefined when calling postInformeReparacionUsingPOST.');
        }

        if (manoObraList === null || manoObraList === undefined) {
            throw new Error('Required parameter manoObraList was null or undefined when calling postInformeReparacionUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (fecha !== undefined && fecha !== null) {
            queryParameters = queryParameters.set('fecha', <any>fecha);
        }
        if (idEmpleadoCreaAPIRestSQL !== undefined && idEmpleadoCreaAPIRestSQL !== null) {
            queryParameters = queryParameters.set('idEmpleadoCreaAPIRestSQL', <any>idEmpleadoCreaAPIRestSQL);
        }
        if (idGarantia !== undefined && idGarantia !== null) {
            queryParameters = queryParameters.set('idGarantia', <any>idGarantia);
        }
        if (manoObraList !== undefined && manoObraList !== null) {
            queryParameters = queryParameters.set('manoObraList', <any>manoObraList);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/taller/infReparacion/post`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postSolicitudRepuestos
     * 
     * @param body repuestosList
     * @param detalle detalle
     * @param idEmpleadoSolicitaAPIRestSQL idEmpleadoSolicitaAPIRestSQL
     * @param idGarantia idGarantia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSolicitudRepuestosUsingPOST(body: Array<Repuestos>, detalle: string, idEmpleadoSolicitaAPIRestSQL: number, idGarantia: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postSolicitudRepuestosUsingPOST(body: Array<Repuestos>, detalle: string, idEmpleadoSolicitaAPIRestSQL: number, idGarantia: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postSolicitudRepuestosUsingPOST(body: Array<Repuestos>, detalle: string, idEmpleadoSolicitaAPIRestSQL: number, idGarantia: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postSolicitudRepuestosUsingPOST(body: Array<Repuestos>, detalle: string, idEmpleadoSolicitaAPIRestSQL: number, idGarantia: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postSolicitudRepuestosUsingPOST.');
        }

        if (detalle === null || detalle === undefined) {
            throw new Error('Required parameter detalle was null or undefined when calling postSolicitudRepuestosUsingPOST.');
        }

        if (idEmpleadoSolicitaAPIRestSQL === null || idEmpleadoSolicitaAPIRestSQL === undefined) {
            throw new Error('Required parameter idEmpleadoSolicitaAPIRestSQL was null or undefined when calling postSolicitudRepuestosUsingPOST.');
        }

        if (idGarantia === null || idGarantia === undefined) {
            throw new Error('Required parameter idGarantia was null or undefined when calling postSolicitudRepuestosUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (detalle !== undefined && detalle !== null) {
            queryParameters = queryParameters.set('detalle', <any>detalle);
        }
        if (idEmpleadoSolicitaAPIRestSQL !== undefined && idEmpleadoSolicitaAPIRestSQL !== null) {
            queryParameters = queryParameters.set('idEmpleadoSolicitaAPIRestSQL', <any>idEmpleadoSolicitaAPIRestSQL);
        }
        if (idGarantia !== undefined && idGarantia !== null) {
            queryParameters = queryParameters.set('idGarantia', <any>idGarantia);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/taller/solicitudRepuestos/post`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateEstadoSolicitudRepuesto
     * 
     * @param estado estado
     * @param idSolicitudRepuestos idSolicitudRepuestos
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateEstadoSolicitudRepuestoUsingPUT(estado: number, idSolicitudRepuestos: string, observe?: 'body', reportProgress?: boolean): Observable<SolicitudRepuestos>;
    public updateEstadoSolicitudRepuestoUsingPUT(estado: number, idSolicitudRepuestos: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SolicitudRepuestos>>;
    public updateEstadoSolicitudRepuestoUsingPUT(estado: number, idSolicitudRepuestos: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SolicitudRepuestos>>;
    public updateEstadoSolicitudRepuestoUsingPUT(estado: number, idSolicitudRepuestos: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (estado === null || estado === undefined) {
            throw new Error('Required parameter estado was null or undefined when calling updateEstadoSolicitudRepuestoUsingPUT.');
        }

        if (idSolicitudRepuestos === null || idSolicitudRepuestos === undefined) {
            throw new Error('Required parameter idSolicitudRepuestos was null or undefined when calling updateEstadoSolicitudRepuestoUsingPUT.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', <any>estado);
        }
        if (idSolicitudRepuestos !== undefined && idSolicitudRepuestos !== null) {
            queryParameters = queryParameters.set('idSolicitudRepuestos', <any>idSolicitudRepuestos);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SolicitudRepuestos>('put',`${this.basePath}/taller/updateSolicitud`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateStatusSolicitudRepuestos
     * 
     * @param estado estado
     * @param idEmpleadoDespAPIRestSQL idEmpleadoDespAPIRestSQL
     * @param idGarantia idGarantia
     * @param indexSolicitudRepuestos indexSolicitudRepuestos
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateStatusSolicitudRepuestosUsingPUT(estado: number, idEmpleadoDespAPIRestSQL: number, idGarantia: number, indexSolicitudRepuestos: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateStatusSolicitudRepuestosUsingPUT(estado: number, idEmpleadoDespAPIRestSQL: number, idGarantia: number, indexSolicitudRepuestos: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateStatusSolicitudRepuestosUsingPUT(estado: number, idEmpleadoDespAPIRestSQL: number, idGarantia: number, indexSolicitudRepuestos: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateStatusSolicitudRepuestosUsingPUT(estado: number, idEmpleadoDespAPIRestSQL: number, idGarantia: number, indexSolicitudRepuestos: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (estado === null || estado === undefined) {
            throw new Error('Required parameter estado was null or undefined when calling updateStatusSolicitudRepuestosUsingPUT.');
        }

        if (idEmpleadoDespAPIRestSQL === null || idEmpleadoDespAPIRestSQL === undefined) {
            throw new Error('Required parameter idEmpleadoDespAPIRestSQL was null or undefined when calling updateStatusSolicitudRepuestosUsingPUT.');
        }

        if (idGarantia === null || idGarantia === undefined) {
            throw new Error('Required parameter idGarantia was null or undefined when calling updateStatusSolicitudRepuestosUsingPUT.');
        }

        if (indexSolicitudRepuestos === null || indexSolicitudRepuestos === undefined) {
            throw new Error('Required parameter indexSolicitudRepuestos was null or undefined when calling updateStatusSolicitudRepuestosUsingPUT.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', <any>estado);
        }
        if (idEmpleadoDespAPIRestSQL !== undefined && idEmpleadoDespAPIRestSQL !== null) {
            queryParameters = queryParameters.set('idEmpleadoDespAPIRestSQL', <any>idEmpleadoDespAPIRestSQL);
        }
        if (idGarantia !== undefined && idGarantia !== null) {
            queryParameters = queryParameters.set('idGarantia', <any>idGarantia);
        }
        if (indexSolicitudRepuestos !== undefined && indexSolicitudRepuestos !== null) {
            queryParameters = queryParameters.set('indexSolicitudRepuestos', <any>indexSolicitudRepuestos);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('put',`${this.basePath}/taller/solicitudRepuestos/updateStatus`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}