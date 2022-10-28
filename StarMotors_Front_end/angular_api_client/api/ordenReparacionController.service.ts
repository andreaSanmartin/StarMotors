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

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OrdenReparacionControllerService {

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
     * listInformeReparacionComercializadora
     * 
     * @param estado estado
     * @param idConcesionaria idConcesionaria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listInformeReparacionComercializadoraUsingGET(estado?: number, idConcesionaria?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Garantia>>;
    public listInformeReparacionComercializadoraUsingGET(estado?: number, idConcesionaria?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Garantia>>>;
    public listInformeReparacionComercializadoraUsingGET(estado?: number, idConcesionaria?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Garantia>>>;
    public listInformeReparacionComercializadoraUsingGET(estado?: number, idConcesionaria?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<Array<Garantia>>('get',`${this.basePath}/orden/infRepComer/listByStatus`,
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
     * listOrdenReparacionByStatus
     * 
     * @param estado estado
     * @param idConcesionaria idConcesionaria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listOrdenReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Garantia>>;
    public listOrdenReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Garantia>>>;
    public listOrdenReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Garantia>>>;
    public listOrdenReparacionByStatusUsingGET(estado: number, idConcesionaria: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (estado === null || estado === undefined) {
            throw new Error('Required parameter estado was null or undefined when calling listOrdenReparacionByStatusUsingGET.');
        }

        if (idConcesionaria === null || idConcesionaria === undefined) {
            throw new Error('Required parameter idConcesionaria was null or undefined when calling listOrdenReparacionByStatusUsingGET.');
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

        return this.httpClient.request<Array<Garantia>>('get',`${this.basePath}/orden/listByStatus`,
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
     * postInformeReparacionComercializadora
     * 
     * @param descripcion descripcion
     * @param fecha fecha
     * @param garantiaCubre garantiaCubre
     * @param idEmpleadoCreaAPIRestSQL idEmpleadoCreaAPIRestSQL
     * @param idGarantia idGarantia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInformeReparacionComercializadoraUsingPOST(descripcion: string, fecha: string, garantiaCubre: number, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postInformeReparacionComercializadoraUsingPOST(descripcion: string, fecha: string, garantiaCubre: number, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postInformeReparacionComercializadoraUsingPOST(descripcion: string, fecha: string, garantiaCubre: number, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postInformeReparacionComercializadoraUsingPOST(descripcion: string, fecha: string, garantiaCubre: number, idEmpleadoCreaAPIRestSQL: number, idGarantia: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (descripcion === null || descripcion === undefined) {
            throw new Error('Required parameter descripcion was null or undefined when calling postInformeReparacionComercializadoraUsingPOST.');
        }

        if (fecha === null || fecha === undefined) {
            throw new Error('Required parameter fecha was null or undefined when calling postInformeReparacionComercializadoraUsingPOST.');
        }

        if (garantiaCubre === null || garantiaCubre === undefined) {
            throw new Error('Required parameter garantiaCubre was null or undefined when calling postInformeReparacionComercializadoraUsingPOST.');
        }

        if (idEmpleadoCreaAPIRestSQL === null || idEmpleadoCreaAPIRestSQL === undefined) {
            throw new Error('Required parameter idEmpleadoCreaAPIRestSQL was null or undefined when calling postInformeReparacionComercializadoraUsingPOST.');
        }

        if (idGarantia === null || idGarantia === undefined) {
            throw new Error('Required parameter idGarantia was null or undefined when calling postInformeReparacionComercializadoraUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (fecha !== undefined && fecha !== null) {
            queryParameters = queryParameters.set('fecha', <any>fecha);
        }
        if (garantiaCubre !== undefined && garantiaCubre !== null) {
            queryParameters = queryParameters.set('garantiaCubre', <any>garantiaCubre);
        }
        if (idEmpleadoCreaAPIRestSQL !== undefined && idEmpleadoCreaAPIRestSQL !== null) {
            queryParameters = queryParameters.set('idEmpleadoCreaAPIRestSQL', <any>idEmpleadoCreaAPIRestSQL);
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
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/orden/infRepComer/post`,
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
     * postOrdenReparacion
     * 
     * @param descripcion descripcion
     * @param fecha fecha
     * @param idEmpleadoAPIRestSQL idEmpleadoAPIRestSQL
     * @param idGarantia idGarantia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOrdenReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoAPIRestSQL: number, idGarantia: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postOrdenReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoAPIRestSQL: number, idGarantia: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postOrdenReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoAPIRestSQL: number, idGarantia: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postOrdenReparacionUsingPOST(descripcion: string, fecha: string, idEmpleadoAPIRestSQL: number, idGarantia: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (descripcion === null || descripcion === undefined) {
            throw new Error('Required parameter descripcion was null or undefined when calling postOrdenReparacionUsingPOST.');
        }

        if (fecha === null || fecha === undefined) {
            throw new Error('Required parameter fecha was null or undefined when calling postOrdenReparacionUsingPOST.');
        }

        if (idEmpleadoAPIRestSQL === null || idEmpleadoAPIRestSQL === undefined) {
            throw new Error('Required parameter idEmpleadoAPIRestSQL was null or undefined when calling postOrdenReparacionUsingPOST.');
        }

        if (idGarantia === null || idGarantia === undefined) {
            throw new Error('Required parameter idGarantia was null or undefined when calling postOrdenReparacionUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (descripcion !== undefined && descripcion !== null) {
            queryParameters = queryParameters.set('descripcion', <any>descripcion);
        }
        if (fecha !== undefined && fecha !== null) {
            queryParameters = queryParameters.set('fecha', <any>fecha);
        }
        if (idEmpleadoAPIRestSQL !== undefined && idEmpleadoAPIRestSQL !== null) {
            queryParameters = queryParameters.set('idEmpleadoAPIRestSQL', <any>idEmpleadoAPIRestSQL);
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
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/orden/post`,
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