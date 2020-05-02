import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableContainerComponent } from './components/observable.container';
import { StrategyContainerComponent } from './components/strategy.container';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FacadeComponent } from './components/facade/facade.component';
import { FactoryComponent } from './components/factory/factory.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

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
	},
	{
		path: 'registration-page', component: RegistrationPageComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
