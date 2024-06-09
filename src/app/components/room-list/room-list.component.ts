import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { AddRoomService } from '../../services/dialogs/add-room/add-room.service';
import { AddItemService } from '../../services/dialogs/add-item/add-item.service';
import { MatTabsModule } from '@angular/material/tabs';

interface Room {
  name: string;
  description: string;
  items: Item[];
}

interface Item {
  name: string;
  priority: PRIORITY;
  img: string;
  note: string;
}

enum PRIORITY {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
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
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule,
  ],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent {
  constructor(
    private addRoomDialog: AddRoomService,
    private addItemDialog: AddItemService
  ) {}
  openAddRoomDialog() {
    this.addRoomDialog.openDialog();
  }

  openAddItemDialog() {
    this.addItemDialog.openDialog();
  }
  imageFolder: string = 'assets/';
  panelOpenState = false;

  rooms: Room[] = [
    {
      name: 'Wohnzimmer',
      description: 'Wohnraum',
      items: [
        {
          name: 'TV',
          priority: PRIORITY.HIGH,
          img: 'assets/tv.png',
          note: 'Tv for watching stuff',
        },
      ],
    },
    {
      name: 'Schlafzimmer',
      description: '',
      items: [
        {
          name: 'Bett',
          priority: PRIORITY.HIGH,
          img: '',
          note: '',
        },
      ],
    },
    {
      name: 'Badezimmer',
      description: '',
      items: [
        {
          name: 'Bürste',
          priority: PRIORITY.HIGH,
          img: '',
          note: 'new',
        },
        {
          name: 'Dior Perfume',
          priority: PRIORITY.LOW,
          img: '',
          note: 'Almost used up',
        },
        {
          name: 'Axe Deodorant',
          priority: PRIORITY.LOW,
          img: '',
          note: 'Unused',
        },
        {
          name: 'Versace Bademantel',
          priority: PRIORITY.HIGH,
          img: 'assets/versace-bath-robe',
          note: 'Baba',
        },
      ],
    },
    {
      name: 'Keller',
      description: '',
      items: [
        {
          name: 'Alte Magazine',
          priority: PRIORITY.LOW,
          img: '',
          note: 'Haushalt und Mode',
        },
      ],
    },
  ];
}
