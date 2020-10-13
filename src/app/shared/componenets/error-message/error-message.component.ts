import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidatorService } from '../../../core/services/forms/form-validator.service';
@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() control: FormControl;
  @Input() fieldName;

  constructor() { }

  ngOnInit(): void {
    console.log(this.control, this.fieldName)
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidatorService.getValidatorErrorMessage(propertyName, this.fieldName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
