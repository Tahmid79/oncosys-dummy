import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {
  get_in_touch = "Get In Touch" ;
  constructor() { }

  ngOnInit(): void {
  }

}
