import { AppUser } from '../models/app-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService) {
    this.user$ = angularFireAuth.authState;
  }

  public get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user)
        return this.userService.get(user.uid);
      return Observable.of(null);
    });
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
    localStorage.setItem('returnUrl', returnUrl);

    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }
}
