import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-cointainer',
  templateUrl: './cointainer.component.html',
  styleUrls: ['./cointainer.component.css']
})
export class CointainerComponent {

  searchText:string=""

 @ViewChild(ProductListComponent) productListComponpent:ProductListComponent;

  setSearchText(value:string){
   this.searchText=value
  }
}
