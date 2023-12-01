import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent {
  inputInfo!: string;  
  mensaje = "hola mundo";
  items = [
    {
      uno: 'jpña',
      dos: 'mundo',
      tres: 3.5
    },{
      uno: 'jpña1',
      dos: 'mundo1',
      tres: 3.51
    },{
      uno: 'jpña2',
      dos: 'mundo2',
      tres: 3.52
    },{
      uno: 'jpña3',
      dos: 'mundo3',
      tres: 3.53
    },
  ]

}
