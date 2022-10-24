import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PropertiesMasterListComponent } from './properties-master-list/properties-master-list.component';
import { TenantsMasterListComponent } from './tenants-master-list/tenants-master-list.component';
import { FinanceMasterListComponent } from './finance-master-list/finance-master-list.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    PropertiesMasterListComponent,
    TenantsMasterListComponent,
    FinanceMasterListComponent,
    ReportsListComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
