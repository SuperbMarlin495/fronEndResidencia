import { Component } from '@angular/core';
import {

} from 'primeng/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'residenciaAPP_frontend';
  sidebarVisible: boolean = false; // Puedes establecerla en true para que la barra lateral sea visible por defecto


}
