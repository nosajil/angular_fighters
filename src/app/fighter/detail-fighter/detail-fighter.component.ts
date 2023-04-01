import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-detail-fighter',
  templateUrl: './detail-fighter.component.html'
})

export class DetailFighterComponent implements OnInit {

  fighterList: Fighter[] | undefined;
  fighter: Fighter | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private fighterService: FighterService
  ) { }

  ngOnInit(): void {
    const fighterId: string|null = this.route.snapshot.paramMap.get('id');

    if (fighterId) {
      this.fighterService.getFighterById(+fighterId)
        .subscribe(fighter => this.fighter = fighter);
    }
  }

  deleteFighter(fighter: Fighter) {
    this.fighterService.deleteFighterById(fighter.id)
      .subscribe(() => this.goToFighterList());
  }

  goToFighterList(): void {
    this.router.navigate(['/fighters'])
  }

  goToEditFighter(fighter: Fighter) {
    this.router.navigate(['/edit/fighter', fighter.id])
  }
}
