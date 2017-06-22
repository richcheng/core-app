import {NgModule,Component,ElementRef,OnInit,Input,Output,EventEmitter,forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

export const LX_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LxInputComponent),
  multi: true
};
@Component({
  selector: 'lx-input',
  templateUrl: './lx-input.component.html',
  styleUrls: ['./lx-input.component.less'],
  providers: [LX_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class LxInputComponent implements ControlValueAccessor, OnInit {
        
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();
    @Input() maxlength: number;
    @Input() minlength: number;
    @Input() placeholder: string;
    @Input() inputId: string;
    @Input() disabled: boolean;
    @Input() readonly: boolean;
    value: number;
    focus: boolean;

    onModelChange: Function = () => {};
    onModelTouched: Function = () => {};

  constructor(public el: ElementRef) { }

    ngOnInit() {
    }

    onInput(event: Event, inputValue: string) {  
        this.onModelChange(this.value);
    }
    
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    
    onFocus() {
        this.focus = true;
    }
   handleChange(event: Event) {
        this.onChange.emit(event);
    }
    
    writeValue(value: any) : void {
        this.value = value;    
    }
    
    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }
}
