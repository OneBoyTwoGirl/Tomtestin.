/*
* File: github.component.ts
* Author: Serényi Ödön
* Copyright: 2023, Serényi Ödön
* Group: Szoft-II-N
* Date: 2023-02-13
* Github: https://github.com/OneBoyTwoGirl/
* Licenc: GNU GPL
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  url!:String;


  ngOnInit():void{
    this.url="https://github.com/Olevente/"
  }
}
