import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, catchError } from 'rxjs';
import { Fighter } from './fighter';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  constructor(private http: HttpClient) {}

  getFighterList(): Observable<Fighter[]> {
    return this.http.get<Fighter[]>('api/fighters').pipe(
      tap((fighterList) => console.table(fighterList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getFighterById(fighterId: number): Observable <Fighter|undefined> {
    return this.http.get<Fighter>(`api/fighters/${fighterId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchFighterList(term: string): Observable<Fighter[]> {
    if (term.length <= 1) {
      return of([]);
    }

    return this.http.get<Fighter[]>(`api/fighters/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  // Persister les données utilisateurs
  updateFighter(fighter: Fighter): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/fighters', fighter, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addFighter(fighter: Fighter): Observable<Fighter>{
    const httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Fighter>('api/fighters', fighter, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deleteFighterById(fighterId: number | undefined): Observable<null> {
    return this.http.delete(`api/fighters/${fighterId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  

  getFighterTypeList(): string[] {
    return [
      'MMA', 
      'Boxing', 
      'Westling', 
      'Kickboxing', 
      'Sambo', 
      'Karate',
      'BJJ',
      'Muay-Thai' 
    ];
  }
}
