import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ONama } from './pages/o-nama/o-nama';
import { Galerija } from './pages/galerija/galerija';
import { Kontakt} from './pages/kontakt/kontakt';
import { Hotel } from './pages/hotel/hotel';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'o-nama', component: ONama },
  { path: 'galerija', component: Galerija },
  { path: 'hotel', component: Hotel },
  { path: 'kontakt', component: Kontakt },
  { path: '**', redirectTo: '' },
];

