import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableContainerComponent } from './components/observable.container';
import { StrategyContainerComponent } from './components/strategy.container';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FacadeComponent } from './components/facade/facade.component';
import { FactoryComponent } from './components/factory/factory.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ExitRegistrationGuard } from './guards/exit-registration.guard';
import { FacadeGuard } from './guards/facade-switch.guard';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

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
		path: 'facade',
		component: FacadeComponent,
		canActivate: [FacadeGuard]
	},
	{
		path: 'factory',
		component: FactoryComponent,
		data: { preload: true, delay: true }
	},
	{
		path: 'registration-page',
		component: RegistrationPageComponent,
		pathMatch: 'full',
		canDeactivate: [ExitRegistrationGuard],
		data: { preload: true }
	},
	{
		path: '**', redirectTo: '/',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
	exports: [RouterModule],
	providers: [CustomPreloadingStrategyService]
})
export class AppRoutingModule { }
