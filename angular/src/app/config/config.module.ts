import { NgModule } from '@angular/core';

import { MaterialModule } from './../material-design/material.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


@NgModule({
    declarations: [
        NotFoundComponentComponent
    ],
    imports: [
        MaterialModule,
    ],
    exports: [
        NotFoundComponentComponent
    ],
    providers: [
    ]
})
export class ConfigModule { }
