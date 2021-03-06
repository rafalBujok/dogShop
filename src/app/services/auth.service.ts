import { UserDataService } from 'src/app/services/user-data.service';
import { User } from '../models/user';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Location } from '@angular/common';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private location: Location,
    private firebase: AngularFireDatabase,
    private data: UserDataService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */

    this.afAuth.authState.subscribe(user => {

      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.data.getUserData().valueChanges().subscribe(val => {
          if (val.admin) {
            localStorage.setItem('admin', 'true');
          } else {
            localStorage.removeItem('admin');
          }
        })
      } else {
        localStorage.removeItem('user');
        localStorage.removeItem('admin');
        this.userData = null;
      }
    });
  }
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);

      }).catch((error) => {
        window.alert(error.message);
      });
  }
  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.location.back();
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  setUserData(user) {
    const userRef: AngularFireObject<any> = this.firebase.object(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    userRef.update(userData);
    this.location.back();
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.location.back();
    });
  }
  refresh(): void {
    location.reload();
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider()).then(() => {
    });
  }
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.location.back();
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

}
