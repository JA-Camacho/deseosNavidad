import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ClouDeseosComponent } from './components/clou-deseos/clou-deseos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from './components/toast/toast.component';
import { ChatComponent } from './components/chat/chat.component'
import { ChatService } from './services/chat.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PrincipalComponent,
    ClouDeseosComponent,
    ChatComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ChatService],
  bootstrap: [AppComponent, ChatComponent]
})
export class AppModule { }
