import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Room {
  name: string;
  description: string;
  items: Item[];
}

interface Item {
  name: string;
  priority: PRIORITY;
  img: string;
}

enum PRIORITY {
  HIGH,
  MEDIUM,
  LOW,
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatAccordion,
    MatTooltipModule,
  ],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent {
  rooms: Room[] = [
    {
      name: 'Wohnzimmer',
      description: 'Wohnraum',
      items: [{ name: 'TV', priority: PRIORITY.HIGH, img: '' }],
    },
    {
      name: 'Schlafzimmer',
      description: '',
      items: [{ name: 'Bett', priority: PRIORITY.HIGH, img: '' }],
    },
    {
      name: 'Badezimmer',
      description: '',
      items: [
        { name: 'Bürste', priority: PRIORITY.HIGH, img: '' },
        { name: 'Dior Perfume', priority: PRIORITY.LOW, img: '' },
      ],
    },
    {
      name: 'Keller',
      description: '',
      items: [{ name: 'Alte Magazine', priority: PRIORITY.LOW, img: '' }],
    },
  ];
  panelOpenState = false;
}
