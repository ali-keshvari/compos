import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PalceHolderComponent } from './palce-holder/palce-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PalceHolderComponent,
    RepeatTemplateDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
