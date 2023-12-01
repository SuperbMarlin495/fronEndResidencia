import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'residenciaAPP_frontend';
  sidebarVisible: boolean = false; // Puedes establecerla en true para que la barra lateral sea visible por defecto

}
