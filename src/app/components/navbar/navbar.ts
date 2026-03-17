import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html'
})
export class Navbar {
  mobileMenu: boolean = false;

  triggerNavItem(id: string) {
    this.mobileMenu = false;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}