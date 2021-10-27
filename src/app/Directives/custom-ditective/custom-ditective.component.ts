import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: '[app-custom-ditective]',
  templateUrl: './custom-ditective.component.html',
  styleUrls: ['./custom-ditective.component.css']
})
export class CustomDitectiveComponent implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    (this.element.nativeElement as  HTMLElement).style.color='red';
  }

  

}
