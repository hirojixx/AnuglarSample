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
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
