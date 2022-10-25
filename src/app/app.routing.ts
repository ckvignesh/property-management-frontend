// import router module
import { Routes, RouterModule } from '@angular/router';


//import page components

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesMasterListComponent } from './properties-master-list/properties-master-list.component';
import { TenantsMasterListComponent } from './tenants-master-list/tenants-master-list.component';
import { FinanceMasterListComponent } from './finance-master-list/finance-master-list.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { LogoutComponent } from './logout/logout.component';

//added routes
const routes:Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'properties', component: PropertiesMasterListComponent},
    {path: 'tenants', component: TenantsMasterListComponent},
    {path: 'finance', component: FinanceMasterListComponent},
    {path: 'reports', component: ReportsListComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'logout', component: LogoutComponent},
    {path: '**', redirectTo: ''}
    // put the ** route at the end of the routes array always
];

export const appRoutingModule = RouterModule.forRoot(routes);