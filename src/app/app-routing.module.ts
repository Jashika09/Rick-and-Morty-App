import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListComponent,
  },
  {
    path: 'characters/:characterId',
    component: SingleCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
