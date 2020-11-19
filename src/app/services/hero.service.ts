import { Injectable } from '@angular/core';
import { Hero } from './../models/hero.model';
import { HEROES } from './../fixtures/heroes.fixture'

import  { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessagesService) { }

  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES)
  }
}
