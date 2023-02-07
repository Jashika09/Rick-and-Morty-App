import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  selectedId : any;
  constructor(private http: HttpClient) { }

  getCharacterList() : Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  setCharacterSelected(id : any){
    this.selectedId = id;
  }
  getSelectedId(){
    return this.selectedId;
  }
}
