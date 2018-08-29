import { Component, OnInit } from '@angular/core';
import { Step1ComponentComponent } from '../registrationstep1/step1-component/step1-component.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoimage = {

    src: 'assets/images/header-logo.png'
  };
  folders = [
    {
      name: 'EU',
      slug: '/eu',
    },
    {
      name: 'GLOBAL',
      slug: '/gl',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
