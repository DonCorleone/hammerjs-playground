import { Component } from '@angular/core';
import { TileGridComponent } from "../tile-grid/tile-grid.component";
import { HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  template: `
    <div class="grid-container">
      <app-tile-grid *ngFor="let tile of tiles"
                     [isSwiped]="tile.isSwiped"
                     (tileTapped)="handleTileTap(tile)"
                     ><!--(tileClicked)="handleTileClick(tile)"-->
      </app-tile-grid>
    </div>
  `,
  styles: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 4px;
      margin: 20px;
    }
`,
  imports: [TileGridComponent, HammerModule, CommonModule]
})
export class GridContainerComponent {
  tiles: { isSwiped: boolean }[] = Array.from({ length: 25 }, () => ({ isSwiped: false }));

  handleTileTap(tile: any): void {
    // Handle tap event for the specific tile
    console.log('Tile tapped:', tile);
  }

  handleTileClick(tile: any): void {
    // Handle click event for the specific tile
    console.log('Tile clicked:', tile);
  }
}
