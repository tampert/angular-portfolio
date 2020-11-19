import { Component, OnInit } from '@angular/core';
import { Hero } from './../../../models/hero.model';
import { HeroService } from './../../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero: Hero;

  hero:Hero = {
    id:1,
    name: 'Windstorm'
  }

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
