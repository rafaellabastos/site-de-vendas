import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: 
    [RouterOutlet, 
    CabecalhoComponent,
    RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-site';
}
 