import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-dropdowns',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2 class="mb-4">All Bootstrap Dropdown Variations</h2>

      <div class="row">
        <!-- Column 1 -->
        <div class="col-md-6">
          <!-- Basic Select -->
          <div class="mb-4">
            <h5>1. Basic Form Select</h5>
            <select class="form-select" [(ngModel)]="selected1">
              <option value="" disabled selected>Select name</option>
              <option value="sairaj">Sairaj</option>
              <option value="omkar">Omkar</option>
              <option value="damdev">Damdev</option>
            </select>
            <small class="text-muted">Selected: {{ selected1 || 'None' }}</small>
          </div>

          <!-- Small Select -->
          <div class="mb-4">
            <h5>2. Small Select</h5>
            <select class="form-select form-select-sm" [(ngModel)]="selected2">
              <option value="" disabled selected>Small dropdown</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>

          <!-- Large Select -->
          <div class="mb-4">
            <h5>3. Large Select</h5>
            <select class="form-select form-select-lg" [(ngModel)]="selected3">
              <option value="" disabled selected>Large dropdown</option>
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </select>
          </div>

          <!-- Button Dropdown -->
          <div class="mb-4">
            <h5>4. Button Dropdown</h5>
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                {{ selected4 || 'Dropdown Button' }}
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" (click)="selected4='Action'">Action</a></li>
                <li><a class="dropdown-item" (click)="selected4='Another action'">Another action</a></li>
                <li><a class="dropdown-item" (click)="selected4='Something else'">Something else</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="col-md-6">
          <!-- Dark Dropdown -->
          <div class="mb-4">
            <h5>5. Dark Dropdown</h5>
            <div class="dropdown">
              <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dark Menu
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item active" href="#">Active</a></li>
                <li><a class="dropdown-item" href="#">Regular item</a></li>
                <li><a class="dropdown-item" href="#">Another item</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

          <!-- Split Button -->
          <div class="mb-4">
            <h5>6. Split Button Dropdown</h5>
            <div class="btn-group">
              <button type="button" class="btn btn-success">Action</button>
              <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else</a></li>
              </ul>
            </div>
          </div>

          <!-- Dropup -->
          <div class="mb-4">
            <h5>7. Dropup</h5>
            <div class="btn-group dropup">
              <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                Dropup
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              </ul>
            </div>
          </div>

          <!-- Multiple Select -->
          <div class="mb-4">
            <h5>8. Multiple Select</h5>
            <select class="form-select" multiple [(ngModel)]="selectedMultiple">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="mango">Mango</option>
            </select>
            <small class="text-muted">Selected: {{ selectedMultiple.join(', ') }}</small>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 1200px; }
    h5 { color: #495057; font-size: 0.9rem; font-weight: 600; }
  `]
})
export class AllDropdownsComponent {
  selected1 = '';
  selected2 = '';
  selected3 = '';
  selected4 = '';
  selectedMultiple: string[] = [];
}