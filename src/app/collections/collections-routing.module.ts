import { BiographComponent } from './biograph/biograph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';

import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
     //localhost:4200/collections/
    path: '',
    component: CollectionHomeComponent,
    //localhost:4200/collections/
    children: [
      { path: '', component: BiographComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
