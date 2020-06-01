import { Observable, of, timer } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategyService implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		console.log('preload');
		if (route.data && route.data.preload) {
			console.log('Preload Path: ' + route.path);
			if (route.data.delay) {
				return timer(30000).pipe(flatMap(_ => load()));
			}
			return load();
		} else {
			return of(null);
		}
	}
}
