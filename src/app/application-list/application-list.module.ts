import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationListRoutingModule } from './application-list-routing.module';
import { ApplicationListComponent } from './application-list.component';
import { ApplicationListService } from './application-list.service';


@NgModule({
  declarations: [
    ApplicationListComponent
  ],
  imports: [
    CommonModule,
    ApplicationListRoutingModule
  ],
  providers: [ApplicationListService]
})
export class ApplicationListModule { }
