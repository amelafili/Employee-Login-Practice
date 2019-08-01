import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  AuditComponent} from './audit.component'


const routes: Routes = [
    { path: "", component: AuditComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AuditRoutingModule { }