import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-list-fighter',
  templateUrl: './list-fighter.component.html',
  styleUrls: [`../app.component.scss`]
})
export class ListFighterComponent implements OnInit {

  fighterList: Fighter[] | undefined;

  constructor(
    private router: Router,
    private fighterService: FighterService
    ) {}

  ngOnInit() {
    this.fighterService.getFighterList()
      .subscribe(fighterList  => this.fighterList = fighterList);
  }

  goToFighter(fighter: Fighter) {
    this.router.navigate(['/fighter', fighter.id]);
  }
}
