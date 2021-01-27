import { Address } from './address';
import { User } from 'src/app/services/user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private firebase: AngularFireDatabase) { }
  setUserData(address: Address): void {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const userRef: AngularFireObject<User> = this.firebase.object(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      address: {
        name: address.name,
        surname: address.surname,
        country: address.country,
        city: address.city,
        zipCode: address.zipCode,
        street: address.street,
        streetNumber: address.streetNumber,
        phone: address.phone
      }
    };
    userRef.update(userData);
  }
  getUserData(): AngularFireObject<User> {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return this.firebase.object(`users/${user.uid}`);
  }

}
