import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent {
  inputInfo!: string;  

}
