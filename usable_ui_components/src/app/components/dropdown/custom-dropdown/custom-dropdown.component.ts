import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h5>Custom Dropdowns with Data</h5>

      <!-- Dropdown with Loop -->
      <div class="mb-3">
        <label class="form-label">Select Employee</label>
        <select class="form-select" [(ngModel)]="selectedEmployee">
          <option value="" disabled selected>Choose an employee</option>
          @for (emp of employees; track emp.value) {
            <option [value]="emp.value" [disabled]="emp.disabled">
              {{ emp.label }}
            </option>
          }
        </select>
        <div class="form-text">Selected: {{ getEmployeeName() }}</div>
      </div>

      <!-- Department Dropdown -->
      <div class="mb-3">
        <label class="form-label">Select Department</label>
        <select class="form-select" [(ngModel)]="selectedDepartment">
          <option value="" disabled selected>Choose department</option>
          @for (dept of departments; track dept.value) {
            <option [value]="dept.value">{{ dept.label }}</option>
          }
        </select>
      </div>

      <!-- Status Dropdown with Colors -->
      <div class="mb-3">
        <label class="form-label">Select Status</label>
        <select class="form-select" [(ngModel)]="selectedStatus" [class]="getStatusClass()">
          <option value="" disabled selected>Choose status</option>
          @for (status of statuses; track status.value) {
            <option [value]="status.value">{{ status.label }}</option>
          }
        </select>
      </div>

      <!-- Country Dropdown with Icons -->
      <div class="mb-3">
        <label class="form-label">Select Country</label>
        <select class="form-select" [(ngModel)]="selectedCountryCode">
          <option value="" disabled selected>Choose country</option>
          @for (country of countries; track country.code) {
            <option [value]="country.code">
              {{ country.flag }} {{ country.name }}
            </option>
          }
        </select>
      </div>

      <!-- Product Category -->
      <div class="mb-3">
        <label class="form-label">Product Category</label>
        <select class="form-select form-select-lg" [(ngModel)]="selectedCategory">
          <option value="" disabled selected>Select category</option>
          @for (cat of categories; track cat.id) {
            <option [value]="cat.id">
              {{ cat.name }} ({{ cat.count }} items)
            </option>
          }
        </select>
      </div>

      <!-- Priority Dropdown -->
      <div class="mb-3">
        <label class="form-label">Priority Level</label>
        <select class="form-select" [(ngModel)]="selectedPriority">
          <option value="" disabled selected>Select priority</option>
          @for (priority of priorities; track priority.id) {
            <option [value]="priority.id" [style.color]="priority.color">
              {{ priority.level }}
            </option>
          }
        </select>
      </div>

      <!-- Results Display -->
      <div class="card mt-4">
        <div class="card-body">
          <h6 class="card-title">Selected Values:</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee: {{ getEmployeeName() }}</li>
            <li class="list-group-item">Department: {{ selectedDepartment || 'None' }}</li>
            <li class="list-group-item">Status: {{ selectedStatus || 'None' }}</li>
            <li class="list-group-item">Country: {{ selectedCountryCode || 'None' }}</li>
            <li class="list-group-item">Category: {{ selectedCategory || 'None' }}</li>
            <li class="list-group-item">Priority: {{ selectedPriority || 'None' }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 600px; }
    .status-active { border-color: #28a745; }
    .status-pending { border-color: #ffc107; }
    .status-inactive { border-color: #dc3545; }
  `]
})
export class CustomDropdownComponent {
  // Employee data
  employees: DropdownOption[] = [
    { label: 'Sairaj Kumar', value: 'sairaj' },
    { label: 'Omkar Patil', value: 'omkar' },
    { label: 'Damdev Singh', value: 'damdev' },
    { label: 'Rahul Sharma', value: 'rahul', disabled: true },
    { label: 'Priya Mehta', value: 'priya' }
  ];

  // Department data
  departments: DropdownOption[] = [
    { label: 'Engineering', value: 'eng' },
    { label: 'Sales', value: 'sales' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Human Resources', value: 'hr' },
    { label: 'Finance', value: 'finance' }
  ];

  // Status data
  statuses: DropdownOption[] = [
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending' },
    { label: 'Inactive', value: 'inactive' }
  ];

  // Countries with flags
  countries = [
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' }
  ];

  // Product categories
  categories = [
    { id: '1', name: 'Electronics', count: 156 },
    { id: '2', name: 'Clothing', count: 432 },
    { id: '3', name: 'Books', count: 789 },
    { id: '4', name: 'Home & Garden', count: 234 },
    { id: '5', name: 'Sports', count: 123 }
  ];

  // Priority levels
  priorities = [
    { id: '1', level: '🔴 High Priority', color: '#dc3545' },
    { id: '2', level: '🟡 Medium Priority', color: '#ffc107' },
    { id: '3', level: '🟢 Low Priority', color: '#28a745' }
  ];

  // Selected values
  selectedEmployee = '';
  selectedDepartment = '';
  selectedStatus = '';
  selectedCountryCode = '';
  selectedCategory = '';
  selectedPriority = '';

  getEmployeeName(): string {
    const emp = this.employees.find(e => e.value === this.selectedEmployee);
    return emp ? emp.label : 'None';
  }

  getStatusClass(): string {
    return this.selectedStatus ? `status-${this.selectedStatus}` : '';
  }
}