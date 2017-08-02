
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,
        MdCheckboxModule,
        MdTableModule,
        MdAutocompleteModule,
        MdGridListModule
      } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdTableModule,
            MdAutocompleteModule,
            MdGridListModule],
  exports: [BrowserAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdTableModule,
            MdAutocompleteModule,
            MdGridListModule],
})
export class MaterialModule { }
