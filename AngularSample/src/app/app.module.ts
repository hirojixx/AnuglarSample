import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './templates/main-page/main-page.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './organisms/header/header.component';
import { NavigationComponent } from './organisms/navigation/navigation.component';
import { ContentComponent } from './organisms/content/content.component';
import { LoginPageComponent } from './templates/login-page/login-page.component';
import { LoginModalComponent } from './organisms/login-modal/login-modal.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ButtonListComponent } from './molecules/button-list/button-list.component';
import { Content1Component } from './organisms/content/content1/content1.component';
import { Content2Component } from './organisms/content/content2/content2.component';
import { Content3Component } from './organisms/content/content3/content3.component';
import { Content4Component } from './organisms/content/content4/content4.component';
import { Content5Component } from './organisms/content/content5/content5.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    LoginPageComponent,
    LoginModalComponent,
    ButtonComponent,
    ButtonListComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
