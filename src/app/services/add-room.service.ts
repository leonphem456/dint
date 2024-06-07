import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from '../components/add-room/add-room.component';

@Injectable({
  providedIn: 'root',
})
export class AddRoomService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddRoomComponent, {
      width: '250px',
      height: '270px',
    });
  }
}
