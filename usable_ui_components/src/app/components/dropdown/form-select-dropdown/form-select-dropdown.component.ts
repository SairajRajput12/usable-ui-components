import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-select-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h5>Bootstrap 5 Form Select</h5>
      
      <!-- Basic Select -->
      <div class="mb-3">
        <label for="basicSelect" class="form-label">Choose a name</label>
        <select class="form-select" id="basicSelect" [(ngModel)]="selectedName">
          <option value="" disabled selected>Select names</option>
          <option value="sairaj">Sairaj</option>
          <option value="omkar">Omkar</option>
          <option value="damdev">Damdev</option>
          <option value="rahul">Rahul</option>
          <option value="priya">Priya</option>
        </select>
        <div class="form-text">Selected: {{ selectedName || 'None' }}</div>
      </div>

      <!-- Small Select -->
      <div class="mb-3">
        <label for="smallSelect" class="form-label">Small Select</label>
        <select class="form-select form-select-sm" id="smallSelect" [(ngModel)]="selectedCity">
          <option value="" disabled selected>Select city</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
        </select>
      </div>

      <!-- Large Select -->
      <div class="mb-3">
        <label for="largeSelect" class="form-label">Large Select</label>
        <select class="form-select form-select-lg" id="largeSelect" [(ngModel)]="selectedCountry">
          <option value="" disabled selected>Select country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
      </div>

      <!-- Multiple Select -->
      <div class="mb-3">
        <label for="multiSelect" class="form-label">Multiple Select (Hold Ctrl/Cmd)</label>
        <select class="form-select" id="multiSelect" multiple [(ngModel)]="selectedFruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="grape">Grape</option>
        </select>
        <div class="form-text">Selected: {{ selectedFruits.join(', ') || 'None' }}</div>
      </div>

      <!-- Disabled Select -->
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">Disabled Select</label>
        <select class="form-select" id="disabledSelect" disabled>
          <option selected>Cannot select</option>
        </select>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 600px; }
  `]
})
export class FormSelectDropdownComponent {
  selectedName = '';
  selectedCity = '';
  selectedCountry = '';
  selectedFruits: string[] = [];
}