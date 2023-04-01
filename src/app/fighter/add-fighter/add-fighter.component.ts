import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';

@Component({
  selector: 'app-add-fighter',
  template: `
    <h2 class="center"> Ajouter un combattant</h2>
    <app-fighter-form [fighter]="fighter"></app-fighter-form>
  `,
})

export class AddFighterComponent implements OnInit {
  fighter: Fighter;

  ngOnInit() {
    this.fighter = new Fighter();
  }
}
