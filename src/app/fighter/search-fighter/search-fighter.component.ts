import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fighter } from '../fighter';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-search-fighter',
  templateUrl: './search-fighter.component.html'
})
export class SearchFighterComponent implements OnInit {
  // {..."a".."ab".."abz".."ab".."abs"......}
  searchTerms = new Subject<string>();
  // {...fighterList(a)...fighterList(ab)...fighterList(abz)...}
  fighters$: Observable<Fighter[]>;

  constructor(
    private router: Router,
    private fighterService: FighterService
    ) {}

  ngOnInit(): void {
    this.fighters$ = this.searchTerms.pipe(
    // {..."a"."ab"..."abz".."ab".."abs"......}
    // Supprimer les recherches serveurs inférieur à 300ms
    debounceTime(300),
    // {....."ab"...."ab"...."abs"......}
    distinctUntilChanged(),
    // {........."ab"...."abs"......}
    switchMap((term) => this.fighterService.searchFighterList(term))
    // {.........fighterList(ab)....fighterList(abs)......}
    );
  }

  search(term:string) {
    // .next sert a envoyer un flux de donner (comme push pour un tableau là on envoi "a"... "ab".. etc..)
    this.searchTerms.next(term);
  }

  goToDetail(fighter: Fighter) {
    const link = ['/fighter', fighter.id];
    this.router.navigate(link);
  }

}
