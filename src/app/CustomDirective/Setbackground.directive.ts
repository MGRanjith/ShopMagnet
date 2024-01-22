import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[Setbackground]'
})
export class Setbackground implements OnInit{
  // private element:ElementRef
  //private renderer:Renderer2
    constructor(private element:ElementRef, private renderer:Renderer2){
    // this.element=element
  //  this.renderer=renderer
 }
  ngOnInit(): void {
//       this.element.nativeElement.style.backgroundColor='#36454F'
//       this.element.nativeElement.style.color='white'
     this.renderer.setStyle( this.element.nativeElement,'backgroundColor','#36454F')
     this.renderer.setStyle( this.element.nativeElement,'color','yellow')
     this.renderer.setAttribute( this.element.nativeElement,'title','example')
 }
}