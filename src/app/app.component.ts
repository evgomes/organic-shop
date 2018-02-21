import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  subscription: Subscription;

  constructor(private authService: AuthService, private userService: UserService, router: Router) {
    this.subscription = authService.user$.subscribe(user => {
      if (!user)
        return;

      userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');

      if (!returnUrl)
        return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
