import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'alonso';
  public nameUpper: string = 'ALONSO';
  public fullName: string = 'mARco AlONso arENas iBaRra';


  public customDate: Date = new Date();


}
