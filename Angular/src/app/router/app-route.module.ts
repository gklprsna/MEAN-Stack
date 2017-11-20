import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EngineerComponent} from '../components/engineer/engineer.component';
import {EngineerUpdateComponent} from '../components/engineer/engineer-update.component';
import {EngineerCreateComponent} from '../components/engineer/engineer-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/engineers', pathMatch: 'full' },
  { path: 'engineers',  component: EngineerComponent },
  { path: 'engineer/:id', component: EngineerUpdateComponent },
  { path: 'engineer',     component: EngineerCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
