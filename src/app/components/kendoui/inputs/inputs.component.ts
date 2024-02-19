import { Component } from '@angular/core';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    InputsModule,
    LabelModule,
    FormsModule
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  public textboxValue = "";
  public maskedValue: string='';
  public numericValue = 5;
  public min = 0;
  public max = 15;
  public smallStep = 1;
  public sliderValue = 5;
  public switchValue = true;
  public checked  = true;
  public radioValue = "foo";
}
