import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './cointainer/search/search.component';
import { HeaderComponent } from './header/header.component';
import { CointainerComponent } from './cointainer/cointainer.component';
import { ProductListComponent } from './cointainer/product-list/product-list.component';
import { ProductComponent } from './cointainer/product-list/product/product.component';
import { FilterComponent } from './cointainer/product-list/filter/filter.component';
import { ProductDetailsComponent } from './cointainer/product-details/product-details.component';
import { Setbackground } from './CustomDirective/Setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { FeaturedBrandsComponent } from './cointainer/featured-brands/featured-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CointainerComponent,
    TopHeaderComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    Setbackground,
    HighlightDirective,
    FeaturedBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
