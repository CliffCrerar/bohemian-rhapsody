import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    // private _httpPost: Http
    constructor(private http: HttpClient) { }
}
