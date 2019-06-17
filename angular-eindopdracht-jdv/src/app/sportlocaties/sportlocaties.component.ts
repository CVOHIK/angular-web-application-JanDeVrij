import { Component, OnInit } from '@angular/core';
import { LocatieService } from '../locatie.service';
import { LocatieObject } from '../../classes/locatie';

@Component({
  selector: 'app-sportlocaties',
  templateUrl: './sportlocaties.component.html',
  styleUrls: ['./sportlocaties.component.css']
})
export class SportlocatiesComponent implements OnInit {

  locatieObject?: LocatieObject;

  title: string = 'Buurtsportlocaties Gent';
  lat: number = 51.05389;
  lng: number = 3.705;
  zoom: number = 15;
  mapType = 'satellite'

  sportParent: string;

  constructor(private locatieService: LocatieService) {}

  public ngOnInit() {
    this.locatieService.getLocaties().subscribe((data)=>{
      this.locatieObject = data;
    });
  }

  selectSportParent($event) {
    this.sportParent = $event;
  }

  
}