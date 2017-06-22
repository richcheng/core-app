import { Component, OnInit, forwardRef, Input, OnChanges} from '@angular/core';
import { FormGroup, Validators, ValidatorFn, FormBuilder, FormControl,
  NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';
import { MessagesService } from '../../../services/messages/messages.service';
import { ValidationsService } from '../../validations/validations-service';

// const noop = () => {};

export const CUSTOM_INPUT_EMAIL_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LxInputEmailComponent),
    multi: true
};

@Component({
  selector: 'lx-input-email',
  templateUrl: './lx-input-email.component.html',
  styleUrls: ['./lx-input-email.component.less'],
  providers: [CUSTOM_INPUT_EMAIL_CONTROL_VALUE_ACCESSOR]    
})
export class LxInputEmailComponent implements ControlValueAccessor, OnInit {
  emailForm: FormGroup;
  @Input() public _emailValue = '';
  @Input() public labelMsgId: string;
  @Input() public placeholderMsgId: string;
  @Input() public meta:any={ };  

  propagateChange = (_: any) => {};

  //  get accessor
  get emailValue(): any {
      return this._emailValue;
  };

  //set accessor including call the onchange callback
  set emailValue(val: any) {
      this._emailValue = val;
      this.propagateChange(this._emailValue);
  }

  // this is the initial value set to the component
  writeValue(value:any):void {
    if (value !== undefined) {
        this.emailValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

 constructor(
   public messagesService: MessagesService, 
   private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', this.getValidators()]
    });    
  }

  getValidators(){
    let vArray =[];
    let vFn=null;   
    if (this.meta) {
      if (this.meta.required) {              
        vArray.push(Validators.required);
      };
    } 
    vArray.push(ValidationsService.emailValidator);
    vFn = Validators.compose(vArray)
    return vFn;
  }  

}