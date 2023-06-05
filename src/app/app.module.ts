import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDeckComponent } from './user-deck/user-deck.component';
import { CpuDeckComponent } from './cpu-deck/cpu-deck.component';
import { ErenYaegerComponent } from './eren-yaeger/eren-yaeger.component';
import { MikasaAckermanComponent } from './mikasa-ackerman/mikasa-ackerman.component';
import { KnifeComponent } from './knife/knife.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDeckComponent,
    CpuDeckComponent,
    ErenYaegerComponent,
    MikasaAckermanComponent,
    KnifeComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
