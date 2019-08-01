import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then(mod => mod.InfoModule)
  },
  {
    path: 'audit',
    loadChildren: () => import('./audit/audit.module').then(mod => mod.AuditModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then(mod => mod.UploadModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
