import { SubBComponent } from './comp-a/sub-b/sub-b.component';
import { SubAComponent } from './comp-a/sub-a/sub-a.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompA } from './comp-a/componente-a.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'

const routes : Routes = [
  { path : 'compa', component : CompA , children :[
    {path: 'suba', component: SubAComponent},
    {path: 'subb', component: SubBComponent}
  ]},
  { path : 'compb', component : CompBComponent },
  { path : 'compc', component : CompCComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
