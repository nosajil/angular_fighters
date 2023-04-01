import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fighterBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#F5F5F5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }

   @Input('fighterBorderCard') borderColor: string | undefined;

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
   }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;

  }
}
