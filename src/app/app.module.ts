import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { NavDisplayItemComponent } from './components/nav/nav-display-item/nav-display-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDisplayComponent } from './components/content/category-display/category-display.component';
import { SubCategoryDisplayComponent } from './components/content/sub-category-display/sub-category-display.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ProductPathComponent } from './components/content/product-path/product-path.component';
import { MatIconModule } from '@angular/material/icon';
import { DisplayItemComponent } from './components/content/display-item/display-item.component';
import { DisplayDetailItemComponent } from './components/content/display-detail-item/display-detail-item.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartDisplayComponent } from './components/cart/cart-display/cart-display.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CurrencyPlnPipe } from './pipes/currency-pln.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductListItemComponent } from './components/admin/product-list-item/product-list-item.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './services/customPaginatorConfiguration';
import { AllProductsDisplayComponent } from './components/content/all-products-display/all-products-display.component';
import { CartCenterComponent } from './components/content/cart-center/cart-center.component';
import { AccountComponent } from './components/login/account/account.component';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    NavDisplayItemComponent,
    CategoryDisplayComponent,
    SubCategoryDisplayComponent,
    AddProductComponent,
    ProductPathComponent,
    DisplayItemComponent,
    DisplayDetailItemComponent,
    CartItemComponent,
    CartDisplayComponent,
    MenuPanelComponent,
    CurrencyPlnPipe,
    ProductListComponent,
    ProductListItemComponent,
    EditProductComponent,
    FilterPipe,
    AllProductsDisplayComponent,
    CartCenterComponent,
    AccountComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatTabsModule,
    NgbModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatTreeModule,
    MatProgressBarModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    MatPaginatorModule



  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
