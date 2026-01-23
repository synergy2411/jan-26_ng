import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor: string = 'goldenrod';

  @HostBinding('style.background-color') bgColor: string = 'transparent';
  // @HostBinding('style.font-size') fontSize: number = 16;

  @HostListener('mouseenter')
  onEnter() {
    console.log('Mouse entered');
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('Mouse leave');
    this.bgColor = 'transparent';
  }

  // constructor(
  //   private renderer: Renderer2,
  //   private elRef: ElementRef,
  // ) {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'yellow',
  //   );
  // }

  // constructor(private elRef: ElementRef) {
  //   this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
  // }
}

// <h1 [ngClass]="{appHighlight : isFirst}">

// <app-highlight> </app-highlight>
// <h1 appHighlight>

// <div class="container" data-xyz="hero"></div>

// .container { color : "red" }

// div { color : "green" }

// [data-xyz="hero"] { color : "blue" }
