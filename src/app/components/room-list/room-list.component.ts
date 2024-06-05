import { Component } from '@angular/core';

import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { FlatTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name: string,
  children?: FoodNode[];
}


const TREE_DATA: FoodNode[] = [
  {
      name: 'Wohnzimmer',
      children: [{name: 'Buch'}, {name: 'Tisch'}, {name: 'Fernseher'}],
  }
]



interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [MatTreeModule, MatIconModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)


  /**
   *
   */
  constructor() {
    this.dataSource.data = TREE_DATA:
  }
}
