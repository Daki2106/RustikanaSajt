import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
    TranslateModule,
    NgIf
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  langOpen = false;
  menuOpen = false;
  protected readonly title = signal('svadbeni-salon-rustikana');
  currentYear: number = new Date().getFullYear();

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('hr');
    const saved = localStorage.getItem('lang');
    translate.use(saved || 'hr');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.langOpen = false;
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.langOpen = false;
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.langOpen = false;
  }
}