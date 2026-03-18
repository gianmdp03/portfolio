import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  imports: [NgxTypedJsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
