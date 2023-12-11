import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClouDeseosComponent } from './components/clou-deseos/clou-deseos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  {path: '', component:PrincipalComponent},
  { path: 'clou-deseos', component: ClouDeseosComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
