import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './componenets/error-message/error-message.component';



@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ ErrorMessageComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
