import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingComponent } from './setting/setting.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingContactComponent } from './setting-contact/setting-contact.component';

const routes: Routes = [

  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {
    path:'setting' , 
    component:SettingComponent,
    children:[
      {path:'profile' , component:SettingProfileComponent},
      {path:'contact' , component:SettingContactComponent},
      {path:'**' , redirectTo:'profile' , pathMatch:'full'}
    ]
  },
  {path:'**' , component:NotFoundComponent , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
