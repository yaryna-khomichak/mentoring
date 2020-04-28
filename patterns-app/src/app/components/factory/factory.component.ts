import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-factory',
	templateUrl: './factory.component.html',
})
export class FactoryComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		abstract class Car {
			engine: string;
			abstract start(): boolean;
		}

		abstract class CarFactory {
			brand: string;
			abstract createCar(carType: CarType): Car;
		}

		enum CarType {
			Electric = 'electric',
			Diesel = 'diesel'
		}

		class ToyotaElectric extends Car {
			engine = CarType.Electric;
			start(): boolean {
				return true;
			}
		}

		class ToyotaDiesel extends Car {
			engine = CarType.Diesel;
			start(): boolean {
				return true;
			}
		}

		class MazdaElectric extends Car {
			engine = CarType.Electric;
			start(): boolean {
				return true;
			}
		}

		class MazdaDiesel extends Car {
			engine = CarType.Diesel;
			start(): boolean {
				return true;
			}
		}

		class ToyotaCarFactory implements CarFactory {
			brand = 'Toyota';
			createCar(carType: CarType): Car {
				let carFactory: Car = null;

				switch (carType) {
					case CarType.Electric:
						carFactory = new ToyotaElectric();
						break;
					case CarType.Diesel:
						carFactory = new ToyotaDiesel();
						break;
				}

				return carFactory;
			}
		}

		class MazdaCarFactory implements CarFactory {
			brand = 'Mazda';
			createCar(carType: CarType): Car {
				let carFactory: Car = null;

				switch (carType) {
					case CarType.Electric:
						carFactory = new MazdaElectric();
						break;
					case CarType.Diesel:
						carFactory = new MazdaDiesel();
						break;
				}

				return carFactory;
			}
		}

		class CarFactoryProducer {
			static getCarFactory(brand: string): CarFactory {
				let carFactory: CarFactory;

				switch (brand) {
					case 'toyota':
						carFactory = new ToyotaCarFactory();
						break;
					case 'mazda':
						carFactory = new MazdaCarFactory();
						break;
				}

				return carFactory;
			}
		}

		const carFact = CarFactoryProducer.getCarFactory('toyota');
		const car = carFact.createCar(CarType.Diesel);
		console.log('The brand of machines is ' + carFact.brand + ' and it has ' + car.engine + ' engine.');
	}
}
