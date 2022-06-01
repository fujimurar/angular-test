import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankComponent } from './pages/rank/rank.component';

const routes: Routes = [{ path: 'rank', component: RankComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
