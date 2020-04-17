import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableContainerComponent } from './components/observable.container';

const routes: Routes = [
  {
    path: 'observable', component: ObservableContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
