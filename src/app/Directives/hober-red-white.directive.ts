import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoberRedWhite]'
})
export class HoberRedWhiteDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    const blue_color = `
        transition: all 0.2s ease-out;
        color: #DC4C64;
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
