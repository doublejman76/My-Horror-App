import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { PlaygameComponent } from './game-console/playgame/playgame.component';
import { GamelistComponent } from './games/gamelist/gamelist.component';
import { GameRoutingModule } from './games/game-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GamesComponent,
    HeaderComponent,
    PlaygameComponent,
    GamelistComponent,
  ],
  imports: [
    BrowserModule,
    GameRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}






