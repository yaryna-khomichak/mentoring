import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableContainerComponent } from './components/observable.container';
import { StrategyComponent } from './components/strategy/strategy.component';
import { StrategyContainerComponent } from './components/strategy.container';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FacadeComponent } from './components/facade/facade.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ObservableComponent,
		ObservableContainerComponent,
		StrategyComponent,
		StrategyContainerComponent,
		DecoratorComponent,
		FacadeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
