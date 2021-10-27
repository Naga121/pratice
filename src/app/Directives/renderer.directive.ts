import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }
  ngOnInit(){
    this.render.setStyle(this.element.nativeElement,'color','red')  
  }

}
