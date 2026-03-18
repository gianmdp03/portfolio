import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Footer } from './components/footer/footer';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';
import { Statistics } from './components/statistics/statistics';
import { Work } from './components/work/work';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Experience, Services, Portfolio, Footer, Blog, Contact, Statistics, Work],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private translate: TranslateService){
    this.translate.addLangs(['en','es'])
    this.translate.setFallbackLang('en')
    this.translate.use('en')
  }

  mouseX = 0;
  mouseY = 0;
  isHovering = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    
    const target = event.target as HTMLElement;
    this.isHovering = target.closest('a, button, .cursor-pointer') !== null;
  }
}
