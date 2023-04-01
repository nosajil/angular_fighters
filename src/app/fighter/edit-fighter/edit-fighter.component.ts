import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-edit-fighter',
  template: `
    <h2 class="center"> Editer {{fighter?.name}}</h2>
    <p *ngIf="fighter" class="center"> 
      <img [src]="fighter.picture">
    </p>
    <app-fighter-form *ngIf="fighter" [fighter]="fighter"></app-fighter-form>
    `
})
export class EditFighterComponent implements OnInit {
  fighter: Fighter | undefined;

  constructor(
    private route: ActivatedRoute,
    private fighterService: FighterService
  ) { }

  ngOnInit(): void {
    const fighterId: string|null = this.route.snapshot.paramMap.get('id');
    if (fighterId) {
      this.fighterService.getFighterById(+fighterId)
        .subscribe(fighter  => this.fighter = fighter);
    } else {
      this.fighter = undefined;
    }
  }
}
