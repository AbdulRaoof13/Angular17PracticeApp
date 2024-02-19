import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ControlComponent } from '../control/control.component';
import { StandComponent } from '../stand/stand.component';
import { SignalsComponent } from '../signals/signals.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    TabViewModule,
    ControlComponent,
    StandComponent,
    SignalsComponent
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  activeIndex: number = 0;
  nullish:string = '{{ age ?? calculateAge() }}'

}
