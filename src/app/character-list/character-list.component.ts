import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterData: any = {};
  characterList: any = [];
  itemsPerpage = 20;
  currPage: any;
  totalItems: any;
  page : any;
  start : any;
  limit : any;
  constructor(private characterService: CharacterService,private http : HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getPaginator(1);
    
  }

  pageChange(event : any) {
    this.currPage = event;
    this.getPaginator(this.currPage);
    // this.getPaginator(this.currPage); //faiz:20200205:stop calling getInboxData service multiple time, instead get all data once and use pagination
  }

  getPaginator(currPage : any) {
    var index;
    if (currPage < 2) {
      this.page = "1";
      this.start = "0";
      this.limit = "20";
      this
      this.characterService.getCharacterList().subscribe((res) => {
        this.characterList = [];
        this.characterList = res.results;
        this.totalItems = res.info.count;
      })
    } else {
      this.page = currPage;
      this.start = (currPage - 1) * 20;
      this.limit = "20";
      this.http.get<any>('https://rickandmortyapi.com/api/character/' + '?page=' + this.page).subscribe(res=>{
        this.characterList = [];
        this.characterList = res.results;
    })
      // this.characterService.getCharacterList().subscribe((res) => {
      //   this.characterList = [];
      //   this.characterList = res.results;
      // })

    }
  }

  getSingleCharacter(id : any){
    this.characterService.setCharacterSelected(id);
    this.router.navigate([''])
    this.router.navigateByUrl(`characters/${id}`);
  }
}