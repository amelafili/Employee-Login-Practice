import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoModule } from './info/info.module';
import { AuditModule } from './audit/audit.module';
import { HttpClientModule } from '@angular/common/http';
import { EMPService } from './services/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfoModule,
    AuditModule,
    HttpClientModule
  ],
  providers: [
    EMPService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
