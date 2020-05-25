import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { LoginGuard } from './login.guard';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent, canActivate: [LoginGuard] },
  { path: 'posts/:idPost', component: DetallesComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
