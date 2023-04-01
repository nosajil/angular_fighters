import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFighterComponent } from './list-fighter/list-fighter.component';
import { DetailFighterComponent } from './detail-fighter/detail-fighter.component';
import { BorderCardDirective } from './border-card.directive';
import { FighterTypeColorPipe } from './fighter-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FighterService } from './fighter.service';
import { FormsModule } from '@angular/forms';
import { FighterFormComponent } from './fighter-form/fighter-form.component';
import { EditFighterComponent } from './edit-fighter/edit-fighter.component';
import { AddFighterComponent } from './add-fighter/add-fighter.component';
import { SearchFighterComponent } from './search-fighter/search-fighter.component';


const FighterRoutes: Routes = [
  { path: 'edit/fighter/:id', component: EditFighterComponent },
  { path: 'fighter/add', component: AddFighterComponent },
  { path: 'fighters', component: ListFighterComponent },
  { path: 'fighter/:id', component: DetailFighterComponent }
];

@NgModule({
  declarations: [
    ListFighterComponent,
    DetailFighterComponent,
    BorderCardDirective,
    FighterTypeColorPipe,
    FighterFormComponent,
    EditFighterComponent,
    AddFighterComponent,
    SearchFighterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FighterRoutes)
  ],
  providers: [FighterService]
})
export class FighterModule { }
