import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';

interface Room{
  name: string,
  priority: string,
  
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatExpansionModule, MatAccordion],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {
  rooms = ["Wohnzimmer", "Schlafzimmer", "Badezimmer", "Keller"]

  panelOpenState = false;
};
