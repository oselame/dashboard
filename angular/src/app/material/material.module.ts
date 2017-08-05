
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,
        MdCheckboxModule,
        MdTableModule,
        MdAutocompleteModule,
        MdGridListModule,
        MdCardModule
      } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdTableModule,
            MdAutocompleteModule,
            MdGridListModule,
            MdCardModule],
  exports: [BrowserAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdTableModule,
            MdAutocompleteModule,
            MdGridListModule,
            MdCardModule],
})
export class MaterialModule { }
