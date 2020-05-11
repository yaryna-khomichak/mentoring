import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-custom-select',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CustomSelectComponent),
			multi: true
		}
	],
	template: `
    <div class="dropdown">
      <button type="button"
        class="btn btn-primary dropdown-toggle w-100"
        (click)="toggleOpen()">
        <span *ngIf="value; else noItem">
          {{ value | titlecase }}
        </span>
        <ng-template #noItem>{{ defaultText }}</ng-template>
      </button>

      <div class="dropdown-menu w-100"
        [class.d-block]="isOpen">
        <button *ngFor='let item of items'
          type="button"
          class="dropdown-item text-center"
          [class.active]="item === value"
          (click)="selectItem(item)">
            {{ item  | titlecase }}
        </button>
      </div>
    </div>
  `
})
export class CustomSelectComponent implements ControlValueAccessor {
	@Input() items: string[];
	@Input() defaultText = 'Select Item';

	public value: string;
	public open: boolean;

	onChange: any = () => {};
	onTouched: any = () => {};

	toggleOpen() {
		this.open = !this.open;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		this.value = value;
	}

	selectItem(item: string): void {
		this.onChange(item);
		this.value = item;
		this.open = false;
	}

	get isOpen() {
		return this.open;
	}
}
