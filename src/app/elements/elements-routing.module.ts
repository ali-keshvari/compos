import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  //localhost:4200/elements/
  { path: '', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
