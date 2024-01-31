import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tile-grid',
  standalone: true,
  imports: [HammerModule],
  template: `
        <div class="tile"
         [class.swiped]="isSwiped"
         (swipe)="handleSwipe($event)"
         (tap)="handleTap()"
         (click)="handleClick()">
      Tile Content
    </div>
  `,
  styles: `
    .tile {
      width: 50px;
      height: 50px;
      background-color: #ccc;
      margin: 2px;
      text-align: center;
      line-height: 50px;
      user-select: none;
    }
    
    .tile.swiped {
      background-color: #88f;
      color: #fff;
    }
  `
})
export class TileGridComponent {
  @Input() isSwiped: boolean = false;
  @Output() tileTapped = new EventEmitter<void>();
  @Output() tileClicked = new EventEmitter<void>();


  handlePan(event: any): void {
    // Handle pan event (includes swipe)
    if (event.isFinal) {
      this.handleSwipe(event.direction);
    }
  }

  
  handleSwipe(event: any): void {
    // Handle swipe event
    // You can perform additional logic here if needed
    this.isSwiped = true;
  }

  handleTap(): void {
    // Handle tap event
    // You can perform additional logic here if needed
    this.tileTapped.emit();
  }

  handleClick(): void {
    // Handle click event
    // You can perform additional logic here if needed
    this.tileClicked.emit();
  }
}
