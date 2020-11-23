import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../../../models/hero.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './../../../services/hero.service'

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private location:Location,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

}
