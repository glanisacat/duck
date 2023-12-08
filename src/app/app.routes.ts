import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DuckGalleryComponent } from './pages/duck-gallery/duck-gallery.component';
import { DuckBuilderComponent } from './pages/duck-builder/duck-builder.component';
import { DuckGameComponent } from './pages/duck-game/duck-game.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: DuckGalleryComponent },
  { path: 'duck-builder', component: DuckBuilderComponent },
  { path: 'game', component: DuckGameComponent },
  { path: 'info', component: InfoComponent },
];
