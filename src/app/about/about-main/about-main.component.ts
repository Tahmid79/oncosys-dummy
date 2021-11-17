import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {
  about = 'About' ;
  get_to_know = 'Get To Know Us.' ;
  constructor() { }

  ngOnInit(): void {
  }

}
