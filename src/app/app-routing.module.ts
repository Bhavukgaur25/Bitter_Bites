import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { NewsCComponent } from './news-c/news-c.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login2',pathMatch:'full'
  },
  {
    path:'login2',component:Login2Component
  },
  {
    path:'newsc',component:NewsCComponent
  },
  {
    path:'**', component: Login2Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
