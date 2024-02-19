import { Component } from '@angular/core';

import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { IconsModule } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { bellIcon, menuIcon, SVGIcon } from "@progress/kendo-svg-icons";

import { GridComponent } from '../grid/grid.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-kendo',
  standalone: true,
  imports: [
    GridComponent,
    DropdownComponent,
    InputsComponent,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    NavigationModule,
    ButtonsModule,
  ],
  templateUrl: './kendo.component.html',
  styleUrl: './kendo.component.scss'
})
export class KendoComponent {
  title = 'practice-app';
  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public kendokaAvatar = "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";
}
