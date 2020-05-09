import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposirtoryComponent } from 'src/app/pages/repositories/reposirtory/reposirtory.component';
import { RepositoryTabComponent } from 'src/app/components/repository-tab/repository-tab.component';
import { EmptyStateComponent } from 'src/app/components/empty-state/empty-state.component';
const routes: Routes = [
  {
    path : 'repositories',
    component : ReposirtoryComponent,
    children : [
      {
        path : 'repository-tab',
        component : RepositoryTabComponent
      },
      {
        path : 'empty-state',
        component : EmptyStateComponent
      },
      {
        path : '',
        redirectTo : 'repository-tab',
        pathMatch : 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo : 'repositories',
    pathMatch : 'full'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
