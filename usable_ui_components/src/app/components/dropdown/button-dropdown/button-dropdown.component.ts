import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-button-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h5>Bootstrap 5 Button Dropdowns</h5>

      <!-- Basic Dropdown -->
      <div class="mb-3">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" 
                  type="button" 
                  id="dropdownMenuButton1" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
            {{ selectedAction || 'Select Action' }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" (click)="selectAction('Edit')">Edit</a></li>
            <li><a class="dropdown-item" (click)="selectAction('Delete')">Delete</a></li>
            <li><a class="dropdown-item" (click)="selectAction('Archive')">Archive</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" (click)="selectAction('Share')">Share</a></li>
          </ul>
        </div>
      </div>

      <!-- Split Button Dropdown -->
      <div class="mb-3">
        <div class="btn-group">
          <button type="button" class="btn btn-success">{{ selectedOption || 'Action' }}</button>
          <button type="button" 
                  class="btn btn-success dropdown-toggle dropdown-toggle-split" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" (click)="selectOption('Save')">Save</a></li>
            <li><a class="dropdown-item" (click)="selectOption('Save As')">Save As</a></li>
            <li><a class="dropdown-item" (click)="selectOption('Export')">Export</a></li>
          </ul>
        </div>
      </div>

      <!-- Colored Dropdowns -->
      <div class="mb-3">
        <div class="btn-group me-2">
          <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Danger
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>

        <div class="btn-group me-2">
          <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Warning
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>

        <div class="btn-group">
          <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Info
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>
      </div>

      <!-- Dropdown Directions -->
      <div class="mb-3">
        <!-- Dropup -->
        <div class="btn-group dropup me-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
            Dropup
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>

        <!-- Dropend -->
        <div class="btn-group dropend me-2">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
            Dropend
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>

        <!-- Dropstart -->
        <div class="btn-group dropstart">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
            Dropstart
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>
      </div>

      <!-- Dark Dropdown -->
      <div class="mb-3">
        <div class="dropdown">
          <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dark Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item active" href="#">Active</a></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>

      <!-- Dropdown with Headers -->
      <div class="mb-3">
        <div class="dropdown">
          <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Categories
          </button>
          <ul class="dropdown-menu">
            <li><h6 class="dropdown-header">Programming</h6></li>
            <li><a class="dropdown-item" href="#">JavaScript</a></li>
            <li><a class="dropdown-item" href="#">TypeScript</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><h6 class="dropdown-header">Frameworks</h6></li>
            <li><a class="dropdown-item" href="#">Angular</a></li>
            <li><a class="dropdown-item" href="#">React</a></li>
            <li><a class="dropdown-item" href="#">Vue</a></li>
          </ul>
        </div>
      </div>

      <!-- Dropdown Sizes -->
      <div class="mb-3">
        <div class="btn-group me-2">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Large
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>

        <div class="btn-group me-2">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Default
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Small
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 800px; }
  `]
})
export class ButtonDropdownComponent {
  selectedAction = '';
  selectedOption = '';

  selectAction(action: string) {
    this.selectedAction = action;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }
}