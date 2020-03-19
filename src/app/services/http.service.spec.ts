import { TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

// xdescribe('HttpService', () => {
//     let service: HttpService;

//     beforeEach(() => {
//         TestBed.configureTestingModule({});
//         service = TestBed.inject(HttpService);
//     });

//     it('should be created', () => {
//         expect(service).toBeTruthy();
//     });
// });



@Injectable()
class MockHttpClient extends HttpHandler {
    handle(req: HttpRequest<any>) { return new Observable<any>(); }
    // post(req: HttpRequest<any>) { return new HttpResponse<any>(); }
}

describe('HttpService', () => {
    let service;

    const http = new HttpClient(new MockHttpClient());
    beforeEach(() => {
        service = new HttpService(http);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should have a post method', () => {
        expect(service.post).toBeTruthy();
    });

    it('Should have a post method', () => {
        expect(service.get).toBeTruthy();
    });

    it('Should have a post method', () => {
        expect(service.delete).toBeTruthy();
    });

    it('Should have a post method', () => {
        expect(service.put).toBeTruthy();
    });

});
