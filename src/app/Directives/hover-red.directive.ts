import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverRed]'
})
export class HoverRedDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    const blue_color = `
        transition: all 0.2s ease-out;
        color: #ff0101;
      `;
      this.renderer.setAttribute(this.el.nativeElement, 'style', blue_color);
  }

  @HostListener('mouseleave') onMouseLeave()  {
    const oppen_button = `
      transition: all 0.5s ease-out;
      color: black;
    `;
    this.renderer.setAttribute(this.el.nativeElement, 'style', oppen_button);
  }
}
