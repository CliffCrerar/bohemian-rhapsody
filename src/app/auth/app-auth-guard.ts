import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class AppAuthGuard implements CanActivate {
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('state: ', state);
        console.log('next: ', next);
        console.log('AuthGuard#canActivate called');
        return true;
    }
}
