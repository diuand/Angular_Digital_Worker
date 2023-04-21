import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

// angular components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ButtonHeaderDirective } from './Directives/button-header.directive';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/header-pop-ups/menu/menu.component';
import { HoverOpacity9Directive } from './Directives/hover-opacity-9.directive';
import { HoverBlueDirective } from './Directives/hover-blue.directive';
import { LogoComponent } from './components/logo/logo.component';
import { HoverRedDirective } from './Directives/hover-red.directive';
import { HoberRedWhiteDirective } from './Directives/hober-red-white.directive';
import { HoverYellowWhiteDirective } from './Directives/hover-yellow-white.directive';
import { HoverGrayWhiteDirective } from './Directives/hover-gray-white.directive';
import { AddProjectComponent } from './components/header-pop-ups/add-project/add-project.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderDirective,
    HomeComponent,
    MenuComponent,
    HoverOpacity9Directive,
    HoverBlueDirective,
    LogoComponent,
    HoverRedDirective,
    HoberRedWhiteDirective,
    HoverYellowWhiteDirective,
    HoverGrayWhiteDirective,
    AddProjectComponent,
    EditComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
