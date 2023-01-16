import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { ProfiloComponent } from './component/profilo/profilo.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'profilo', component:ProfiloComponent},
    {path:'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
