import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridContainerComponent } from "./grid-container/grid-container.component";
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import 'hammerjs';
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-grid-container></app-grid-container>
  `,
    styles: [],
    imports: [RouterOutlet, GridContainerComponent, HammerModule]
})
export class AppComponent {
  
  title = 'hammertiles';
}
