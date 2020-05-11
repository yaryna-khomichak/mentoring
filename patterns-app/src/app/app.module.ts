import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableContainerComponent } from './components/observable.container';
import { StrategyComponent } from './components/strategy/strategy.component';
import { StrategyContainerComponent } from './components/strategy.container';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FacadeComponent } from './components/facade/facade.component';
import { HttpClientModule } from '@angular/common/http';
import { FactoryComponent } from './components/factory/factory.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ReactiveFormComponent } from './components/registration-page/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/registration-page/template-driven-form/template-driven-form.component';
import { CustomSelectComponent } from './components/registration-page/custom-select';

@NgModule({
	declarations: [
		AppComponent,
		ObservableComponent,
		ObservableContainerComponent,
		StrategyComponent,
		StrategyContainerComponent,
		DecoratorComponent,
		FacadeComponent,
		FactoryComponent,
		RegistrationPageComponent,
		ReactiveFormComponent,
		TemplateDrivenFormComponent,
		CustomSelectComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
