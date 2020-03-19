import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

// Extending service to export privately injected http service
class ExtAuthService extends AuthService {
    httpExt;
    constructor(http: HttpService) {
        super(http);
        this.httpExt = http;
    }
    get httpService() { return this.httpExt; }
}


// Test case
describe('AuthService', () => {
    let service: AuthService;
    let httpService: HttpService;
    let extAuthService: ExtAuthService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [HttpService]
        });
        service = TestBed.inject(AuthService);
        httpService = TestBed.inject(HttpService);
        extAuthService = new ExtAuthService(httpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should inject http service', () => {
        expect(extAuthService.httpService).toEqual(httpService);
    });
});
