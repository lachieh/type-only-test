import { Component } from '@angular/core';
import type { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'type-only-test';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
