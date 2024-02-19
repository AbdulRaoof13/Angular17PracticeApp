import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { Employee, employees } from "./employees";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    FormsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  public treeItems: any[] = [
    {
      text: "Furniture",
      id: 1,
      items: [
        { text: "Tables & Chairs", id: 2 },
        { text: "Sofas", id: 3 },
        { text: "Occasional Furniture", id: 4 },
      ],
    },
    {
      text: "Decor",
      id: 5,
      items: [
        { text: "Bed Linen", id: 6 },
        { text: "Carpets", id: 7 },
      ],
    },
  ];

  public value = ["Basketball", "Cricket"];
  public complexValue = { text: "Decor", id: 5 };
  public complexArrayValue = [{ text: "Sofas", id: 3 }];
  public gridData: Employee[] = employees;
}
