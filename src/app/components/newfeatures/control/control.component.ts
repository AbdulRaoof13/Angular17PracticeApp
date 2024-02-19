import { Component, effect, forwardRef } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { FormsModule } from '@angular/forms';
import { SignalsDemoService } from '../services/signals-demo.service';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    SplitterModule,
    SelectButtonModule,
    FormsModule
  ],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  value: string = 'off';
  counter:any = [1,2,3,4];
  signalValue = ''
 constructor(public signal: SignalsDemoService) {
  effect(() => {
    console.log(`Signal value is this: ${signal.myString()})`);
    this.signalValue = signal.myString()
  });
 }
  
}
