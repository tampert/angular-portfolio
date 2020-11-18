import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component'; 
import { CodingComponent } from './components/pages/coding/coding.component'; 
import { HomeComponent } from './components/pages/home/home.component'; 
import { PageNotFoundComponent} from './components/pages/page-not-found/page-not-found.component'
import { SnakeComponent } from './components/games/snake/snake.component'
import { PacManComponent } from './components/games/pac-man/pac-man.component'
import { HeroesComponent } from './components/games/heroes/heroes.component'
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'coding', component: CodingComponent},
  { path: 'coding/snake', component: SnakeComponent},
  { path: 'coding/pacman', component: PacManComponent},
  { path: 'coding/heroes', component: HeroesComponent},
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
