import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    DividerModule,
    DropdownModule,
    CommonModule,
    ChipsModule,
    MultiSelectModule,
    SelectButtonModule,
    RadioButtonModule,
    RatingModule
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent implements OnInit {
  value:string = '';
  value1:number = 12232;
  value2: any[] = [];
  countries: any[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];
  cities: any[] = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
  selectedCountry: any | undefined;
  selectedCities:any[] = [];

  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  value3: string = 'off';
  value4!: number;

  ingredient:string | undefined;

  ngOnInit() {

  }
}
