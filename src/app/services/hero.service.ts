import { Injectable } from '@angular/core';
import { Hero } from './../models/hero.model';
import { HEROES } from './../fixtures/heroes.fixture'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import  { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url:string = 'https://api.opendota.com/api/heroStats'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient, private messageService:MessagesService) { }

  getHeroes():Observable<Hero[]> {
    this.log('fetched heroes');

    return this.http.get<any[]>(this.url).pipe(
      catchError(this.handleError<any[]>('getHeroes', [])),
    )
    // return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    
    return of(HEROES.find(hero => hero.id === id));
    //return null
  }

  private log(message:string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
