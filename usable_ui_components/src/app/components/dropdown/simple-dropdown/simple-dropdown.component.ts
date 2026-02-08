import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css']
})
export class SimpleDropdownComponent {
  @Input() options: any[] = [
    { label: 'sairaj', value: '1' },
    { label: 'omkar', value: '2' },
    { label: 'damdev', value: '3' }
  ];
}