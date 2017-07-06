import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MenuComponent} from '../menu/menu.component';
import {AnatomiaChorobComponent} from '../anatomia-chorob/anatomia-chorob.component';
import {KalendarOckovaniaComponent} from '../kalendar-ockovania/kalendar-ockovania.component';
import {OchranMacikaComponent} from '../ochran-macika/ochran-macika.component';
import {MainComponent} from '../main/main.component';
import {OchranMacikaResultComponent} from '../ochran-macika-result/ochran-macika-result.component';
import {OchranMacikaGameComponent} from '../ochran-macika-game/ochran-macika-game.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'anatomia-chorob', component: AnatomiaChorobComponent},
  {path: 'kalendar-ockovania', component: KalendarOckovaniaComponent},
  {path: 'ochran-macika', component: OchranMacikaComponent},
  {path: 'ochran-macika/game', component: OchranMacikaGameComponent},
  {path: 'ochran-macika/result', component: OchranMacikaResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
