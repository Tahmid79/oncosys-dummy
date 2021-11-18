import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  logoUrl = 'assets/images/logo.png' ;
  oncosys = 'Oncosys International' ;
  our_site = 'Our site is launching soon' ;
  description = 'Oncosys International is a global trading company with its branches in the tech and infrastructure development segment of Bangladesh' ;

  constructor() { }

  ngOnInit(): void {
  }

}
