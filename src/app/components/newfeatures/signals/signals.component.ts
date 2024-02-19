import { Component, signal } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { FormsModule } from '@angular/forms';
import { SignalsDemoService } from '../services/signals-demo.service';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    SplitterModule,
    FormsModule,
    
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  
  constructor(public signalService: SignalsDemoService){}

  value:string = this.signalService.myString();
}
