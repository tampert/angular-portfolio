import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component'; 
import { CodingComponent } from './components/pages/coding/coding.component'; 
import { HomeComponent } from './components/pages/home/home.component'; 
import { PageNotFoundComponent} from './components/pages/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'coding', component: CodingComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
