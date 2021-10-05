import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HorrorQueComponent } from './horror-que/horror-que.component';
import { HomeContainerComponent } from './home-container/home-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

HorrorQueComponent




