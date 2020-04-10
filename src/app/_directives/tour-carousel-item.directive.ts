import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTourCarouselItem]'
})
export class TourCarouselItemDirective {

  constructor(public tpl : TemplateRef<any>) { }

}
