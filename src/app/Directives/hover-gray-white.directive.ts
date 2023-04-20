import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverGrayWhite]'
})
export class HoverGrayWhiteDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    const blue_color = `
        transition: all 0.2s ease-out;
        color: rgb(150, 150, 150);
      `;
      this.renderer.setAttribute(this.el.nativeElement, 'style', blue_color);
  }

  @HostListener('mouseleave') onMouseLeave()  {
    const oppen_button = `
      transition: all 0.5s ease-out;
      color: white;
    `;
    this.renderer.setAttribute(this.el.nativeElement, 'style', oppen_button);
  }
}

