import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  UploadComponent} from './upload.component'


const routes: Routes = [
    { path: "", component: UploadComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class UploadRoutingModule { }