import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocatieService } from '../locatie.service';
import { LocatieObject } from '../../classes/locatie';

@Component({
  selector: 'app-zoek-locatie',
  templateUrl: './zoek-locatie.component.html',
  styleUrls: ['./zoek-locatie.component.css']
})
export class ZoekLocatieComponent implements OnInit {

  locatieObject?:LocatieObject;

  sportTypes: string[] = [];
  sportChild: string = '';
  @Output() sportOutput = new EventEmitter<string>();

  sportCount: number = 0;

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

  selectSportChild(form) {
    this.sportChild = form.value.selectsport;
    this.locatieService.getLocaties().subscribe((data)=>{
      this.locatieObject = data;
      });
    this.sportOutput.emit(this.sportChild);
    this.sportCounter();
  }

  sportCounter() {
    this.sportCount = 0;
    for (const item of this.locatieObject.features) {
        
        var objSport = item.properties.Sport;

        if (objSport === this.sportChild) {
          this.sportCount++;
        }
      }
  }

}