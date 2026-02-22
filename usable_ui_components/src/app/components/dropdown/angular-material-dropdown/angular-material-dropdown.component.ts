import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-angular-material-dropdown',
  templateUrl: './angular-material-dropdown.component.html',
  styleUrl: './angular-material-dropdown.component.css'
})
export class AngularMaterialDropdownComponent {
@Input() label: string = 'Select an option';
  @Input() items: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ];
  @Output() selectionChange = new EventEmitter<string>();
  
  isOpen: boolean = false;
  selectedValue: string = '';

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: string): void {
    this.selectedValue = item;
    this.selectionChange.emit(item);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  constructor(private elementRef: ElementRef) {}
}
