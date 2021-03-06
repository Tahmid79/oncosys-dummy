import { Component, OnInit } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'oncosys-dummy';
  constructor(private metaService: Meta) {
  }
  ngOnInit(): void {
    this.metaService.updateTag({
        name: 'viewport',
        content: `min-height=${window.innerHeight}px, width=${window.innerWidth}px, initial-scale=1.0`
      },
      `name='viewport'`
    );
  }
}
