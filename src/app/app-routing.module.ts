import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PageNotFoundComponent} from "./@shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '' , redirectTo:'users' , pathMatch:'full'},
  {path:'users' , component: UsersComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
