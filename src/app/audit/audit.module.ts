import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditComponent } from './audit.component';
import { AuditRoutingModule  } from "./audit-routing.module";
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AuditComponent],
  exports: [
    AuditComponent,
  ],
  imports: [
    CommonModule,
    AuditRoutingModule,
    FormsModule
  ]
})
export class AuditModule { }

