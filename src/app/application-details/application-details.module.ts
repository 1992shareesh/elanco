import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDetailsRoutingModule } from './application-details-routing.module';
import { ApplicationDetailsComponent } from './application-details.component';
import { ApplicationDetailsService } from './application-details.service';

@NgModule({
  declarations: [ApplicationDetailsComponent],
  imports: [CommonModule, ApplicationDetailsRoutingModule],
  providers: [ApplicationDetailsService],
})
export class ApplicationDetailsModule {}
