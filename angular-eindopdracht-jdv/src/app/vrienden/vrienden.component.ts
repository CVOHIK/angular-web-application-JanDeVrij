import { Component, OnInit } from '@angular/core';

import { vrienden } from '../../classes/vriend';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.css']
})
export class VriendenComponent implements OnInit {

  vrienden:any;

  constructor() { }

  ngOnInit() {
    this.vrienden = vrienden;
  }
  
}