import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowComponent } from './components/show/show.component';

const appRoutes: Routes = [

  { path : 'users', component: ListComponent },
  { path : 'users/create', component: CreateComponent },
  { path : 'users/:id', component: ShowComponent },
  { path : 'users/:id/edit', component: CreateComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
