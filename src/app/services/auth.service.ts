import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _httpPost;

    constructor() { }

    set httpPost(httpPost: any) {
        this._httpPost = httpPost;
    }


}
