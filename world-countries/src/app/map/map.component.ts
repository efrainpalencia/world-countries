import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
[x: string]: any;
  // ...

  // Handle country click event
  @Output() countrySelected = new EventEmitter<string>(); // Output event to emit the selected country ID

  @ViewChild('svg', { static: true }) svg: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  // Handle country click event
  countryClicked(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    if (target && target.getAttribute('id')) {
      const countryName = target.getAttribute('id') || '';
      this.countrySelected.emit(countryName);
    }
  }

  // Handle country hover event
  onMouseOver(event: MouseEvent) {
    // Add a CSS class to highlight the element
    const pathElement = event.target as HTMLElement;
    pathElement.classList.add('highlighted');
  }

  onMouseOut(event: MouseEvent) {
    // Remove the CSS class to unhighlight the element
    const pathElement = event.target as HTMLElement;
    pathElement.classList.remove('highlighted');
  }
}
