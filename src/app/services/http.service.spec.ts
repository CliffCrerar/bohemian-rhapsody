import { TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

describe('HttpService', () => {
    let service: HttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [HttpClient]
        });
        service = TestBed.inject(HttpService);
    });

    it('Should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should have a post method', () => {
        expect(service.post).toBeTruthy();
    });

    it('Should have a get method', () => {
        expect(service.get).toBeTruthy();
    });

    it('Should have a delete method', () => {
        expect(service.delete).toBeTruthy();
    });

    it('Should have a put method', () => {
        expect(service.put).toBeTruthy();
    });
});



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

});
