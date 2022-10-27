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
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { LogoutComponent } from './logout/logout.component';

import { appRoutingModule } from './app.routing';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    PropertiesMasterListComponent,
    TenantsMasterListComponent,
    FinanceMasterListComponent,
    ReportsListComponent,
    ErrorPageComponent,
    SettingsPageComponent,
    LogoutComponent
  ],
  imports: [BrowserModule, appRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
