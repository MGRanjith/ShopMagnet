import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string="";

 @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter <string>()
 

  @ViewChild('searchInput',{static:true}) searchInputEl :ElementRef;
  onsearchTextChanged(){
   
   }
   updateSearchstring(){
     //console.log(InputEl.value)
     this.searchText=this.searchInputEl.nativeElement.value
     this.searchTextChanged.emit(this.searchText )
    }

  // updateSearchstring(event:any){
  // this.searchText=event.target.value
  // }

  logValue(value: string) {
    console.log(value); // Outputs the value of the input field
  }


 
}
