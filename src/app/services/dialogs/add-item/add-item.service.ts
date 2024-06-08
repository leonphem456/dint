import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../../../components/add-item/add-item.component';

@Injectable({
  providedIn: 'root',
})
export class AddItemService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddItemComponent, {
      width: '350px',
      height: '400px',
      disableClose: true,
    });
  }
}
