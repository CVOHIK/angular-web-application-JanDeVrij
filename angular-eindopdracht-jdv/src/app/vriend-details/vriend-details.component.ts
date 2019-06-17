import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { vrienden } from '../../classes/vriend';

@Component({
  selector: 'app-vriend-details',
  templateUrl: './vriend-details.component.html',
  styleUrls: ['./vriend-details.component.css']
})
export class VriendDetailsComponent implements OnInit {

  vriend;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.vriend = vrienden[+params.get('vriendId')];
  });
  }

  find(){
    //bekijk waar deze vriend gaat sporten.
    window.alert('Bekijk op de kaart waar je vriend(in) aan het sporten is!');
  }

  invite(){
    //nodig deze vriend uit (bepaalde locatie en uur).
    window.alert('Je vriend is uitgenodigd!');
  }

}