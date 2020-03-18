import { AppAuthGuard } from './app-auth-guard';

describe('AppAuthGuard', () => {
    it('should create an instance', () => {
        expect(new AppAuthGuard()).toBeTruthy();
    });
});
