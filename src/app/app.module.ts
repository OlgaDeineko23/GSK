import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AnatomiaChorobComponent } from './anatomia-chorob/anatomia-chorob.component';
import { KalendarOckovaniaComponent } from './kalendar-ockovania/kalendar-ockovania.component';
import { OchranMacikaComponent } from './ochran-macika/ochran-macika.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { OchranMacikaResultComponent } from './ochran-macika-result/ochran-macika-result.component';
import { OchranMacikaGameComponent } from './ochran-macika-game/ochran-macika-game.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnatomiaChorobComponent,
    KalendarOckovaniaComponent,
    OchranMacikaComponent,
    MainComponent,
    OchranMacikaResultComponent,
    OchranMacikaGameComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
