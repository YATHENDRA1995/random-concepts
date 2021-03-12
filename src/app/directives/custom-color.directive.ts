import { Directive, ElementRef } from '@angular/core';

@Directive({ 
     selector: '[myCustom]' 
})
export class MyCustomDirective {
    constructor(elRef: ElementRef) {
       elRef.nativeElement.style.color = 'orange';
    }
} 