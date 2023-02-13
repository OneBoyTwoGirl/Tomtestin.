/*
* File: about.component.ts
* Author: Serényi Ödön
* Copyright: 2023, Serényi Ödön
* Group: Szoft-II-N
* Date: 2023-02-13
* Github: https://github.com/OneBoyTwoGirl/
* Licenc: GNU GPL
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  name!: String;
  date!: String;
  class!: String;


  ngOnInit() {
    this.name = "Orosz Levente";
    this.date = "2023-02-08";
    this.class = "Szoft-II-N";
  }

}
