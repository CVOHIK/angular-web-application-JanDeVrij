import { Component, OnInit } from '@angular/core';
import { LocatieService } from '../locatie.service';
import { LocatieObject } from '../../classes/locatie';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {

  locatieObject?:LocatieObject;

  sportTypes: string[] = [];
  interesse: string;
  interesses: string[] = ['Basketbal','Petanque'];

  constructor(private locatieService: LocatieService) { }

  ngOnInit() {
    this.locatieService.getLocaties().subscribe((data)=>{
      this.locatieObject = data;
      
      for (const item of this.locatieObject.features) {
        
        var objSport = item.properties.Sport;

        if (!this.sportTypes.find(os => os === objSport)) {
        this.sportTypes.push(objSport);
        }
      }
    });
  }

  voegToe(form){
    this.interesse = form.value.selectsport;
    this.interesses.push(this.interesse);
  }

}