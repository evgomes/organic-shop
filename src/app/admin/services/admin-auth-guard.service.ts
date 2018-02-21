import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$.map(appUser => appUser.isAdmin);
  }
}
