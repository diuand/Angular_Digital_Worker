import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
  path: "home",
  component : HomeComponent
  },
  {
    path: '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  { path: "edit/:id", component: EditComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
