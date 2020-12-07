import { Product } from './product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetailList: AngularFireList<any>;
  product: Product;
  file: AngularFireList<any>;


  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  insertProductDetails(productDetails: Product) {
    this.product = productDetails;
    this.product.nameLink = this.replaceChar(productDetails.nameDisplay.toLowerCase());
    this.product.categoryLink = this.replaceChar(productDetails.categoryDisplay.toLowerCase());
    this.product.subCategoryLink = this.replaceChar(productDetails.subCategoryDisplay.toLowerCase());
    this.firebase.list('product/' + this.product.categoryLink + '/' + this.product.subCategoryLink).push(this.product);

  }
  getProductDetailsList(path: string) {
    this.productDetailList = this.firebase.list(path);
  }
  getProduct() {
    this.file = this.firebase.list('product/');
    this.file.snapshotChanges().subscribe(v => {
      console.log(v)
    }

    )
    console.log(this.file);


  }
  replaceChar(val) {
    let value = val;
    const chars = [[' ', '-'], ['ą', 'a'], ['ę', 'e'], ['ć', 'c'], ['ł', 'l'], ['ń', 'n'], ['ó', 'o'], ['ś', 's'], ['ż', 'z'], ['ź', 'z']];
    for (let n = 0; n < chars.length; n++) {
      value = value.replaceAll(chars[n][0], chars[n][1])

    }
    return value
  }



}