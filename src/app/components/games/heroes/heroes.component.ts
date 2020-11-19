import { Component, OnInit } from '@angular/core';
import { Hero } from './../../../models/hero.model';
import { HEROES } from './../../../fixtures/heroes.fixture'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  hero:Hero = {
    id:1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
