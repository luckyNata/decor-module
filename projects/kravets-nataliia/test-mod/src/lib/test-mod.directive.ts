import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[decor]'
})
export class TestModDirective implements AfterViewInit{
  constructor(private el:ElementRef) {}

  ngAfterViewInit(){
    let content:string = this.el.nativeElement.innerHTML;
    this.el.nativeElement.style.color = '#ff0000'
    if(content){
      this.el.nativeElement.innerHTML =  `*** ${content} ***`;
    }
  }
}
