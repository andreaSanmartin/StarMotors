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


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BasicErrorControllerService {

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
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingDELETE(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingDELETE(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingDELETE(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingDELETE(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('delete',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingGET(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('get',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingHEAD(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingHEAD(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingHEAD(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingHEAD(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('head',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingOPTIONS(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingOPTIONS(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingOPTIONS(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingOPTIONS(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('options',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingPATCH(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingPATCH(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingPATCH(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingPATCH(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('patch',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingPOST(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingPOST(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingPOST(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingPOST(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('post',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * error
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorUsingPUT(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: any; }>;
    public errorUsingPUT(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
    public errorUsingPUT(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
    public errorUsingPUT(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<{ [key: string]: any; }>('put',`${this.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
