import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecretSantaBoardComponent } from './secret-santa-board/secret-santa-board.component';
import { SecretSantaCardComponent } from './secret-santa-card/secret-santa-card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretSantaBoardComponent,
    SecretSantaCardComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
