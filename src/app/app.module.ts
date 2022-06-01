import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RankComponent } from './pages/rank/rank.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, RankComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
