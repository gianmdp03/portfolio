import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Services, Portfolio, Footer, Blog, Contact, Statistics, Work],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
