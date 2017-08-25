import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { IncidentComponent } from './incident/incident.component'


const appRoutes: Routes = [

{
//add routing modules here
 path: '', 
 component:IncidentComponent ,
}

]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);