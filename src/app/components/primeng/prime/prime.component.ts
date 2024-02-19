import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { InputsComponent } from '../inputs/inputs.component';
import { DataComponent } from '../data/data.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-prime',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    AddEditEmployeeComponent,
    InputTextModule,
    DividerModule,
    InputsComponent,
    DataComponent,
    ChartComponent
  ],
  templateUrl: './prime.component.html',
  styleUrl: './prime.component.scss'
})
export class PrimeComponent implements OnInit {
  first = 0;
  rows = 10;
  activeIndex: number = 0;
  public items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'About Us',
      icon: 'pi pi-fw pi-bars',
    }, {
      label: 'Contact',
      icon: 'pi pi-fw pi-at',
    }
  ]

  public employees = [
    {
      id: 1,
      name: 'Abdul',
      email: 'abdul@employee.com',
      phone: 983233443,
    },
    {
      id: 2,
      name: 'Ali',
      email: 'ali@employee.com',
      phone: 983232243,
    },
    {
      id: 3,
      name: 'Ahmed',
      email: 'ahmed@employee.com',
      phone: 983238893,
    },
    {
      id: 4,
      name: 'Jameel',
      email: 'jameel@employee.com',
      phone: 989873443,
    }
  ];
  public visible: boolean = false;
  public employee: any = {
    name: '',
    email: '',
    phone: null
  };

  cols=[
    {fields:'id', header:'Id'},
    {fields:'name', header:'Name'},
    {fields:'email', header:'Email'},
    {fields:'phone', header:'Phone'}
  ]

  ngOnInit(): void {

  }

  newEmployee() {
    this.employee = {
      name: '',
      email: '',
      phone: null
    };
  }

  openModal() {
    this.visible = true;
  }

  checkType(employee: any) {
    this.visible = false;
    if (employee.id) {
      this.editEployee(employee)
    }
    else {
      this.addEmployee(employee)
    }
  }

  addEmployee(employee: any) {
    
    if (employee.name) {
      employee.id = this.employees[this.employees.length - 1].id + 1
      this.employees.push(employee);
    }

  }

  editEployee(employee: any) {
    this.employees.map(obj => obj.id == employee.id ? employee : obj);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(function (obj: any) { return obj.id !== id; });
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  clear(table: Table) {
    table.clear();
  }
}
