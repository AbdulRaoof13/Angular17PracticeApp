import { Component } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    OrganizationChartModule
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  data: TreeNode[] = [
    {
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina'
            },
            {
              label: 'France'
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France'
            },
            {
              label: 'Morocco'
            }
          ]
        }
      ]
    }
  ];
}
