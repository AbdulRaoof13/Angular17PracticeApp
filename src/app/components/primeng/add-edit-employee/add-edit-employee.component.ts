import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.scss'
})
export class AddEditEmployeeComponent {
  @Input() visible:boolean = false;
  @Input() employee:any;
  @Output() newEmployee = new EventEmitter<object>();

  saveChanges() {
    this.newEmployee.emit(this.employee);
    this.visible = false;
  }

  closeModal() {
    this.visible = false;
    this.employee={};
    this.newEmployee.emit(this.employee);
  }
}
