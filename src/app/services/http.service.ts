import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    get delete(): any { return this.http.delete; }

    get post(): any { return this.http.post; }

    get put(): any { return this.http.put; }

    get get(): any { return this.http.get; }
}
