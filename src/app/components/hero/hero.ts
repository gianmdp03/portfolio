import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  imports: [NgxTypedJsModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
