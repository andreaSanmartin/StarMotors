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

import { TblEmpleado } from '../model/tblEmpleado';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EmpeladoControllerService {

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
     * findEmpleadoByCedula
     * 
     * @param cedula cedula
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findEmpleadoByCedulaUsingGET(cedula: string, observe?: 'body', reportProgress?: boolean): Observable<TblEmpleado>;
    public findEmpleadoByCedulaUsingGET(cedula: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TblEmpleado>>;
    public findEmpleadoByCedulaUsingGET(cedula: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TblEmpleado>>;
    public findEmpleadoByCedulaUsingGET(cedula: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cedula === null || cedula === undefined) {
            throw new Error('Required parameter cedula was null or undefined when calling findEmpleadoByCedulaUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (cedula !== undefined && cedula !== null) {
            queryParameters = queryParameters.set('cedula', <any>cedula);
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

        return this.httpClient.request<TblEmpleado>('get',`${this.basePath}/empleado/findByCedula`,
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
     * findEmpleadoById
     * 
     * @param idEmpleado idEmpleado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findEmpleadoByIdUsingGET(idEmpleado: number, observe?: 'body', reportProgress?: boolean): Observable<TblEmpleado>;
    public findEmpleadoByIdUsingGET(idEmpleado: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TblEmpleado>>;
    public findEmpleadoByIdUsingGET(idEmpleado: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TblEmpleado>>;
    public findEmpleadoByIdUsingGET(idEmpleado: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idEmpleado === null || idEmpleado === undefined) {
            throw new Error('Required parameter idEmpleado was null or undefined when calling findEmpleadoByIdUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idEmpleado !== undefined && idEmpleado !== null) {
            queryParameters = queryParameters.set('idEmpleado', <any>idEmpleado);
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

        return this.httpClient.request<TblEmpleado>('get',`${this.basePath}/empleado/findById`,
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
     * findEmpleadoByUsernameAndPassword
     * 
     * @param empPassword empPassword
     * @param empUsername empUsername
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findEmpleadoByUsernameAndPasswordUsingGET(empPassword: string, empUsername: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public findEmpleadoByUsernameAndPasswordUsingGET(empPassword: string, empUsername: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public findEmpleadoByUsernameAndPasswordUsingGET(empPassword: string, empUsername: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public findEmpleadoByUsernameAndPasswordUsingGET(empPassword: string, empUsername: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (empPassword === null || empPassword === undefined) {
            throw new Error('Required parameter empPassword was null or undefined when calling findEmpleadoByUsernameAndPasswordUsingGET.');
        }

        if (empUsername === null || empUsername === undefined) {
            throw new Error('Required parameter empUsername was null or undefined when calling findEmpleadoByUsernameAndPasswordUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (empPassword !== undefined && empPassword !== null) {
            queryParameters = queryParameters.set('empPassword', <any>empPassword);
        }
        if (empUsername !== undefined && empUsername !== null) {
            queryParameters = queryParameters.set('empUsername', <any>empUsername);
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

        return this.httpClient.request<any>('get',`${this.basePath}/empleado/findByUsernameAndPassword`,
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
     * listClientById
     * 
     * @param idEmpleado idEmpleado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listClientByIdUsingGET1(idEmpleado: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<Array<TblEmpleado>>;
    public listClientByIdUsingGET1(idEmpleado: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TblEmpleado>>>;
    public listClientByIdUsingGET1(idEmpleado: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TblEmpleado>>>;
    public listClientByIdUsingGET1(idEmpleado: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idEmpleado === null || idEmpleado === undefined) {
            throw new Error('Required parameter idEmpleado was null or undefined when calling listClientByIdUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idEmpleado) {
            idEmpleado.forEach((element) => {
                queryParameters = queryParameters.append('idEmpleado', <any>element);
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

        return this.httpClient.request<Array<TblEmpleado>>('get',`${this.basePath}/empleado/listEmpleadoById`,
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
