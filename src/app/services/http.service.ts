import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-Type', 'application/json;charset=utf8');
    }

    delete = (path: string, queryParams: any): Observable<object> =>
        this.http.delete(path, { headers: this.headers, params: queryParams })

    post = (path: string, body: any): Observable<object> =>
        this.http.post(path, body, { headers: this.headers })

    put = (path: string, body: any): Observable<object> =>
        this.http.post(path, body, { headers: this.headers })

    get = (path: string, qParams: any): Observable<object> =>
        this.http.post(path, { headers: this.headers, params: qParams })
}
