import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {

  characterDetails : any;
  selectedId : any;
  constructor(private characterService : CharacterService,private http : HttpClient) { }

  ngOnInit(): void {
    this.selectedId = this.characterService.getSelectedId();
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.selectedId).subscribe(res=>{
        this.characterDetails = res;
        console.log(this.characterDetails)
    })
  }

}
