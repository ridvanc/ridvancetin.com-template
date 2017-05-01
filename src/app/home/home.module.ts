import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './home.routes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS]
})
export class HomeModule { }
