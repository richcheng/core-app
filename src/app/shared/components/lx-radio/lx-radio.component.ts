import {NgModule,OnInit,Component,Input,Output,AfterViewInit,ElementRef,EventEmitter,forwardRef,ViewChild,ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import { MessagesService } from '../../../services/messages/messages.service';

export const LX_RADIO_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LxRadioComponent),
  multi: true
};
@Component({
  selector: 'core-lx-radio',
  templateUrl: './lx-radio.component.html',
  styleUrls: ['./lx-radio.component.less'],
  providers:[LX_RADIO_CONTROL_VALUE_ACCESSOR]
})
export class LxRadioComponent implements OnInit,ControlValueAccessor,AfterViewInit {

    @Input() value: any;

    @Input() name: string;

    @Input() disabled: boolean;
    
    @Input() label: string;

    @Input() tabindex: number;

    @Input() inputId: string;
    
    @Input() style: any;

    @Input() styleClass: string;

    @Output() onClick: EventEmitter<any> = new EventEmitter();
    
    @ViewChild('rb') inputViewChild: ElementRef;
    
    public input: HTMLInputElement;
        
    public onModelChange: Function = () => {};
    
    public onModelTouched: Function = () => {};
    
    public checked: boolean;
        
    public focused: boolean;

    constructor(
      public messagesService: MessagesService, 
      private cd: ChangeDetectorRef) {}
    
    ngOnInit() {}

    ngAfterViewInit() {
        this.input = <HTMLInputElement> this.inputViewChild.nativeElement;
    }

    handleClick() {
        if(!this.disabled) {
            this.onClick.emit(null);
            this.select();
        }
    }
    
    select() {
        if(!this.disabled) {
            this.input.checked = true;
            this.checked = true;
            this.onModelChange(this.value);
        }
    }
            
    writeValue(value: any) : void {
        this.checked = (value == this.value);
        
        if(this.input) {
            this.input.checked = this.checked;
        }

        this.cd.markForCheck();
    }
    
    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }
    
    setDisabledState(val: boolean): void {
        this.disabled = val;
    }
    
    onFocus(event) {
        this.focused = true;
    }

    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    
    onChange(event) {
        this.select();
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [LxRadioComponent],
    declarations: [LxRadioComponent]
})
export class LxRadioButtonModule { }