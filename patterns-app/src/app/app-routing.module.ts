import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableContainerComponent } from './components/observable.container';
import { StrategyContainerComponent } from './components/strategy.container';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FacadeComponent } from './components/facade/facade.component';
import { FactoryComponent } from './components/factory/factory.component';

const routes: Routes = [
	{
		path: 'observable', component: ObservableContainerComponent,
	},
	{
		path: 'strategy', component: StrategyContainerComponent,
	},
	{
		path: 'decorator', component: DecoratorComponent,
	},
	{
		path: 'facade', component: FacadeComponent,
	},
	{
		path: 'factory', component: FactoryComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
