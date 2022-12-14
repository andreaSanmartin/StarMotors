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

import { TblRespuestos } from '../model/tblRespuestos';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RepuestoControllerService {

    protected basePath = '//starmotorsapisql.herokuapp.com/';
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
     * findById
     * 
     * @param idRepuesto idRepuesto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET(idRepuesto: number, observe?: 'body', reportProgress?: boolean): Observable<TblRespuestos>;
    public findByIdUsingGET(idRepuesto: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TblRespuestos>>;
    public findByIdUsingGET(idRepuesto: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TblRespuestos>>;
    public findByIdUsingGET(idRepuesto: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idRepuesto === null || idRepuesto === undefined) {
            throw new Error('Required parameter idRepuesto was null or undefined when calling findByIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idRepuesto !== undefined && idRepuesto !== null) {
            queryParameters = queryParameters.set('idRepuesto', <any>idRepuesto);
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

        return this.httpClient.request<TblRespuestos>('get',`${this.basePath}/repuesto/findById`,
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
     * listAllById
     * 
     * @param listIdRepuestos listIdRepuestos
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAllByIdUsingGET(listIdRepuestos: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<Array<TblRespuestos>>;
    public listAllByIdUsingGET(listIdRepuestos: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TblRespuestos>>>;
    public listAllByIdUsingGET(listIdRepuestos: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TblRespuestos>>>;
    public listAllByIdUsingGET(listIdRepuestos: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (listIdRepuestos === null || listIdRepuestos === undefined) {
            throw new Error('Required parameter listIdRepuestos was null or undefined when calling listAllByIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (listIdRepuestos) {
            listIdRepuestos.forEach((element) => {
                queryParameters = queryParameters.append('listIdRepuestos', <any>element);
            })
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

        return this.httpClient.request<Array<TblRespuestos>>('get',`${this.basePath}/repuesto/listAllById`,
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
     * listAllRepuestos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAllRepuestosUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<TblRespuestos>>;
    public listAllRepuestosUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TblRespuestos>>>;
    public listAllRepuestosUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TblRespuestos>>>;
    public listAllRepuestosUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<TblRespuestos>>('get',`${this.basePath}/repuesto/listAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listRepuestosByMarca
     * 
     * @param idConcesionaria idConcesionaria
     * @param idMarca idMarca
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listRepuestosByMarcaUsingGET(idConcesionaria: number, idMarca: number, observe?: 'body', reportProgress?: boolean): Observable<Array<TblRespuestos>>;
    public listRepuestosByMarcaUsingGET(idConcesionaria: number, idMarca: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TblRespuestos>>>;
    public listRepuestosByMarcaUsingGET(idConcesionaria: number, idMarca: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TblRespuestos>>>;
    public listRepuestosByMarcaUsingGET(idConcesionaria: number, idMarca: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idConcesionaria === null || idConcesionaria === undefined) {
            throw new Error('Required parameter idConcesionaria was null or undefined when calling listRepuestosByMarcaUsingGET.');
        }

        if (idMarca === null || idMarca === undefined) {
            throw new Error('Required parameter idMarca was null or undefined when calling listRepuestosByMarcaUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idConcesionaria !== undefined && idConcesionaria !== null) {
            queryParameters = queryParameters.set('idConcesionaria', <any>idConcesionaria);
        }
        if (idMarca !== undefined && idMarca !== null) {
            queryParameters = queryParameters.set('idMarca', <any>idMarca);
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

        return this.httpClient.request<Array<TblRespuestos>>('get',`${this.basePath}/repuesto/listRepuestosByMarca`,
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
