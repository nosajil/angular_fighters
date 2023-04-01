import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fighter } from '../fighter';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-fighter',
  templateUrl: './search-fighter.component.html'
})
export class SearchFighterComponent implements OnInit {
  // {..."a".."ab".."abz".."ab".."abs"......}
  searchTerms = new Subject<string>();
  // {...fighterList(a)...fighterList(ab)...fighterList(abz)...}
  fighter$: Observable<Fighter[]>;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  search(term:string) {

  }

  goToDetail(fighter: Fighter) {
    const link = ['/fighter', fighter.id];
    this.router.navigate(link);
  }

}
