import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { DuckGalleryComponent } from './pages/duck-gallery/duck-gallery.component';
import { DuckBuilderComponent } from './pages/duck-builder/duck-builder.component';
import { DuckGameComponent } from './pages/duck-game/duck-game.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: DuckGalleryComponent },
  { path: 'duck-builder', component: DuckBuilderComponent },
  { path: 'game', component: DuckGameComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
    DuckGalleryComponent,
    DuckBuilderComponent,
    DuckGameComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
